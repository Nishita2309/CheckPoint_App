# CheckPoint — Savings Tracker

CheckPoint is a modern savings tracker web app that helps users create financial goals, track progress, monitor savings habits, and stay motivated through a clean and responsive UI.

Built with:

* HTML
* CSS
* Vanilla JavaScript
* Supabase Authentication
* Progressive Web App (PWA) support

---

# ✨ Features

## 🔐 Authentication

* Email & Password Login
* Google Sign-In with OAuth
* Secure session handling using Supabase
* Persistent login support
* Logout functionality

---

## 🎯 Savings Goal Tracking

* Create multiple savings goals
* Set target amounts and deadlines
* Track total saved amount
* View completion progress
* Delete goals when needed

---

## 🎨 Dynamic Theme System

* System Theme (Default)
* Light Mode
* Dark Mode
* User preference saved locally

---

## 📱 Progressive Web App (PWA)

* Installable on mobile and desktop
* Offline support using Service Worker
* Mobile-friendly responsive design
* App-like experience

---

## 👤 Account Features

* Dynamic avatar based on user email
* Account dropdown menu
* Theme controls inside account menu
* Logout support

---

# 🚀 Live Demo

Add your deployed Netlify URL here:

```text
https://your-site.netlify.app
```

---

# 🛠️ Tech Stack

| Technology     | Usage            |
| -------------- | ---------------- |
| HTML5          | Structure        |
| CSS3           | Styling & Themes |
| JavaScript     | App Logic        |
| Supabase       | Authentication   |
| Netlify        | Deployment       |
| Service Worker | Offline Support  |
| Manifest.json  | PWA Setup        |

---

# 📂 Project Structure

```text
CheckPoint_App/
│
├── index.html
├── login.html
├── manifest.json
├── sw.js
├── README.md
│
├── icons/
│   ├── logo.png
│   ├── icon-192.png
│   └── icon-512.png
```

---

# ⚙️ Setup Locally

## 1️⃣ Clone the repository

```bash
git clone https://github.com/Nishita2309/CheckPoint_App.git
```

---

## 2️⃣ Open the project

```bash
cd CheckPoint_App
```

---

## 3️⃣ Run locally

You can use VS Code Live Server or any local server.

Example:

```bash
npx serve
```

---

# 🔑 Supabase Configuration

Create a Supabase project and update:

```js
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_KEY';
```

Enable:

* Email Authentication
* Google OAuth Provider

Update redirect URLs in Supabase Authentication settings.

---

# 📱 PWA Installation

The app supports installation on:

* Android
* Desktop
* Chromium-based browsers

Features:

* Offline caching
* Install banner
* App-style launch

---

# 🌗 Theme Support

CheckPoint supports:

* Light Theme
* Dark Theme
* System Theme

Theme preferences are saved using localStorage.

---

# 🔮 Future Improvements

* Cloud goal storage using Supabase Database
* Notifications & reminders
* Expense analytics
* Goal categories
* APK & Play Store release
* Cross-device sync

---

# 👩‍💻 Developer

Developed by Nishita Pothana

GitHub:

```text
https://github.com/Nishita2309
```

---

# 📄 License

This project is open-source and available under the MIT License.
