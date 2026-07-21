# 🚀 Bloggy

> Bloggy empowers users to write, publish, and manage blogs securely with JWT authentication, delivering a fast and intuitive full-stack blogging experience.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-blue)
![Node.js](https://img.shields.io/badge/Node.js-20-green)
![Express](https://img.shields.io/badge/Express.js-Backend-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)

---

## 📖 Overview

**Bloggy** is a full-stack blogging platform built with the **MERN stack** that enables users to create, publish, edit, and manage blog posts through a secure and intuitive interface. Designed with a responsive and user-friendly experience, the platform allows authenticated users to share their ideas while providing readers with a seamless content browsing experience.

The application implements **JWT-based authentication** to ensure secure access to protected features. Registered users can create, update, and delete their own blog posts, while visitors can browse published articles effortlessly. The platform follows a modular client-server architecture with RESTful APIs and MongoDB for efficient data management, making it scalable, maintainable, and easy to extend with additional features such as comments, likes, and categories.

### Key Features

* Secure user authentication with JWT
* User registration and login
* Create, edit, publish, and delete blog posts
* Rich blog editor for content creation
* View all published blogs
* Read individual blog posts
* Personal dashboard to manage authored blogs
* Protected routes for authenticated users
* Responsive and mobile-friendly interface
* RESTful API architecture
* MongoDB database integration
* Form validation and error handling
* Modular and scalable MERN stack architecture
* Environment-based configuration for secure credentials


---

## 📸 Screenshots

### Home Page

<p align = "center">
  <img width="1340" height="483" alt="blogg-home" src="https://github.com/user-attachments/assets/70fc62ad-0f8d-4bec-b3f5-9f2e340476a5" />

</p>


---


## 🛠 Tech Stack

### Frontend

* React.js
* Tailwind CSS
* React Router
* Axios
* Framer Motion

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* bcrypt

### Database

* MongoDB Atlas

### Deployment

* Vercel
* Render

### Development Tools

* VS Code
* Git
* GitHub
* Postman
* Figma

---

## 🏗 Project Structure

```
bloggy/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── README.md

```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/Nishant7749/bloggy.git
```

Move into the project

```bash
cd bloggy
```

Install frontend dependencies

```bash
cd client
npm install
```

Install backend dependencies

```bash
cd ../server
npm install
```

---

## 🗄 Database Schema

Example

```
User
│
├── email
├── password
└── createdAt

Blog
│
├── title
├── description
└── createdAt
```

---

## 🔄 Application Workflow

```text
                    ┌────────────────────┐
                    │       User         │
                    └─────────┬──────────┘
                              │
                              ▼
                     Register / Login
                              │
                              ▼
                   JWT Authentication
                              │
               ┌──────────────┴──────────────┐
               │                             │
               ▼                             ▼
        Browse Published Blogs        Author Dashboard
               │                             │
               ▼                             ▼
         Read Blog Details        Create New Blog Post
                                             │
                                             ▼
                                 Edit / Delete Existing Blog
                                             │
                                             ▼
                                   Publish or Update Blog
                                             │
                                             ▼
                                  Blog Stored in MongoDB
                                             │
                                             ▼
                               Available to All Visitors
```

---


## 👨‍💻 Author

**Nishant Chaudhary**
