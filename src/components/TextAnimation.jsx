import React, { useState, useEffect } from "react";
import "./HedgingAnimation.css";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [iteration, setIteration] = useState(0);
  const [resetAnimation, setResetAnimation] = useState(false);

  // Professions with their respective GIFs and durations in milliseconds
  const professions = [
    { text: "EXPIRY DAY STRATEGIES", gif: "/TradeNeetiAcademy/assets/animation/expirydaystrategies1.gif", duration: 6000 },
    { text: "Option Buying & Selling", gif: "/TradeNeetiAcademy/assets/animation/optionbuyingselling1.gif", duration: 6000 },
    { text: "Hedging & Risk Management", gif: "/TradeNeetiAcademy/assets/animation/hedgingandriskmanagement1.gif", duration: 6000 },
    { text: "LEARN BULL BEAR TRAP", gif: "/TradeNeetiAcademy/assets/animation/learnbullbeartrap1.gif", duration: 6000 },
  ];

  const resetComponent = () => {
    setCurrentIndex(0);
    setIteration((prev) => prev + 1);
    setResetAnimation(true);
    setTimeout(() => setResetAnimation(false), 100); // Forces CSS reflow
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        console.log("User returned, resetting animation...");
        resetComponent();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        console.log("User scrolled to top, resetting animation...");
        resetComponent();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const totalCycleDuration = professions.reduce((sum, item) => sum + item.duration, 0);

    const cycleInterval = setInterval(() => {
      setIteration((prev) => prev + 1);
      setCurrentIndex(0);
    }, totalCycleDuration);

    return () => clearInterval(cycleInterval);
  }, [professions, iteration]);

  useEffect(() => {
    const currentDuration = professions[currentIndex].duration;

    const gifTimeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, currentDuration);

    return () => clearTimeout(gifTimeout);
  }, [currentIndex, iteration, professions]);

  return (
    <div className="home-container">
      <section className="home" id="home">
        <div className="home-content">
          <img
            src={professions[currentIndex].gif}
            alt="Home-animation"
            className="profession-gif"
          />
        </div>

        <div className="profession-container">
          <div
            className="profession-box"
            style={{
              animation: resetAnimation ? "none" : `professionRotate ${professions.reduce(
                (sum, item) => sum + item.duration,
                0
              )}ms linear infinite`,
            }}
          >
            {professions.map((profession, index) => (
              <div
                key={index}
                className={`profession ${index === currentIndex ? "active" : ""}`}
                style={{ "--i": index }}
              >
                <h3>{profession.text}</h3>
              </div>
            ))}
            <div className="circle"></div>
          </div>

          <div className="overlay">
            <img src="/TradeNeetiAcademy/assets/main.jpg" alt="Overlay Shape" className="overlay-image" />
            <div className="image-style">
            <img src="/TradeNeetiAcademy/assets/main.jpg" alt="Overlay Shape" className="overlay-image2" />
            <img src="/TradeNeetiAcademy/assets/main.jpg" alt="Overlay Shape" className="overlay-image2" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
