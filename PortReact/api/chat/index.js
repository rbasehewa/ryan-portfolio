module.exports = async function (context, req) {
  try {
    if (req.method !== "POST") {
      context.res = { status: 405, body: "Method not allowed" }; return;
    }

    const { message = "", history = [] } = req.body || {};
    if (!message || message.length > 600) {
      context.res = { status: 400, body: { reply: "Please keep messages ≤ 600 characters." } };
      return;
    }

    const endpoint   = process.env.AZURE_OPENAI_ENDPOINT;
    const apiKey     = process.env.AZURE_OPENAI_KEY;
    const deployment = process.env.AZURE_OPENAI_DEPLOYMENT;   // e.g. "gpt4o-mini"
    const apiVersion = process.env.AZURE_OPENAI_API_VERSION || "2024-02-15-preview";

    if (!endpoint || !apiKey || !deployment) {
      context.res = { status: 500, body: { reply: "Server not configured." } };
      return;
    }

    
    // resume
    const RESUME_URL   = process.env.RESUME_URL; // e.g. https://yourdomain/cv/Ryan_Maddumahewa_Resume.pdf
    const RESUME_NAME  = process.env.RESUME_NAME || "Maddumahewa_Ryan_Resume.pdf";
    const wantResume = /\b(resume|résumé|cv|curriculum\s*vitae)\b/i.test(message);

    context.log("wantResume?", wantResume, "RESUME_URL?", !!RESUME_URL);

    if (wantResume && RESUME_URL) {
      context.res = {
        headers: { "Content-Type": "application/json" },
        body: {
          reply: "Here’s my latest resume. Would you like the .docx version or email it to you as well?",
          attachments: [
            { type: "file", url: RESUME_URL, filename: RESUME_NAME, mime: "application/pdf" }
          ]
        }
      };
      return;
    }

    const shortHistory = Array.isArray(history) ? history.slice(-4) : [];
    const body = {
      messages: [
        { role: "system", content: "You are Ryan’s portfolio assistant. Be brief and helpful." },
        ...shortHistory,
        { role: "user", content: message }
      ],
      max_tokens: 200,
      temperature: 0.7
    };

    // Azure OpenAI Chat Completions endpoint
    const url = `${endpoint}/openai/deployments/${deployment}/chat/completions?api-version=${apiVersion}`;

    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "api-key": apiKey },
      body: JSON.stringify(body)
    });

    const text = await r.text();
    if (!r.ok) {
      if (r.status === 429) {
        context.res = { status: 200, body: { reply: "I’m at my usage limit right now. Please try again later." } };
        return;
      }
      context.log.error("Azure OpenAI error:", r.status, text);
      context.res = { status: 502, body: { reply: "Processing issue talking to the AI." } };
      return;
    }

    const data  = JSON.parse(text);
    const reply = data?.choices?.[0]?.message?.content ?? "Sorry, I didn’t catch that.";
    context.res = { headers: { "Content-Type": "application/json" }, body: { reply } };
  } catch (err) {
    context.log.error("Function threw:", err);
    context.res = { status: 500, body: { reply: "The assistant is unavailable right now." } };
  }
};