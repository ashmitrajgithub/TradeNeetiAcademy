import './App.css';
import Header from './components/header/Header';
import Landing from './components/Landing';
import WhyUs from './components/whyUs/WhyUs';
// import useScrollAnimation from './UseScrollAnimation';
import Faculty from './components/faculty/Faculty';
import Courses from './components/courses/courses';
import Questions from './components/FAQ/Questions';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import CurrentStatus from './components/CurrentStatus';
import { useState } from 'react';
import Location from './components/Location/Location';



function App() {
  // State to manage the Location popup visibility
  const [isLocationPopupOpen, setIsLocationPopupOpen] = useState(false);

  // Function to toggle the Location popup
  const toggleLocationPopup = () => {
    setIsLocationPopupOpen(!isLocationPopupOpen);
  };

  return (
    <>
      <div className="app">
        <Header toggleLocationPopup={toggleLocationPopup} />
        <Landing />
        <WhyUs />
        <Faculty />
        <Courses />
        <CurrentStatus />
        <Questions />
        <ContactUs />
        <Footer />
        {/* Conditionally render the Location popup */}
        {isLocationPopupOpen && <Location closePopup={toggleLocationPopup} />}
      </div>
    </>
  );
}

export default App;
