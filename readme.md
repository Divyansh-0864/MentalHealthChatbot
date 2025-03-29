<<<<<<< HEAD
<<<<<<< HEAD
# 🧠 Serenity - Mental Health Chatbot
=======
# Serenity - Mental Health Chatbot
>>>>>>> ab87fe3 (ignore saved models)

Serenity is an AI-powered chatbot designed to provide emotional support, detect mental health risks, and offer helpline information if needed. This chatbot uses Groq's API for conversational AI and a suicide risk detection model to analyze user messages.

## 🚀 Features

- 🌟 **Conversational AI** - Engages users in supportive conversations.
- 🔍 **Mental Health Risk Detection** - Analyzes user messages for suicidal tendencies.
- 📞 **Helpline Integration** - Provides helpline numbers for users at risk.
- 🎨 **Modern UI** - Built with React.js and Tailwind CSS.
- 🛠 **Backend with Node.js & Express** - Handles chatbot responses and risk detection.
- 🔗 **CORS Security** - Restricts access to trusted frontend URLs.

## 📂 Project Structure

```
📦 mentalhealthchatbot
├── 📁 backend
│   ├── 📁 controllers
│   │   ├── chatbotController.js
│   ├── 📁 models
│   │   ├── modelLoader.js
│   │   ├── predict.py
│   ├── 📁 routes
│   │   ├── chatbotRoutes.js
│   ├── server.js
│   ├── package.json
├── 📁 frontend
│   ├── 📁 src
│   │   ├── 📁 components
│   │   │   ├── Chatbot.jsx
│   │   │   ├── Chatbot.css
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   ├── public
│   ├── package.json
│   ├── index.html
└── README.md
```

## 🛠 Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/mentalhealthchatbot.git
cd mentalhealthchatbot
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

### 3️⃣ Download the Model Files  
Download the necessary model files from [Google Drive](https://drive.google.com/drive/folders/1QH5wrcaaIBMM71Ozw53CyVd84zOWFlEQ).

### 4️⃣ Create a .env File  
Create a `.env` file inside `backend/` and add:
```
PORT=5000
FRONTEND_URL=http://localhost:5000
VITE_GROQ_API_KEY=your_groq_api_key_here
```

Create a `.env` file inside `frontend/` and add:
```
VITE_BACKEND_URL=http://localhost:5173
VITE_GROQ_API_KEY=your_groq_api_key_here
```

### 5️⃣ Start the Backend Server
```bash
npm start
```

### 6️⃣ Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

## 🔗 API Endpoints

| Method | Endpoint         | Description |
|--------|----------------|-------------|
| POST | /api/chat    | Sends a message to the chatbot |
| POST | /api/predict | Analyzes text for mental health risk |

## 🛡 Security & Best Practices
- ✅ **CORS Protection**: Restricts frontend access to trusted domains.
- ✅ **Environment Variables**: Sensitive API keys are stored in `.env`.
- ✅ **Production Ready**: Modularized code with proper error handling.

## 💡 Future Enhancements
- 🤖 Implement Rasa or Dialogflow for more intelligent conversations.
- 📊 Add user analytics to track engagement and responses.

## 🤝 Contributing
Feel free to submit issues or pull requests to improve the chatbot.

## 🙌 Credits  
Special thanks to **Gohjiayi** for developing the mental health risk detection model.

<<<<<<< HEAD
🔹 **Developed by Your Name**  
=======
# 🧠 Serenity - Mental Health Chatbot

Serenity is an AI-powered chatbot designed to provide emotional support, detect mental health risks, and offer helpline information if needed. This chatbot uses Groq's API for conversational AI and a suicide risk detection model to analyze user messages.

## 🚀 Features

- 🌟 **Conversational AI** - Engages users in supportive conversations.
- 🔍 **Mental Health Risk Detection** - Analyzes user messages for suicidal tendencies.
- 📞 **Helpline Integration** - Provides helpline numbers for users at risk.
- 🎨 **Modern UI** - Built with React.js and Tailwind CSS.
- 🛠 **Backend with Node.js & Express** - Handles chatbot responses and risk detection.
- 🔗 **CORS Security** - Restricts access to trusted frontend URLs.

## 📂 Project Structure

```
📦 mentalhealthchatbot
├── 📁 backend
|   ├── 📁 controllers
│   │   ├── chatbotController.js
│   ├── 📁 models
│   │   ├── modelLoader.js
│   │   ├── predict.py
│   ├── 📁 routes
│   │   ├── chatbotRoutes.js
│   ├── server.js
│   ├── package.json
├── 📁 frontend
│   ├── 📁 src
│   │   ├── 📁 components
│   │   │   ├── Chatbot.jsx
│   │   │   ├── Chatbot.css
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   ├── public
│   ├── package.json
│   ├── index.html
└── README.md
```

## 🛠 Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/mentalhealthchatbot.git
cd mentalhealthchatbot
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

### 3️⃣ Create a `.env` File
Create a `.env` file inside `backend/` and add:
```
PORT=5000
FRONTEND_URL=http://localhost:5000
VITE_GROQ_API_KEY=your_groq_api_key_here
```
Create a `.env` file inside `frontend/` and add:
```
VITE_BACKEND_URL=http://localhost:5173
VITE_GROQ_API_KEY=your_groq_api_key_here
```

### 4️⃣ Start the Backend Server
```bash
npm start
```

### 5️⃣ Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

## 🔗 API Endpoints

| Method | Endpoint         | Description |
|--------|----------------|-------------|
| `POST` | `/api/chat`    | Sends a message to the chatbot |
| `POST` | `/api/predict` | Analyzes text for mental health risk |

## 🛡 Security & Best Practices
- ✅ **CORS Protection**: Restricts frontend access to trusted domains.
- ✅ **Environment Variables**: Sensitive API keys are stored in `.env`.
- ✅ **Production Ready**: Modularized code with proper error handling.

## 💡 Future Enhancements
- 🤖 Implement Rasa or Dialogflow for more intelligent conversations.
- 📊 Add user analytics to track engagement and responses.
- 🌍 Deploy on Render/Vercel for cloud hosting.

## 🤝 Contributing
Feel free to submit issues or pull requests to improve the chatbot.

---

🔹 **Developed by Your Name**  
>>>>>>> ed5364fc5725d7bbfd3d5910259c8935c2f2e478
=======
---
>>>>>>> ab87fe3 (ignore saved models)
