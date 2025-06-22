export async function fetchFromOpenRouter(userQuestion, issue) {
  const apiKey = process.env.REACT_APP_OPENROUTER_API_KEY;

  if (!apiKey) {
    console.error("❌ OpenRouter API key is missing. Check your .env file.");
    return "DevBot is feeling confused. No API key found 😞";
  }

  const prompt = `You're an expert developer. A user submitted this issue:

Title: ${issue.title}
Description: ${issue.body || "No description provided."}

User Question: ${userQuestion}

Give a clear 2–3 step solution, avoid vague suggestions.`;

  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct", // or "openai/gpt-3.5-turbo"
        messages: [
          {
            role: "system",
            content:
              "You are a helpful GitHub assistant. You know a lot about solving GitHub issues.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("⚠️ OpenRouter response error:", data);
      return `DevBot is confused: ${data?.message || "Unexpected error"}`;
    }

    return data.choices?.[0]?.message?.content || "DevBot had nothing to say 😶";
  } catch (err) {
    console.error("❌ OpenRouter API error:", err);
    return "DevBot failed to fetch a response. Sorry DevBot feels bad 😔";
  }
}
