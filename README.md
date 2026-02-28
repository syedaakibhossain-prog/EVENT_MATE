# EventMate

A full-stack event registration and management system. Users can browse events, register, and receive a QR code ticket. Admins can create and delete events, view all registrations, and scan QR codes to check in attendees.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [How It Works](#how-it-works)

---

## Features

**User Side**
- Browse all available events
- Register for an event with name, email, and phone
- Receive a generated QR code ticket after registration
- Download the QR code as a PNG

**Admin Side**
- Secure login via backend authentication
- Create and delete events
- View all registrations in a dashboard table
- Scan attendee QR codes using the device camera
- Mark attendees as checked in

---

## Project Structure

```
EVENT_MATE/
├── client/                         # Frontend (HTML, CSS, JS)
│   ├── index.html                  # Home page
│   ├── event.html                  # Events listing page
│   ├── register.html               # User registration form
│   ├── qr.html                     # QR code display page
│   ├── admin-login.html            # Admin login page
│   ├── admin.html                  # Admin dashboard
│   ├── register_events.html        # Admin event management
│   ├── scan.html                   # Admin QR scanner
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── core/
│       │   └── dataService.js      # All API calls (single source of truth)
│       ├── user/
│       │   ├── event.js            # Event listing and selection
│       │   ├── register.js         # Registration form logic
│       │   └── qr.js              # QR code display and download
│       ├── admin/
│       │   ├── admin.js            # Dashboard registrations table
│       │   ├── reg_events.js       # Create and delete events
│       │   └── scan.js             # QR scanner and check-in
│       └── auth/
│           └── admin-login.js      # Admin login form
│
└── eventmate-backend/              # Backend (Node.js + Express)
    ├── server.js                   # Entry point, CORS, auth route
    ├── .env                        # Environment variables (not committed)
    ├── routes/
    │   ├── events.routes.js
    │   └── users.routes.js
    ├── controlers/
    │   ├── events.controlers.js
    │   └── users.controlers.js
    └── data/
        ├── events.data.js          # In-memory events array
        └── users.data.js           # In-memory users array
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, Vanilla JavaScript (ES Modules) |
| Backend | Node.js, Express |
| QR Generation | qrcode (npm) |
| QR Scanning | html5-qrcode (CDN) |
| Environment | dotenv |
| CORS | cors (npm) |

---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- A code editor (VS Code recommended)
- VS Code Live Server extension (or any local HTTP server)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/EVENT_MATE.git
cd event-mate
```

### 2. Install backend dependencies

```bash
cd eventmate-backend
npm install
```

### 3. Create the environment file

Create a `.env` file inside `eventmate-backend/`:

```
ADMIN_EMAIL=admin@eventmate.com
ADMIN_PASSWORD=yourpassword
FRONTEND_URL=http://127.0.0.1:5500
```

See [Environment Variables](#environment-variables) for details.

### 4. Start the backend server

```bash
node server.js
```

You should see:

```
Server running on http://localhost:3000
```

### 5. Open the frontend

Open `client/index.html` using VS Code Live Server. Make sure it opens on the same origin you set in `FRONTEND_URL` (default: `http://127.0.0.1:5500`).

---

## Environment Variables

Create a `.env` file in the `eventmate-backend/` folder. All variables are required.

| Variable | Description | Example |
|---|---|---|
| `ADMIN_EMAIL` | Admin login email |
| `ADMIN_PASSWORD` | Admin login password |
| `FRONTEND_URL` | Frontend origin for CORS | `http://127.0.0.1:5500` |

> The `.env` file is listed in `.gitignore` and will never be committed to the repository.

---

## API Reference

### Events

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/events` | Get all events |
| POST | `/api/events` | Create a new event |
| DELETE | `/api/events/:id` | Delete an event by ID |
| POST | `/api/events/:id` | Get a single event by ID |

**Create event — request body:**
```json
{
  "name": "Tech Conference 2025",
  "description": "Annual tech summit",
  "venue": "Mumbai Convention Centre",
  "date": "2025-12-01",
  "registrationFee": 499
}
```

### Users

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/users` | Get all registered users |
| POST | `/api/users/:eventId/register` | Register a user for an event |
| PATCH | `/api/users/:id/checkin` | Mark a user as checked in |

**Register user — request body:**
```json
{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "phone": "9876543210"
}
```

**Register user — response:**
```json
{
  "message": "Registration successful",
  "user": {
    "id": "USR1234567890",
    "eventId": 1234567890,
    "eventName": "Tech Conference 2025",
    "name": "Rahul Sharma",
    "email": "rahul@example.com",
    "phone": "9876543210",
    "checkedIn": false,
    "registeredAt": "2025-01-01T00:00:00.000Z"
  },
  "qrCode": "data:image/png;base64,..."
}
```

### Auth

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/login` | Admin login |

**Request body:**
```json
{
  "email": "admin@eventmate.com",
  "password": "yourpassword"
}
```

---

## How It Works

### User Registration Flow

1. User visits `event.html` and browses available events
2. User clicks Register on an event — event data is saved to `sessionStorage`
3. User fills in name, email, and phone on `register.html`
4. Backend generates a unique registration ID and a QR code image
5. The QR code and user details are saved to `sessionStorage` and displayed on `qr.html`
6. User can download the QR code as a PNG

### Admin Flow

1. Admin logs in via `admin-login.html` — credentials are verified by the backend
2. Admin dashboard (`admin.html`) fetches all registrations from the API
3. Admin can create or delete events via `register_events.html`
4. Admin opens `scan.html`, grants camera access, and scans an attendee QR code
5. The scanner fetches all users from the API, finds the matching registration, and displays attendee details
6. Admin clicks Mark as Checked-In — the backend updates the user record

### Data Storage

Currently all data (events and users) is stored in in-memory arrays on the server. This means all data is lost when the server restarts. Database integration (MongoDB or SQLite) is planned for the next version.

---

## Notes

- The frontend uses native ES Modules (`type="module"`), so it must be served over HTTP — opening HTML files directly as `file://` URLs will not work
- The QR scanner requires camera access and only works over HTTPS or `localhost`
- Duplicate registrations are prevented — the same email cannot register for the same event twice