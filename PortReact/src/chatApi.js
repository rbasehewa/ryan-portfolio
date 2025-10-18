export async function askBot(message, history = []) {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, history })
  });
  if (!res.ok) throw new Error("Chat API failed");
  return res.json(); // { reply }
}