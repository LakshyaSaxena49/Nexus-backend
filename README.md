# 🚀 Nexus Backend

A scalable and real-time backend service powering the Nexus chat application. Built with Node.js, Express, MongoDB, and Socket.io, it supports authentication, messaging, file uploads, email notifications, and rate-limiting.

---

## 📌 Introduction

Nexus Backend is a full-featured server designed for a modern real-time chat application. It handles authentication, messaging, media uploads, email services, and user presence while ensuring performance, scalability, and security.

---

## 📚 Table of Contents

* [Introduction](#-introduction)
* [Features](#-features)
* [Tech Stack](#-tech-stack)
* [Project Structure](#-project-structure)
* [Installation](#-installation)
* [Usage](#-usage)
* [Environment Variables](#-environment-variables)
* [API Endpoints](#-api-endpoints)
* [Socket Events](#-socket-events)
* [Dependencies](#-dependencies)
* [Configuration](#-configuration)
* [Examples](#-examples)
* [Troubleshooting](#-troubleshooting)
* [Contributors](#-contributors)
* [License](#-license)

---

## ✨ Features

* 🔐 Custom JWT Authentication (no third-party auth)
* ⚡ Real-time messaging using Socket.io
* 🟢 Online/Offline presence tracking
* 🔔 Typing indicators & notifications
* 📨 Welcome emails via Resend
* 🗂️ Image uploads using Cloudinary
* 🚦 Rate limiting with Arcjet
* 🧱 MongoDB database integration
* 🧰 RESTful API architecture
* 🔒 Secure middleware-based route protection

---

## 🛠 Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

### Real-Time

* Socket.io

### Authentication & Security

* JSON Web Token (JWT)
* bcryptjs
* Arcjet

### Services

* Cloudinary (media storage)
* Resend (email service)

---

## 📁 Project Structure

```
src/
├── controllers/
│   ├── auth.controller.js
│   └── message.controller.js
│
├── emails/
│   ├── emailHandlers.js
│   └── emailTemplates.js
│
├── lib/
│   ├── arcjet.js
│   ├── cloudinary.js
│   ├── db.js
│   ├── env.js
│   ├── resend.js
│   ├── socket.js
│   └── utils.js
│
├── middleware/
│   ├── arcjet.middleware.js
│   ├── auth.middleware.js
│   └── socket.auth.middleware.js
│
├── models/
│   ├── User.js
│   └── Message.js
│
├── routes/
│   ├── auth.route.js
│   └── message.route.js
│
└── server.js
```

---

## ⚙️ Installation

### Prerequisites

* Node.js (v18+ recommended)
* MongoDB (local or Atlas)

### Steps

```bash
git clone https://github.com/LakshyaSaxena49/Nexus-backend.git
cd Nexus-backend
npm install
```

---

## ▶️ Usage

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

---

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=your_mongo_uri_here

NODE_ENV=development

JWT_SECRET=your_jwt_secret

RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=your_email_from_address
EMAIL_FROM_NAME=your_email_from_name

CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
```

---

## 📡 API Endpoints

### Auth Routes (`/api/auth`)

| Method | Endpoint  | Description       |
| ------ | --------- | ----------------- |
| POST   | /register | Register new user |
| POST   | /login    | Login user        |
| GET    | /me       | Get current user  |

---

### Message Routes (`/api/messages`)

| Method | Endpoint | Description               |
| ------ | -------- | ------------------------- |
| GET    | /:userId | Get conversation messages |
| POST   | /        | Send a message            |

---

## 🔌 Socket Events

### Client → Server

* `send_message`
* `typing`
* `stop_typing`

### Server → Client

* `receive_message`
* `user_online`
* `user_offline`

---

## 📦 Dependencies

### Core

* express
* mongoose
* dotenv
* cors
* cookie-parser

### Authentication

* jsonwebtoken
* bcryptjs

### Real-Time

* socket.io

### Services

* cloudinary
* resend

### Security

* @arcjet/node

---

## ⚙️ Configuration

* Ensure MongoDB is running or Atlas URI is valid
* Set correct `CLIENT_URL` for frontend connection
* Configure Cloudinary & Resend before production use
* Keep `.env` secure and never commit it

---

## 💡 Examples

### Health Check

```bash
curl http://localhost:3000/api/health
```

### Sample Response

```json
{
  "status": "OK",
  "message": "Server is running"
}
```

---

## 🛠 Troubleshooting

### MongoDB connection failed

* Check `MONGO_URI`
* Ensure DB is running

### JWT issues

* Verify `JWT_SECRET`
* Check token in request headers/cookies

### Email not sending

* Validate Resend API key
* Check sender configuration

### Socket connection issues

* Ensure frontend matches `CLIENT_URL`
* Check CORS settings

---

## 👥 Contributors

* Lakshya Saxena

---

## 📄 License

This project is licensed under the ISC License.

---
