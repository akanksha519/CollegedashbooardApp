import React, { useEffect, useState } from "react";
import Reviews from "../pages/Reviews";
import { Link } from "react-router-dom";
import API from "../api"; 

const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [course, setCourse] = useState("");
  const [minFee, setMinFee] = useState("");
  const [maxFee, setMaxFee] = useState("");

  
useEffect(() => {
  const fetchColleges = async () => {
    try {
      const params = new URLSearchParams();
      if (location) params.append("location", location);
      if (course) params.append("course", course);
      if (minFee) params.append("minFee", minFee);
      if (maxFee) params.append("maxFee", maxFee);
      if (search) params.append("search", search);

      // ✅ Using Axios instance (no need for full URL)
      const res = await API.get(`/api/colleges?${params.toString()}`);
      setColleges(res.data);
    } catch (err) {
      console.error(err);
      alert("Error fetching colleges. Please try again later.");
    }
  };

  fetchColleges();
  }, [search, location, course, minFee, maxFee]);

  return (
    <div>
      <h2>College Dashboard</h2>

      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search by college name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">All Locations</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
        </select>
        <select value={course} onChange={(e) => setCourse(e.target.value)}>
          <option value="">All Courses</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="MBA">MBA</option>
        </select>
        <input
          type="number"
          placeholder="Min Fee"
          value={minFee}
          onChange={(e) => setMinFee(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Fee"
          value={maxFee}
          onChange={(e) => setMaxFee(e.target.value)}
        />
      </div>

      {/* College Cards */}
      <div className="college-list">
        {colleges.length > 0 ? (
          colleges.map((college) => (
            <div key={college._id} className="college-card">
              <h3>{college.name}</h3>
              <p>Location: {college.location}</p>
              <p>Course: {college.course}</p>
              <p>Fee: ₹{college.fee}</p>

              {/* Reviews form under college card */}
              <Reviews collegeId={college._id} showForm={true} />
              <Link to={`/reviews/${college._id}`}>View All Reviews</Link>

            </div>
          ))
        ) : (
          <p>No colleges found</p>
        )}
      </div>
    </div>
  );
};

export default Colleges;