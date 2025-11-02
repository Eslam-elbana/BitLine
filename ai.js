const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

const API_KEY = "YOUR_API_KEY_HERE"; // ← ضع المفتاح هنا

function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = "message " + sender;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userMessage = userInput.value.trim();
  if (!userMessage) return;

  addMessage("user", userMessage);
  userInput.value = "";

  addMessage("ai", "⏳ Thinking...");

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [{ role: "user", content: userMessage }]
      })
    });

    const data = await res.json();
    const aiReply = data.choices[0].message.content;

    const thinkingMsg = chatBox.querySelector(".message.ai:last-child");
    thinkingMsg.textContent = aiReply;

  } catch (err) {
    const thinkingMsg = chatBox.querySelector(".message.ai:last-child");
    thinkingMsg.textContent = "❌ Error connecting to AI server.";
  }
});
