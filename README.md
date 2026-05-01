# 📍 Live Location Sharing App

A real-time live location sharing web application built using **Node.js, Express, Socket.IO, and Leaflet.js**.
Users can generate a unique shareable link and allow others to track their live location on a map.

---

## 🚀 Features

* 📡 Real-time location tracking using browser geolocation
* 🔗 Unique shareable room link
* 🗺️ Interactive map powered by Leaflet
* ⚡ Live updates using Socket.IO
* 👥 Multiple users can join the same room
* 📱 Works directly in the browser (no app needed)

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express
* **Real-time Communication:** Socket.IO
* **Maps:** Leaflet.js + OpenStreetMap

---

## 📁 Project Structure

```
location/
│── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│
│── views/
│   └── index.ejs
│
│── app.js
│── package.json
│── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/location-project.git
cd location-project
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Run the server

```
node app.js
```

---

## 🌐 Run the App

Open your browser and go to:

```
http://localhost:3000
```

---

## 📌 How It Works

1. Click **"Share My Live Location"**
2. A unique link will be generated
3. Share that link with others
4. Anyone opening the link can see your **live location updates** on the map

---

## 🔒 Permissions Required

* Location access must be enabled in the browser
* Works best on **HTTPS or localhost**

---

## ⚠️ Notes

* This app uses browser geolocation (`navigator.geolocation`)
* Accuracy depends on device GPS/network
* Not intended for production-level tracking security

---

## 📸 Future Improvements

* 🔐 Add authentication
* 📍 Multiple user markers
* 📊 Location history tracking
* 📱 Mobile UI improvements
* ☁️ Deploy on cloud (Render / Vercel)

---

## 👨‍💻 Author

**Sumit Kumar**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
