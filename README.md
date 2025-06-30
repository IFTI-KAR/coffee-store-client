## ☕ Coffee Store

**Live Site:** [https://admirable-queijadas-41b617.netlify.app](https://admirable-queijadas-41b617.netlify.app)
**Server Repo:** [https://github.com/IFTI-KAR/coffee-store-server](https://github.com/IFTI-KAR/coffee-store-server)
**Client Repo:** *Add your frontend repo link here*

---

### 🛠️ Features

* Firebase Authentication (Sign Up / Sign In)
* CRUD Operations with MongoDB:

  * Add / Update / Delete Coffee
  * User registration and activity tracking
* Responsive UI built with React
* Backend powered by Express and MongoDB Atlas
* Environment-based secure credentials loading

---

### 🤩 Project Structure

```
├── dist/
├── public/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   ├── contexts/
│   ├── firebase/
│   ├── layouts/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env
├── .firebaserc
├── .gitignore
├── firebase.json
├── vite.svg
└── ...
```

---

### 🔐 Environment Variables

Create a `.env` file in the root of your server project:

```env
DB_USER=yourMongoUser
DB_pass=yourMongoPassword
port=3000
```

---

### 🚀 Backend Setup (Express + MongoDB)

Install dependencies:

```bash
npm install
```

Run the server:

```bash
node index.js
```

> The server will run on `http://localhost:3000/` or the port defined in `.env`

---

### 📡 Backend API Endpoints

#### Coffee APIs

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| GET    | `/coffees`     | Get all coffees   |
| GET    | `/coffees/:id` | Get single coffee |
| POST   | `/coffees`     | Add new coffee    |
| PUT    | `/coffee/:id`  | Update coffee     |
| DELETE | `/coffees/:id` | Delete coffee     |

#### User APIs

| Method | Endpoint     | Description                     |
| ------ | ------------ | ------------------------------- |
| GET    | `/users`     | Get all users                   |
| POST   | `/users`     | Add a user                      |
| PATCH  | `/users`     | Update user's last sign-in time |
| DELETE | `/users/:id` | Delete a user                   |

---

### 🔧 Frontend Setup (React + Vite)

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

---

### ⚙️ Firebase Setup

1. Create a Firebase project
2. Enable **Email/Password Authentication**
3. Add your Firebase config to `/src/firebase/firebase.js`

```js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "your-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id"
};

const app = initializeApp(firebaseConfig);
export default app;
```

---



### ✍️ Author

**Iftikar Rahaman**

