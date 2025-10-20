import { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";

/**
 * TypeLine — minimal typewriter for React
 * mode: "char" (per character) or "word" (per word)
 * speed: ms between steps (char or word depending on mode)
 * delay: ms before typing starts
 * showCaret: blinking caret while typing
 */
export default function TypeLine({
  text,
  strongRanges = [], // [{ start: 7, end: 13 }, ...] indices within full text to render <strong>
  mode = "char",      // "char" | "word"
  speed = 55,         // ms/step (char or word)
  delay = 200,        // ms before typing
  className,
  showCaret = true,
  onDone
}) {
  // Build tokens depending on mode
  const tokens = useMemo(() => {
    if (mode === "word") {
      // keep spaces with words so spacing is natural
      return text.match(/\S+\s*/g) || [text];
    }
    return text.split(""); // char mode
  }, [text, mode]);

  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const startId = setTimeout(() => {
      const tick = () => {
        setCount((c) => {
          const next = Math.min(c + 1, tokens.length);
          if (next < tokens.length) {
            timerRef.current = setTimeout(tick, speed);
          } else if (onDone) {
            onDone();
          }
          return next;
        });
      };
      timerRef.current = setTimeout(tick, speed);
    }, delay);

    return () => {
      clearTimeout(startId);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [tokens.length, speed, delay, onDone]);

  // Render visible slice, preserving <strong> for specified ranges
  const visible = tokens.slice(0, count).join("");
  const parts = useMemo(() => {
    if (!strongRanges.length) return [{ text: visible, strong: false }];
    const runs = [];
    let i = 0;
    while (i < visible.length) {
      const inStrong = strongRanges.some((r) => i < r.end && i >= r.start);
      // find next boundary
      let j = i + 1;
      while (
        j <= visible.length &&
        strongRanges.some((r) => j - 1 < r.end && j - 1 >= r.start) === inStrong
      )
        j++;
      runs.push({ text: visible.slice(i, j - 1), strong: inStrong });
      i = j - 1;
    }
    return runs;
  }, [visible, strongRanges]);

  return (
    <span className={className} aria-live="polite">
      {parts.map((p, idx) =>
        p.strong ? <strong key={idx}>{p.text}</strong> : <span key={idx}>{p.text}</span>
      )}
      {showCaret && count < tokens.length && <span className="caret" aria-hidden="true" />}
    </span>
  );
}

TypeLine.propTypes = {
  text: PropTypes.string.isRequired,
  strongRanges: PropTypes.arrayOf(
    PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number.isRequired
    })
  ),
  mode: PropTypes.oneOf(["char", "word"]),
  speed: PropTypes.number,
  delay: PropTypes.number,
  className: PropTypes.string,
  showCaret: PropTypes.bool,
  onDone: PropTypes.func
};

TypeLine.defaultProps = {
  strongRanges: [],
  mode: "char",
  speed: 55,
  delay: 200,
  className: undefined,
  showCaret: true,
  onDone: undefined
};
