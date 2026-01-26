# 🎟️ EventMate

EventMate is an event management learning project focused on understanding backend APIs and full-stack fundamentals.

This repository currently contains the early backend stage of EventMate, built step by step using Node.js and Express.

## 🚧 Status: In Development (Learning Phase)

## 🚀 Current Features
✅ Backend API (Node + Express)

Basic Express server setup

Runs locally on http://localhost:3000

REST-style API structure

✅ Event Management API (No Database Yet)

Events are stored temporarily using an in-memory array.

Each event includes:

id

title

description

time

price

##📡 Available API Endpoints
🔹 Get all events
GET /events


Returns a list of all events.

🔹 Create a new event
POST /events


Request body (JSON):

{
  "title": "Tech Talk",
  "description": "Discussion on AI and future tech",
  "time": "4:00 PM",
  "price": 200
}

🔹 Delete an event
DELETE /events/:id


Deletes an event using its unique ID.

##🧠 Business Rules Implemented

❌ Existing events cannot be updated

✅ Events can only be created or deleted

These rules are enforced at the backend level

## 🗂 Project Structure
EventMate/
├── client/          # Frontend (HTML, CSS, JS)
├── server/          # Backend (Node + Express)
│   └── server.js
└── README.md

##🛠 Tech Stack (Current)

Node.js

Express.js

JavaScript

REST APIs

## 📌 Planned Improvements

Connect frontend to backend API

Add event creation form in frontend

Add database (MongoDB)

Add authentication & admin access

Deploy backend and frontend

## 📖 Learning Note

This project is intentionally built slowly and step by step to ensure a strong understanding of backend and full-stack development concepts.

Speed is not the priority — clarity and correctness are.

## 👤 Author

Aakib
Aspiring Full-Stack Developer 🚀