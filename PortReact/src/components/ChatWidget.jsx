import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const API_URL = "/api/chat";

function useAutoscroll(dep) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [dep]);
  return ref;
}

function Message({ role, text }) {
  const isUser = role === "user";
  return (
    <div className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="h-8 w-8 shrink-0 rounded-full bg-black text-white grid place-content-center">
          🤖
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed shadow-sm ${
          isUser ? "bg-black text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        {text}
      </div>
      {isUser && (
        <div className="h-8 w-8 shrink-0 rounded-full bg-gray-200 grid place-content-center">
          🧑
        </div>
      )}
    </div>
  );
}
Message.propTypes = {
  role: PropTypes.oneOf(["user", "assistant"]).isRequired,
  text: PropTypes.string.isRequired,
};

export default function ChatWidget() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I’m Ryan’s portfolio bot. Ask me anything.",
    },
  ]);

  const scrollRef = useAutoscroll(messages);
  const inputRef = useRef(null);

  useEffect(() => setMounted(true), []);

  // Open via custom event from anywhere (e.g., the "Let’s connect!" button)
  useEffect(() => {
    const openHandler = () => {
      setOpen(true);
      setTimeout(() => inputRef.current?.focus(), 50);
    };
    window.addEventListener("open-chat", openHandler);
    return () => window.removeEventListener("open-chat", openHandler);
  }, []);

  // Tiny global API (optional but handy)
  useEffect(() => {
    const api = {
      open: () => window.dispatchEvent(new CustomEvent("open-chat")),
      close: () => setOpen(false),
      toggle: () => setOpen((v) => !v),
    };
    // @ts-ignore
    window.RyanChat = api;
    return () => {
      // @ts-ignore
      if (window.RyanChat === api) delete window.RyanChat;
    };
  }, []);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  async function send(e) {
    e.preventDefault();
    const text = msg.trim();
    if (!text || busy) return;

    const nextMessages = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setMsg("");
    setBusy(true);

    try {
      const history = nextMessages.slice(-4).map((m) => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: m.content,
      }));

      const r = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history }),
      });

      const data = await r.json();
      const reply = data?.reply ?? "Sorry, I didn’t catch that.";
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Hmm, I couldn’t reach the server." },
      ]);
    } finally {
      setBusy(false);
    }
  }

  if (!mounted) return null;

  return createPortal(
    <>
      {/* FAB */}
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          setTimeout(() => inputRef.current?.focus(), 50);
        }}
        aria-label="Open chat"
        className="fixed z-[2147483647]
                   right-[calc(16px+env(safe-area-inset-right,0px))]
                   bottom-[calc(16px+env(safe-area-inset-bottom,0px))]
                   h-14 w-14 rounded-full bg-white shadow-xl text-2xl
                   grid place-content-center border border-gray-200"
      >
        💬
      </button>

      {/* Optional visual backdrop (doesn't block clicks) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 pointer-events-none z-[2147483646]"
          aria-hidden="true"
        />
      )}

      {/* Floating panel */}
      {open && (
        <div
          className="fixed z-[2147483647]
                     right-[calc(20px+env(safe-area-inset-right,0px))]
                     bottom-[calc(20px+env(safe-area-inset-bottom,0px))]"
        >
          <div
            id="chat-panel"
            className="w-[92vw] max-w-[420px]
                       h-[70vh] max-h-[640px]
                       bg-white rounded-2xl shadow-2xl flex flex-col"
            role="dialog"
            aria-label="Chat with Ryan"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="font-semibold">Chat with Ryan</div>
              <button
                type="button"
                className="text-xl leading-none"
                aria-label="Close chat"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-auto p-3 space-y-3">
              {messages.map((m, i) => (
                <Message
                  key={i}
                  role={m.role === "assistant" ? "assistant" : "user"}
                  text={m.content}
                />
              ))}
              {busy && (
                <div className="flex gap-3">
                  <div className="h-8 w-8 shrink-0 rounded-full bg-black text-white grid place-content-center">
                    🤖
                  </div>
                  <div className="bg-gray-100 rounded-2xl px-3.5 py-2 text-sm shadow-sm">
                    <span className="inline-flex gap-1">
                      <span className="animate-pulse">●</span>
                      <span className="animate-pulse [animation-delay:150ms]">
                        ●
                      </span>
                      <span className="animate-pulse [animation-delay:300ms]">
                        ●
                      </span>
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={send} className="border-t p-3 flex gap-2">
              <input
                ref={inputRef}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Type a message…"
                className="flex-1 h-10 px-3 border rounded-lg focus:outline-none
                           focus:ring-2 focus:ring-black/20"
              />
              <button
                type="submit"
                disabled={busy}
                className="h-10 px-4 rounded-lg bg-black text-white disabled:opacity-50"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>,
    document.body
  );
}
