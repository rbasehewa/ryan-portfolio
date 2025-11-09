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

function Message({ role, text, attachments = [] }) {
  const isUser = role === "user";
  return (
    <div className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (<div className="h-8 w-8 shrink-0 rounded-full bg-black text-white grid place-content-center">🤖</div>)}
      <div className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed shadow-sm ${isUser ? "bg-black text-white" : "bg-gray-100 text-gray-900"}`}>
        <div>{text}</div>
       {attachments.length > 0 && (
         <div className="mt-2 flex flex-wrap gap-2">
           {attachments.map((a, i) => (
             <a key={i} href={a.url} target="_blank" rel="noopener noreferrer"
                download={a.filename || undefined}
                className="inline-flex items-center gap-2 rounded-lg border px-3 py-1 text-sm bg-white hover:bg-gray-50"
                title={a.filename || "Download"}>
               📄 {a.filename || "Resume.pdf"}
             </a>
           ))}
         </div>
       )}
      </div>
      {isUser && (<div className="h-8 w-8 shrink-0 rounded-full bg-gray-200 grid place-content-center">🧑</div>)}
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
      const attachments = data?.attachments ?? [];
      setMessages((m) => [...m, { role: "assistant", content: reply, attachments }]);
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
{/* FAB: Chat with Ryan */}
<button
  type="button"
  onClick={() => {
    setOpen(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  }}
  aria-label="Open Chat with Ryan"
  className="fixed z-[2147483647] right-[calc(24px+env(safe-area-inset-right,0px))]
             bottom-[calc(24px+env(safe-area-inset-bottom,0px))]
             flex items-center gap-2 rounded-full px-5 py-3
             bg-gradient-to-r from-sky-500 to-blue-600 text-white
             shadow-xl hover:from-sky-600 hover:to-blue-700
             transition-transform duration-300 hover:scale-105"
>
  <span className="text-lg">💬</span>
  <span className="font-medium">Chat with Ryan</span>
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
    onClick={() => setOpen(false)}
    className="fixed inset-0 bg-black/30 backdrop-blur-[1px]
               z-[2147483646] opacity-100 transition-opacity"
    aria-hidden="true"
  />
)}

{/* Popup panel */}
<div
  className={`fixed z-[2147483647]
              right-[calc(20px+env(safe-area-inset-right,0px))]
              bottom-[calc(20px+env(safe-area-inset-bottom,0px))]
              w-[92vw] max-w-[420px] 
              transition-all duration-300
              ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}
  role="dialog"
  aria-label="Chat with Ryan"
  aria-modal="true"
>
  <div className="bg-white rounded-2xl shadow-2xl flex flex-col h-[70vh] max-h-[640px] border">
    {/* Header */}
    <div className="flex items-center justify-between px-4 py-3 
                    bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-t-2xl">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-white text-blue-600 grid place-content-center text-lg shadow-md">
          🤖
        </div>
        <div className="font-semibold">Chat with Ryan</div>
      </div>
      <button
        type="button"
        className="text-xl leading-none hover:text-gray-200"
        aria-label="Close chat"
        onClick={() => setOpen(false)}
      >
        ✕
      </button>
    </div>

    {/* Messages (keep your existing renderer) */}
    <div ref={scrollRef} className="flex-1 overflow-auto p-3 space-y-3 bg-white">
      {messages.map((m, i) => (
        <Message
          key={i}
          role={m.role === "assistant" ? "assistant" : "user"}
          text={m.content}
          attachments={m.attachments}
        />
      ))}
      {busy && (
        <div className="flex gap-3">
          <div className="h-8 w-8 shrink-0 rounded-full bg-black text-white grid place-content-center">🤖</div>
          <div className="bg-gray-100 rounded-2xl px-3.5 py-2 text-sm shadow-sm">
            <span className="inline-flex gap-1">
              <span className="animate-pulse">●</span>
              <span className="animate-pulse [animation-delay:150ms]">●</span>
              <span className="animate-pulse [animation-delay:300ms]">●</span>
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
        placeholder="Ask about my projects or resume…"
        className="flex-1 h-10 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
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
    </>,
    document.body
  );
}
