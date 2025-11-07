# College Dashboard

A **Full-Stack College Dashboard** application that allows users to search, filter, and review colleges. Built with React.js for the frontend, Node.js + Express.js for the backend, and MongoDB/SQLite for data storage. The app features user authentication and a responsive UI.

---

## Features

- **College Search & Filters**
  - Search by college name
  - Filter by location, course, and fee range
  - Fee range slider for interactive filtering
- **User Authentication**
  - Register and login using email and password
  - JWT-based secure authentication
- **Reviews System**
  - Add reviews (rating + comment) for each college
  - View all reviews for a specific college
  - Read-only reviews page for all colleges
- **Responsive Design**
  - Works on mobile, tablet, and desktop
  - Clean, user-friendly UI
  - 
Deployed fully on Render for both frontend and backend.
---

## Tech Stack

- **Frontend:** React.js, HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB 
- **Authentication:** JWT  
- **HTTP Client:** Axios / Fetch API  



## Getting Started

### Prerequisites

- Node.js installed  
- MongoDB Atlas  

### Backend Setup

1. Navigate to the backend folder:
cd backend

2. Install dependencies:
npm install

3. Create a .env file:
MONGO_URI=mongodb+srv://collegeUser:%40Akshu519@cluster0.deauewz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


JWT_SECRET=yourSuperSecretKey123

PORT=5000
JWT_SECRET=yourSuperSecretKey123

4. Start the backend server:
npm run dev

### Frontend Setup

1. Navigate to the frontend folder:
cd frontend

2. Install dependencies:
npm install

3. Start the frontend:
npm start


### Project Structure

collegedashboardapp/
├─ backend/
│  ├─ models/
│  │  ├─ College.js
│  │  └─ User.js
│  ├─ routes/
│  │  ├─ authRoutes.js
│  │  ├─ collegeRoutes.js
│  │  └─ reviewRoutes.js
│  ├─ server.js
│  └─ ...
├─ frontend/
│  ├─ src/
│  │  ├─ pages/
│  │  │  ├─ Colleges.js
│  │  │  ├─ Reviews.js
│  │  │  ├─ Login.js
│  │  │  └─ Register.js
│  │  ├─ components/
│  │  └─ ...
│  └─ ...
└─ README.md

### Live Demo
https://collegedashbooardapp-1.onrender.com/

Author
Akanksha Are
