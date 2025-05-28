# 🖼️ Eclypse

This repository contains a clone of a provided Figma design. The project is a responsive and dynamic web application that faithfully recreates the UI and behavior from the original Figma mockup, using **React.js**, **TypeScript**, **Tailwind CSS**, and a backend powered by **Node.js** and **Express**.

---

## 🚀 Tech Stack

### 🧠 Frontend 
- **TypeScript**
- **React.js**
- **Vite** (for fast development server and build)
- **Tailwind CSS** (for fast and responsive styling)

cd frontend
npm install
npm run dev

# Runs Vite development server at http://localhost:5173 (default)


### 🔧 Backend
- **Node.js**
- **Express.js**
- **Dummy API** serves order data via `/orders` endpoint

### 📦 Backend Setup


cd backend
npm install
npm run def
# Runs Express server at http://localhost:5000
---

## 🗂️ Features

- ✅ Pixel-perfect clone of the original **Figma** design
- ✅ **Order summary** fetched dynamically from the backend API (`http://localhost:5000/orders`)
- ✅ Responsive layout built with **Tailwind CSS**
- ✅ Clean and modular codebase using **TypeScript**
- ✅ Fully functional integration between frontend and backend
- ✅ Dummy data is served by the server (JSON-based)
- ❌ **Assets (images/videos)** are not included due to GitHub's 50MB file size restriction

---

## 📁 Project Structure

project-root/
│
├── frontend/ # Frontend built with React, Vite, TypeScript, Tailwind
│ ├── src/
│ ├── public/
│ ├── vite.config.ts
│ └── ...
│
├── backend/ # Backend using Express and Node.js
│ ├── index.js





