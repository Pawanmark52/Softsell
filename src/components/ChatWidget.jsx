import React, { useState } from 'react';
import './ChatWidget.css';

const faq = {
  "how do i sell my license": "Simply fill out the form above and we’ll get back to you with a valuation.",
  "how long does it take": "Typically, you’ll receive payment within 24–48 hours after approval.",
  "is this safe": "Yes, all transactions are encrypted and handled securely.",
};

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Ask me anything about selling your license." }
  ]);

  const sendMessage = () => {
    const userMsg = input.toLowerCase().trim();
    const response = faq[userMsg] || "Sorry, I don’t have an answer for that. Please contact support.";
    setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: response }]);
    setInput('');
  };

  return (
    <div className={`chat-widget ${open ? 'open' : ''}`}>
      {open && (
        <div className="chat-box">
          {messages.map((m, i) => (
            <div key={i} className={`msg ${m.sender}`}>{m.text}</div>
          ))}
          <div className="chat-input">
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
      <button className="chat-toggle" onClick={() => setOpen(!open)}>
        💬
      </button>
    </div>
  );
};

export default ChatWidget;
