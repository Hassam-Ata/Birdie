# 🐦 Birdie – Full-Stack Mobile Social App

**Birdie** is a cross-platform mobile social app built using **React Native (Expo)** on the frontend and **Node.js + Express** on the backend.

---

## 🧰 Tech Stack

### 🖼️ Frontend (Mobile)
- **React Native (Expo)**
- **Clerk** for authentication (OAuth via Google/Apple)
- **Axios** for API communication

---
### 🔧 Backend
- **Node.js + Express.js**
- **MongoDB + Mongoose**
- **Cloudinary** for media upload & optimization
- **Arcjet** for bot protection & rate limiting
---

## 🚀 Key Features

- 🔐 **Authentication** via Clerk (supports Google & Apple ID)
- 🏠 **Home Feed**: Post text and images from camera or gallery
- ❤️ **Like & Comment System** with interactive modals
- 🔔 **Notifications Tab** for engagement updates
- 📬 **Messages Tab**: Chat history and long-press message delete
- 👤 **Profile Tab** with editable profile options
- 🔎 **Search Tab** for trending posts
- 🚪 **Secure Logout** that redirects to login

---

## 🧠 Implementation Highlights

- REST API built with Express.js and MongoDB
- Secure image upload via Cloudinary
- Rate limiting and bot protection with Arcjet
- Authentication flows integrated with Clerk


---

## 📁 Environment Configuration

### Backend (`/backend/.env`)
```
PORT=5001
NODE_ENV=development

CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
CLERK_SECRET_KEY=<your_clerk_secret_key>

MONGO_URI=<your_mongodb_connection_uri>

ARCJET_ENV=development
ARCJET_KEY=<your_arcjet_api_key>

CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
```

### Mobile (`/backend/.env`)

```
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
EXPO_PUBLIC_API_URL=<your_backend_api_url>
```
## ⚙️ Getting Started

###  Run the Backend
```
cd backend
npm install
npm run dev
```

###  Run the Mobile App

To run your project, run one of the following npm commands.
```
- npm run android
- npm run ios # you need to use macOS to build the iOS project - use the Expo app if you need to do iOS development without a Mac
- npm run web
```







