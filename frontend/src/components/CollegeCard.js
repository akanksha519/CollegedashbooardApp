import React from "react";
import "./styles.css"; 

const CollegeCard = ({ college }) => {
  return (
    <div className="college-card">
      <h3>{college.name}</h3>
      <p><strong>Location:</strong> {college.location}</p>
      <p><strong>Course:</strong> {college.course}</p>
      <p><strong>Fee:</strong> ₹{college.fee}</p>
      <p>
        Rating: {college.avgRating.toFixed(1)} / 5 ({college.reviewCount}{" "}
        reviews)
      </p>
      <button onClick={() => navigate(`/colleges/${college._id}/reviews`)}>
        View Reviews
      </button>

    </div>
  );
};

export default CollegeCard;