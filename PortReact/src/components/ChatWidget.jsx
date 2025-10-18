import { useState } from "react";
import { askBot } from "../chatApi";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]); // [{role, content}...]
  const [log, setLog] = useState([{ role: "assistant", content: "Hi! Ask about my projects or availability." }]);
  const [busy, setBusy] = useState(false);

  async function send(e) {
    e.preventDefault();
    const q = input.trim();
    if (!q || busy) return;
    setInput("");
    setLog(l => [...l, { role: "user", content: q }]);
    setBusy(true);
    try {
      const data = await askBot(q, history);
      const reply = data?.reply ?? "Sorry, I couldn’t generate a reply.";
      setLog(l => [...l, { role: "assistant", content: reply }]);
      setHistory(h => [...h, { role: "user", content: q }, { role: "assistant", content: reply }]);
    } catch {
      setLog(l => [...l, { role: "assistant", content: "The assistant is unavailable right now." }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <button
        onClick={()=>setOpen(v=>!v)}
        style={{position:"fixed", right:16, bottom:16, padding:"10px 14px", borderRadius:999}}
        aria-haspopup="dialog"
        aria-expanded={open}
      >💬 Chat</button>

      {open && (
        <div role="dialog" aria-label="Chat with Ryan’s AI"
             style={{position:"fixed", right:16, bottom:80, width:360, maxWidth:"92vw", height:520,
                     background:"#fff", borderRadius:16, boxShadow:"0 18px 44px rgba(0,0,0,.18)", overflow:"hidden"}}>
          <header style={{padding:12, fontWeight:600, borderBottom:"1px solid #eee"}}>Ryan’s AI Assistant</header>
          <div style={{padding:12, height:400, overflow:"auto", fontSize:14, lineHeight:1.45}}>
            {log.map((m,i)=>(
              <div key={i} style={{
                margin: "8px 0",
                maxWidth:"80%",
                padding:"8px 10px",
                borderRadius:12,
                background: m.role==="user" ? "#eef3ff" : "#f6f6f6",
                marginLeft: m.role==="user" ? "auto" : 0
              }}>{m.content}</div>
            ))}
          </div>
          <form onSubmit={send} style={{display:"flex", gap:8, padding:12, borderTop:"1px solid #eee"}}>
            <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask about my work…"
                   autoComplete="off" style={{flex:1, padding:10, border:"1px solid #ddd", borderRadius:10}}/>
            <button disabled={busy} type="submit">{busy ? "..." : "Send"}</button>
          </form>
        </div>
      )}
    </>
  );
}