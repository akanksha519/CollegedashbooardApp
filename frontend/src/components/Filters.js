import React from "react";
import "../styles.css"; 

const Filters = ({ filters, onChange }) => {
  return (
    <div className="filters">
      <select name="location" value={filters.location} onChange={onChange}>
        <option value="">All Locations</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Chennai">Chennai</option>
      </select>

      <select name="course" value={filters.course} onChange={onChange}>
        <option value="">All Courses</option>
        <option value="CSE">CSE</option>
        <option value="ECE">ECE</option>
        <option value="MBA">MBA</option>
      </select>

      <input
        type="number"
        name="minFee"
        value={filters.minFee}
        onChange={onChange}
        placeholder="Min Fee"
      />

      <input
        type="number"
        name="maxFee"
        value={filters.maxFee}
        onChange={onChange}
        placeholder="Max Fee"
      />

      <input
        type="text"
        name="search"
        value={filters.search}
        onChange={onChange}
        placeholder="Search by College Name"
      />
    </div>
  );
};

export default Filters;
