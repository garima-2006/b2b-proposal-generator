# 🚀 AI B2B Proposal Generator

An AI-powered web application that generates structured, sustainable B2B business proposals based on user inputs like industry, budget, target market, and sustainability goals.

Built using:
- React (Vite)
- Node.js + Express
- Groq API (LLM)
- Tailwind CSS
- Chart.js

---

## 📌 Project Overview

This application fulfills the requirements of:

### Module 2: AI B2B Proposal Generator

It generates:

1. ✅ Suggested sustainable product mix  
2. ✅ Budget allocation (within provided limit)  
3. ✅ Estimated cost breakdown  
4. ✅ Impact positioning summary  
5. ✅ Structured JSON output  

---

## 🖥️ Tech Stack

### Frontend
- React
- Tailwind CSS
- Chart.js
- Axios

### Backend
- Node.js
- Express
- Groq LLM API
- dotenv

---

## 📂 Project Structure

```
b2b-proposal-generator/
│
├── client/         # React Frontend
├── server/         # Express Backend
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/garima-2006/b2b-proposal-generator.git
cd b2b-proposal-generator
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside `server`:

```
GROQ_API_KEY=your_api_key_here
```

Start backend:

```bash
node server.js
```

Server runs on:
```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

Open new terminal:

```bash
cd client
npm install
npm run dev
```

Frontend runs on:
```
http://localhost:5173
```

---

## 📊 Features

- Clean modern UI using Tailwind CSS
- Responsive layout
- Smart AI-generated business recommendations
- Budget-aware allocation logic
- Cost breakdown visualization (Chart.js)
- Structured JSON output for enterprise integration
- API tested with Postman

---

## 🧠 Example Input

- Industry: Manufacturing  
- Budget: ₹500000  
- Sustainability Goals: Reduce emissions  
- Target Market: SMEs  

---

## 📦 Example Output

- Sustainable product recommendations
- Budget allocation table
- Cost distribution chart
- Strategic positioning summary
- Structured JSON response

---

## 🔐 Security

- API keys stored in `.env`
- `.env` excluded via `.gitignore`
- GitHub push protection resolved

---

## 🚀 Future Improvements

- Deployment (Vercel + Render)
- User authentication
- Proposal PDF export
- Dashboard history tracking
- Improved financial modeling

---

## 👩‍💻 Author

Garima Sharma  
GitHub: https://github.com/garima-2006

---

## 📜 License

This project is for academic and portfolio purposes.