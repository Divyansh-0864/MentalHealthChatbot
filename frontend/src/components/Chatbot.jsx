import { useState } from "react";
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false); // Track if the bot is typing
  const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput(""); // Clear input field

    // Show typing indicator
    setIsTyping(true);

    try {
      // Simulating delay for UI smoothness (optional)
      await new Promise((resolve) => setTimeout(resolve, 500));

      const chatResponse = await fetch(`${BASE_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const chatData = await chatResponse.json();
      const botMessage = { text: chatData.reply, sender: "bot" };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
      
      // Stop typing indicator
      setIsTyping(false);

      // Check risk prediction
      const riskResponse = await fetch(`${BASE_URL}/api/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const riskData = await riskResponse.json();

      if (riskData.risk) {
        const helplineMessage = { text: riskData.helpline, sender: "bot" };
        setMessages((prevMessages) => [...prevMessages, helplineMessage]);
      }
    } catch (error) {
      console.error("Error fetching bot response:", error);
      setIsTyping(false);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {isTyping && <div className="Serenity bot typing">Thinking...</div>}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
