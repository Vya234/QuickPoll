# QuickPoll

**QuickPoll** is a full-stack polling platform that enables users to create, share, and participate in polls with real-time results and a modern, responsive UI.

---

## ✨ Features

- **User accounts** — Sign up, log in, and JWT-protected routes for your polls  
- **Create polls** — Multiple or single choice, optional multiple selections and named voters  
- **Vote & results** — Cast votes, live updates via WebSockets, and percentage breakdowns with progress bars  
- **My Polls** — List, edit, and delete polls you own  
- **Public Polls** — Browse all polls, search by question, and sort by recency or vote count  
- **Responsive UI** — Tailwind CSS layout that works across phone, tablet, and desktop  

---

## 🛠 Tech Stack

| Layer | Technologies |
|--------|----------------|
| **Frontend** | React 18 (Create React App), React Router, Tailwind CSS, Axios |
| **Backend** | Node.js, Express, Socket.IO |
| **Database** | MongoDB (Mongoose ODM) |

---

## 📸 Screenshots

### Home

![Home page](./screenshots/home.png)

### Public Polls

![Public Polls page](./screenshots/public-polls.png)

<details>
<summary><strong>More screenshots</strong></summary>

### Create Poll

![Create Poll page](./screenshots/create.png)

### Results

![Poll results](./screenshots/results.png)

</details>

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)  
- [MongoDB](https://www.mongodb.com/) (local or Atlas connection string)  
- npm (comes with Node)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Vya234/QuickPoll.git
   cd QuickPoll
   ```

2. **Install dependencies** (Create React App frontend at the repo root **and** the Express API under `backend/`)

   ```bash
   npm install
   cd backend && npm install && cd ..
   ```

3. **Create `backend/.env`** with your MongoDB URI, JWT signing secret, and port (see [Environment Variables](#environment-variables)):

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_secret_key
   PORT=5000
   ```

   You can copy `backend/.env.example` and fill in real values.

4. **Create root `.env`** so the CRA app points at the local API:

   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

   Copy root `.env.example` if you prefer; replace the URL with your deployed API when building for production.

5. **Run the backend** (from the repository root):

   ```bash
   cd backend && npm run dev
   ```

   The server listens on **port 5000** unless `PORT` in `backend/.env` overrides it.

6. **Run the frontend** (in a second terminal, from the repository root):

   ```bash
   npm start
   ```

7. Open [http://localhost:3000](http://localhost:3000). The Axios client uses `REACT_APP_API_URL` as the API base URL (see [Environment Variables](#environment-variables)).

---

## 🔐 Environment Variables

### Backend (`backend/.env`)

| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB connection string (required) |
| `JWT_SECRET` | Secret used to sign and verify JWTs (required) |
| `PORT` | HTTP port for Express and Socket.IO (default: `5000` if unset) |

### Frontend (root `.env`)

Create React App only exposes variables prefixed with `REACT_APP_`.

| Variable | Description |
|----------|-------------|
| `REACT_APP_API_URL` | Base URL of the backend API (e.g. `http://localhost:5000` locally, or your Render service URL in production). The app falls back to `http://localhost:5000` in code if unset. |

> **Security:** Do not commit real `.env` files. They are listed in `.gitignore`. Commit `backend/.env.example` and root `.env.example` for variable names only.

---

## ☁️ Deployment

### Render (backend)

Configure a **Web Service** with the API code:

| Setting | Value |
|--------|--------|
| **Root Directory** | `backend` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Environment variables** | `MONGO_URI`, `JWT_SECRET`, `PORT` (Render usually sets `PORT` automatically; align with your start script) |

Set `MONGO_URI` and `JWT_SECRET` in the Render dashboard to match your Atlas (or other) MongoDB deployment.

### Vercel (frontend — Create React App)

| Setting | Value |
|--------|--------|
| **Root Directory** | `.` (repository root) |
| **Build Command** | `npm run build` |
| **Output Directory** | `build` |
| **Environment variable** | `REACT_APP_API_URL` — set to your **Render** backend URL (e.g. `https://your-service.onrender.com`, no trailing slash unless your API requires it) |

After you have the **Vercel** production URL, add it to the `CORS_ORIGINS` array in `backend/src/config/constants.js` (used by both Express `cors` and Socket.IO), redeploy the backend, and ensure `credentials: true` stays compatible with your cookie/JWT header usage from that origin.

---

## 📁 Folder Structure

```
QuickPoll/
├── public/                 # Static assets (CRA)
├── screenshots/            # README screenshots (add your images here)
├── src/
│   ├── api/                # Axios client
│   ├── components/         # Reusable UI (Button, Navbar, PollCard, PollForm)
│   ├── lib/                # Utilities (e.g. class name helper)
│   ├── pages/              # Route-level views
│   ├── App.jsx
│   └── index.js
├── backend/
│   ├── server.js           # Entry: loads src/server
│   └── src/
│       ├── app.js          # Express app + middleware
│       ├── server.js       # HTTP server, Socket.IO, DB connect
│       ├── config/         # DB, CORS constants
│       ├── controllers/
│       ├── middleware/
│       ├── models/         # Mongoose schemas
│       ├── routes/
│       ├── services/
│       ├── sockets/
│       └── utils/
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🗺️ Roadmap

- **Tests** — Broader API and E2E coverage (e.g. Playwright)  
- **Roles & moderation** — Admin tools and report flows for public polls  
- **Rate limiting & validation** — Stricter API limits and shared schema validation (e.g. Zod)  
- **Deployment** — Docker Compose, CI/CD, and environment-specific configs  
- **Accessibility** — Deeper WCAG audit and keyboard-only flows  

---

## 👤 Author

Kavya Rai  
IIT Kharagpur
