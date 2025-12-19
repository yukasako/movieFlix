# 🎬 MovieFlix

MovieFlix is a web application that allows users to browse and search for movies and TV shows.  
It is built with **React + TypeScript + Vite** and uses **The Movie Database (TMDB) API** to fetch data.  
The app also includes a favorites feature and supports multiple languages (English / Japanese).

🚀 Live Demo: https://movie-flix-teal.vercel.app/

---

## ✨ Features

- Browse popular movies and TV shows
- Search movies and TV shows
- View detailed information pages
- Add and remove favorites
- Multi-language support (EN / JP)
- Responsive design (mobile to desktop)

---

## 🛠 Tech Stack

- React
- TypeScript
- Vite
- React Router
- react-i18next (i18n)
- localStorage
- Vercel

---

## ⚙️ Setup

1. Clone the repository
   git clone https://github.com/yukasako/movieFlix.git
   cd movieFlix

2. Install dependencies
   npm install

3. Create .env.local
   VITE_API_KEY=your_tmdb_api_key_here
   VITE_BASE_URL=https://api.themoviedb.org/3

4. Start development server
   npm run dev

---

## 🔑 API

This project uses the TMDB API.

You need to obtain an API key from the official TMDB website and set it in .env.local.

https://www.themoviedb.org/

---

## 🌐 Internationalization (i18n)

Supports English and Japanese

Language can be switched from the UI

Translation files are located in src/i18n/\*.json

---

## ❤️ Favorites Feature

Favorites are stored in localStorage

Users can add or remove movies and TV shows

Favorites persist across page reloads

---

## 🚀 Deployment

This project is deployed on Vercel.

Production deployments are triggered from the main branch

Preview deployments are generated for other branches

Environment variables are managed via Vercel project settings

---

## 🔮 Future Improvements

- Hide API key using a server-side proxy (Vercel Functions)

- Add automated tests

- Extend filtering and sorting features
