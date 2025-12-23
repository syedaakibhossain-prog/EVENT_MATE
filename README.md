# 🎟️ EventMate

EventMate is a web-based event management platform built to simplify event registration and QR-based entry verification.

🚧 **Project Status:** Under Development (Core Features Completed)

---

## 🔥 About the Project

EventMate is a personal project developed to practice real-world frontend development concepts such as form handling, localStorage-based data flow, QR code generation, and admin-controlled event management.

Users can register for events and receive a downloadable QR code, while admins can create and manage events from a dedicated portal.

---

## ✅ Current Features (Implemented)

### 👤 User Side
- View available events
- Register for an event
- Registration data stored using `localStorage`
- Unique registration ID generation
- QR code generated after successful registration
- **Download QR code as an image**
- Display registration ID alongside QR code

### 🛠️ Admin Side
- Admin login (credential-based)
- Secure admin authentication
- Create events with:
  - Event name
  - Description
  - Venue
  - Date
  - Registration fee
- Event data stored using `localStorage`

### ⚙️ Technical Highlights
- HTML5, CSS3, Vanilla JavaScript
- Page-specific JavaScript architecture
- Clean, professional UI
- QR code generation using `QRCode.js`
- Git-based version control

---

## 🚧 MVP Features (Pending)

### 👤 User Enhancements
- Event-specific registration routing
- Payment status handling (paid / unpaid)
- Event details page
- Improved mobile responsiveness

### 🛠️ Admin Enhancements
- View registered users per event
- QR code scanning for attendee check-in (**MVP critical**)
- Attendance tracking (checked-in / not checked-in)
- Edit & delete events


### 🔐 Future Improvements
- Backend integration
- Database support
- Authentication & authorization
- Role-based access control

---
## 🔄 Application Flow

1. Admin logs in and creates an event
2. Event data is saved to `localStorage`
3. Users view available events
4. Users register for an event
5. A unique registration ID is generated
6. QR code is created and displayed
7. User downloads QR code for event entry
---
## 📂 Pages Included

- Home / Event Listing
- Event Registration Page
- QR Code Confirmation Page
- Admin Login Page
- Admin Dashboard
- Event Creation Page
---
## ⚠️ Known Limitations

- Data persistence is limited to browser `localStorage`
- Admin credentials are hardcoded (demo purpose)
- No backend or server-side validation
- No real payment gateway integration
---


## 🎯 Why I Built EventMate

This project was built to:
- Practice real-world frontend application flow
- Understand state management without frameworks
- Implement admin vs user logic
- Work with QR code generation and validation
- Build a portfolio-ready application from scratch


---

## 📌 Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- QRCode.js
- Git & GitHub

---

## 📄 License

This project is intended for educational and portfolio purposes.

---

💡 *EventMate – Smart Events. Simple Entry.*
