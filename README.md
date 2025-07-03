<h1 align="center">🎯 Live Poller 🎯</h1>

<p align="center">
  <b>Create 🔨, Share 🌐 & Vote 🗳️ in Real-time</b><br/>
  Live, collaborative polling platform built with ❤️ using MERN + WebSockets
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Deployed-green?style=flat-square" />
  <img src="https://img.shields.io/badge/Frontend-Netlify-blue?style=flat-square&logo=netlify" />
  <img src="https://img.shields.io/badge/Backend-Render-purple?style=flat-square&logo=render" />
</p>

---

## 🚀 Live Demo

🌐 **Frontend:** [https://live-poller.netlify.app](https://live-poller.netlify.app)  
⚙️ **Backend API:** [https://live-poller-backend.onrender.com/api](https://live-poller-backend.onrender.com/api)

---

## 🧰 Tech Stack

| Category        | Technologies Used |
|----------------|--------------------|
| **Frontend**    | React.js, Next.js, TypeScript, MUI (Material-UI) |
| **Backend**     | Node.js, Express.js, MongoDB, Mongoose |
| **Real-Time**   | Socket.IO |
| **State Mgmt**  | Redux Toolkit |
| **Deployment**  | Netlify (Frontend), Render (Backend) |
| **Design**      | Material UI + Responsive Styling |
| **Security**    | Role-based logic (Host vs User), localStorage checks |

---

## 🎯 Features

✅ **Create New Polls**  
✅ **Vote in Existing Polls**  
✅ **Real-Time Updates** with Socket.IO  
✅ **Host Controls** – Share Poll ID, Control Voting  
✅ **User Vote Restriction** – 1 vote per user per poll  
✅ **Visual Results** – Pie chart shown after voting  
✅ **Persistent Voting Memory** using localStorage  
✅ **Global Error Handling** – Including backend down scenarios  
✅ **Responsive Design** – Optimized for all screens  
✅ **Cool Animations & Snackbar Alerts**  

---

## 🔍 How It Works

1. **User Enters App**  
   - Picks to either create a new poll or vote in an existing one.

2. **Creating a Poll (Host Role)**  
   - Define a question and multiple options.
   - Receive a unique **Poll ID** to share with others.

3. **Voting**  
   - Voters enter the poll using the Poll ID.
   - Choose one option — only once per user!
   - As soon as you vote, **Pie Chart** results appear live.

4. **Real-Time Sync**  
   - All users connected to the same poll see updates instantly via **WebSockets**.

5. **No Vote Duplication**  
   - Based on `pollId` + `userName` key stored in `localStorage`.

---

## 🖼️ Screenshots

> _[![image](https://github.com/user-attachments/assets/20b398df-6214-4783-99db-17e75d2661b8)
![image](https://github.com/user-attachments/assets/0f166e4f-2b67-42c0-9b2b-2cc772e1616e)
]_

---

## 🧠 Future Ideas

- 🔐 Auth0 / Google Login  
- 📤 Export Results (CSV / Image)  
- 💌 Share via Email/WhatsApp  
- 📊 Results Dashboard for Admin  
- 🌍 Multi-language Support

---

## ✨ Author

Made with 💻 and ☕ by [**@Rakezt**](https://github.com/Rakezt)

---

> ⭐ If you like this project, don’t forget to **star the repo** and share it with your friends!
