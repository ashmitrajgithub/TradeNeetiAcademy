import React from "react";
import "./Faculty.css"; // Import the CSS file

function Faculty() {
  const facultyList = [
    {
      imageUrl: "\\public\\assets\\landingImg.jpg", // Replace with your local image paths
      title: "Mastering React Development",
      description: "Learn how to build dynamic user interfaces.",
      name: "John Doe",
    },
    {
      imageUrl: "\\public\\assets\\landingImg2.jpg",
      title: "Introduction to Data Science",
      description: "An overview of data science concepts and tools.",
      name: "Jane Smith",
    },
    {
      imageUrl: "\\public\\assets\\landingImg.jpg",
      title: "UI/UX Design Principles",
      description: "Crafting user-centered designs for web and mobile apps.",
      name: "Michael Lee",
    },
    {
      imageUrl: "\\public\\assets\\landingImg3.jpg",
      title: "UI/UX Design Principles",
      description: "Crafting user-centered designs for web and mobile apps.",
      name: "Michael Lee",
    },
  ];

  return (
    <>
      <h3 className="faculty-title">Our Faculty</h3>
      <section className="faculty-grid">
        {facultyList.map((faculty, index) => (
          <div key={index} className="faculty-card">
            <div className="faculty-card-header">
              <img src={faculty.imageUrl} alt={faculty.title} className="faculty-card-image" />
              <div className="faculty-card-overlay" />
            </div>
            <div className="faculty-card-body">
              <h2 className="faculty-card-title">{faculty.title}</h2>
              <h5 className="faculty-card-subtitle">{faculty.name}</h5>
              <p className="faculty-card-description">{faculty.description}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Faculty;
