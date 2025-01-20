import React from "react";
import "./FacultyItems.css";

function FacultyItems({ imageUrl, title, description, name }) {
  return (
    <div className="faculty-card">
      <div className="faculty-card-header">
        <img src={imageUrl} alt={title} className="faculty-card-image" />
        <div className="faculty-card-overlay" />
      </div>
      <div className="faculty-card-body">
        <h2 className="faculty-card-title">{title}</h2>
        <h5 className="faculty-card-subtitle">{name}</h5>
        <p className="faculty-card-description">{description}</p>
      </div>
    </div>
  );
}

export default FacultyItems;
