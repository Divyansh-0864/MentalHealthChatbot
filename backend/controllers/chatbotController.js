import Groq from "groq-sdk";
import dotenv from "dotenv";
import { predict } from "../models/modelLoader.js"; // Import suicide risk model

dotenv.config();
const preventionMessage = ["Are you okay? How long have you been feeling this way?",
  "That sounds so painful, and I appreciate you sharing that with me. How can I help?",
  "I know things seem bleak now, but it can be hard to see possible solutions when you feel so overwhelmed.", 
  "I'm concerned about you because I care, and I want to offer support however I can. You can talk to me.",
  "I'm always here if you feel like talking.",
  "I'm always here to listen, but do you think a therapist could help a little more?",
  "Have you thought about talking to a therapist?",
  "You can withstand any storm and when you are too tired to stand, I will hold you up. You are never alone.", 
  "You know I'm always here for you.",
  "You're allowed to have bad days, but remember tomorrow is a brand new day.",
  "You've got a place here on Earth for a reason.",
  "It's okay to have such thoughts but if they become overwhelming, don't keep it to yourself. I am here for you.", 
  "Everything is a season, and right now you're in winter. It's dark and cold and you can't find shelter, but one day it'll be summer, and you'll look back and be grateful you stuck it out through winter.",
  "I know you are going through a lot and you're scared, but you will never lose me.",
  "I know it feels like a lot right now. It's OK to feel that way.",
  "Is there anything I can do to make this day go easier for you?"]


const groq = new Groq({ apiKey: process.env.VITE_GROQ_API_KEY});

//Helpline Information
const helplineMessage = `\n
If you're feeling distressed, please reach out:\n
📞 Vandrevala Foundation: 1860 266 2345\n
📞 iCall: +91 9152987821\n
📞 Jeevan Aastha: 1800 233 3330\n
📞 Lifeline Foundation: 9088030303\n
`;

// export const chatWithGroq = async (req, res) => {
//   try {
//     const { message } = req.body;

//     const prediction = await predict(message);
//     console.log("Risk ==== ", prediction.risk);

//     //Step 2: If suicidal, send prevention message + helpline
//     if (prediction.risk) {
//       const prevention_Message = preventionMessage[Math.floor(Math.random() * preventionMessage.length)];
//       const botReply = `${prevention_Message}\n\n${helplineMessage}`;
      
//       return res.json({ reply: botReply });
//     }

//     //Step 3: Get response from Groq API (if not suicidal)
//     const chatCompletion = await groq.chat.completions.create({
//       messages: [{ role: "user", content: message }],
//       model: "llama-3.3-70b-versatile",
//       max_tokens: 300,
//     });

//     let botReply = chatCompletion.choices[0]?.message?.content || "I'm here to listen.";
//     console.log("Bot Reply: ", botReply);

//     res.json({ reply: botReply });
//   } catch (error) {
//     console.error("Groq API Error:", error.response?.data || error.message);
//     res.status(error.response?.status || 500).json({
//       error: "Groq API request failed",
//     });
//   }
// };

export const chatWithGroq = async (req, res) => {
  try {
    const { message } = req.body;

    // Run suicide risk check and chatbot response in parallel
    const [prediction, chatCompletion] = await Promise.all([
      predict(message), // Suicide risk detection
      groq.chat.completions.create({
        messages: [{ role: "user", content: message }],
        model: "llama-3.3-70b-versatile",
        max_tokens: 300,
      }), // Groq API call
    ]);

    console.log("Risk ==== ", prediction.risk);

    let botReply;
    if (prediction.risk) {
      // If suicidal, send prevention message + helpline
      const prevention_Message = preventionMessage[Math.floor(Math.random() * preventionMessage.length)];
      botReply = `${prevention_Message}\n\n${helplineMessage}`;
    } else {
      // Get response from Groq API
      botReply = chatCompletion.choices[0]?.message?.content || "I'm here to listen.";
    }

    console.log("Bot Reply: ", botReply);

    // Step 5: Send the final bot reply
    return res.json({ reply: botReply });
  } catch (error) {
    console.error("Groq API Error:", error.response?.data || error.message);
    return res.status(error.response?.status || 500).json({
      error: "Groq API request failed",
    });
  }
};
