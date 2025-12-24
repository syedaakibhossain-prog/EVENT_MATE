# 🎟️ EventMate — MVP v1.0

## EventMate is a QR-based event registration and check-in system built to streamline event entry verification with a simple, reliable workflow.

## This release marks the completion of MVP v1.0, delivering a fully functional end-to-end flow for users and admins.

## 🚀 MVP Status

## ✅ MVP v1.0 — Completed & Functional

The core problem EventMate aims to solve — secure event registration and QR-based attendee verification — is fully implemented and tested.
/screenshots/register.png
/screenshots/qr.png
/screenshots/admin-login.png
/screenshots/admin.png
/screenshots/scan.png



## 🔥 What EventMate Does

Users register for an event and receive a unique QR code

Admin scans the QR code at entry

System verifies registration and marks attendance

Duplicate check-ins are prevented

## ✅ Current Features (MVP v1.0)

## 👤 User Features

View event information

Register for an event via form

Registration data stored locally

Automatic unique registration ID generation

QR code generated after successful registration

QR code contains the registration ID

Download QR code as an image

Redirect flow: Registration → QR page

## 🛠️ Admin Features

Secure admin login (credential-based)

Admin dashboard access

Dedicated QR scanning page

Real-time QR code scanning using device camera

Verify attendee details:

Registration ID

Name

Email

Payment status

Check-in functionality

Prevents duplicate check-ins

Persistent attendance status stored

📷 QR & Scanning System

QR codes generated using QRCode.js

QR scanning powered by html5-qrcode

Camera permission handling

Graceful handling of scan errors

Tested with printed QR codes (real-world use case)

## ⚙️ Technical Implementation

Frontend: HTML5, CSS3, Vanilla JavaScript (ES6)

Storage: localStorage (for MVP data persistence)

Libraries:

QRCode.js — QR generation

html5-qrcode — Camera-based QR scanning

Page-specific JavaScript architecture

No backend (intentional MVP design choice)

Git-based version control

🧪 MVP Scope Clarification

This MVP focuses on functionality over scale.

Included:

Complete registration → scan → check-in workflow

Admin verification logic

Real-world QR scanning validation

Excluded (Post-MVP):

Backend & database

Online payments

Multi-event routing

User authentication system

## 🛣️ Planned Features (Post-MVP / v1.x)

## 👤 User Enhancements

Event-specific registration routing

Event details page

Mobile-first UI improvements

Payment status automation

## 🛠️ Admin Enhancements

View registered users per event

QR scan history

Attendance analytics

Edit & delete events

## 🔐 System Enhancements

Backend integration

Database support

Authentication & authorization

Role-based access control

## 📌 Project Nature

✅ Personal project

✅ Portfolio-ready

✅ Built for learning real-world frontend logic

❌ Not a hackathon project

❌ Not production-deployed (yet)

## 📄 License

This project is intended for educational and portfolio purposes.