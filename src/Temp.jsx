import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
// import './Landing.css'; // Add your styles if needed

const Temp = () => {
  // Reference for the element where the typing effect will occur
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        '<i>FrontEnd Developer</i>',
        '<i>MERN Developer</i>',
        '<i>Competitive Programmer</i>',
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    // Initialize Typed.js
    const typed = new Typed(typedElement.current, options);

    // Clean up the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="landing">
      <h1>Welcome to My Website</h1>
      <span ref={typedElement} className="typed-text"></span>
    </div>
  );
};

export default Temp;
