import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Colleges from "./pages/Colleges";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
      <Router>
         <Navbar />
      <div className="page-container">

        <Routes>
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/" element={<Home/>} />
          <Route path="/reviews/:collegeId" element={<Reviews showForm={false} />} />
          <Route path="/reviews" element={<Reviews showForm={false} />} />

          <Route path="/login" element={<Login />} />
      
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      </Router>
    </AuthProvider>
  );
}

export default App;