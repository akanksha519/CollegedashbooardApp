import React from "react";
import "../styles.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* ---------- Hero Section ---------- */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Welcome to <span>College Dashboard</span>
          </h1>
          <p>
            Explore top colleges, compare courses, check reviews, and make
            informed decisions for your future — all in one place.
          </p>
          <a href="/colleges" className="explore-btn">
            Explore Colleges
          </a>
        </div>
        <div className="hero-image">
          <img src="/college-illustration.png" alt="College" />
        </div>
      </section>

      {/* ---------- Features Section ---------- */}
      <section className="features-section">
        <div className="feature-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="Explore"
          />
          <h3>Discover Colleges</h3>
          <p>Find colleges by location, course, and fees with smart filters.</p>
        </div>

        <div className="feature-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2593/2593549.png"
            alt="Reviews"
          />
          <h3>Read Reviews</h3>
          <p>Check what other students say before you make your choice.</p>
        </div>

        <div className="feature-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1534/1534938.png"
            alt="Plan"
          />
          <h3>Plan Your Future</h3>
          <p>Compare courses and fees easily to choose the best path for you.</p>
        </div>
      </section>

      {/* ---------- Testimonials Section ---------- */}
      <section className="testimonials-section">
        <h2>What Students Say</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <p>
              “College Dashboard made my college search so easy. I was able to
              compare fees, reviews, and pick the best option for me!”
            </p>
            <h4>— Aditi Sharma</h4>
            <span>Student, Delhi</span>
          </div>

          <div className="testimonial-card">
            <p>
              “The reviews section helped me understand what life is like at
              each college. Great platform for students!”
            </p>
            <h4>— Rahul Mehta</h4>
            <span>Engineering Aspirant</span>
          </div>

          <div className="testimonial-card">
            <p>
              “Simple, clean, and useful. Found my dream college within minutes!
              Highly recommend it to everyone.”
            </p>
            <h4>— Priya Nair</h4>
            <span>MBA Student</span>
          </div>
        </div>
      </section>

      {/* ---------- Footer Section ---------- */}
      <footer className="footer-section">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} College Dashboard. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/colleges">Colleges</a>
            <a href="/reviews">Reviews</a>
            <a href="/login">Login</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
