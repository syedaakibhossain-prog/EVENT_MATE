# 🎟️ EventMate — MVP v1.0

EventMate is a web-based event management system that enables seamless event registration, QR-based entry verification, and admin-controlled event management — built using pure frontend technologies with a real-world data flow.

🔗 Live Demo:
https://syedaakibhossain-prog.github.io/EVENT_MATE/
---
## 📌 Project Status

✅ MVP v1.0 – Completed
🚀 Core event flow, registration, and QR-based check-in are fully functional.
---
## 🔥 About the Project

EventMate is a personal portfolio project built to simulate a real-world event registration and verification system.

The project focuses on:

Clean frontend architecture

Practical use of localStorage as a temporary database

End-to-end event flow (Admin → User → QR → Scan → Check-in)

Building MVP-level features before backend integration
---
## 🧩 Core Workflow (End-to-End)
Admin creates event
        ↓
User views events
        ↓
User registers for a selected event
        ↓
QR code generated with registration ID
        ↓
Admin scans QR code
        ↓
User verified & checked-in
---
## ✅ Current Features (MVP v1.0)
### 👤 User Side

View all available events

View event details (name, venue, date, fee)

Register for a selected event

Payment section dynamically shows correct event fee

Unique registration ID generated

QR code generated after registration

Downloadable QR code

Event name displayed on:

Registration page

QR page

### 🛠️ Admin Side

Secure admin login

Admin dashboard

Create multiple events

Set event-specific:

Name

Description

Venue

Date

Registration fee

View registered users per event

QR code scanning using camera

Real-time registration verification

Check-in management (Checked-in / Not checked-in)

Prevent duplicate check-ins

### 📷 QR & Verification System

QR code contains unique registration ID

Live camera scanning via browser

Automatic user lookup from stored registrations

Displays:

User name

Email

Event name

Payment status

Check-in status

---
## ⚙️ Tech Stack

HTML5

CSS3

Vanilla JavaScript (ES6)

html5-qrcode (QR scanning)

QRCode.js (QR generation)

LocalStorage (data persistence)

Git & GitHub (version control & deployment)
---
## 🧠 Architectural Highlights

Page-specific JavaScript files (clean separation of concerns)

Event-based data model

Safe parsing & validation of localStorage

MVP-ready structure that can be upgraded to backend easily
---
## 🚀 Future Improvements (Post-MVP)

Backend integration (Node.js / Firebase / Supabase)

Database support

Admin analytics dashboard

Role-based authentication

Payment gateway integration

Event capacity limits

Email confirmation with QR code

Deployment with server-side verification
---
## 🧪 Project Scope

✅ Personal learning & portfolio project

❌ Not built for commercial use

❌ No backend (intentionally frontend-only MVP)
---
## 📄 License

This project is open for educational and portfolio use.
---
## 💡 EventMate — Smart Events. Simple Entry.