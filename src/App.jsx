import './App.css';
import Header from './components/header/Header';
import Questions from './components/FAQ/Questions';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import CurrentStatus from './components/CurrentStatus';
import { useState } from 'react';
import Location from './components/location/Location';

function App() {
  const [isLocationPopupOpen, setIsLocationPopupOpen] = useState(false);

  const toggleLocationPopup = () => {
    setIsLocationPopupOpen(!isLocationPopupOpen);
  };

  return (
    <>
      <div className="app">
        <Header toggleLocationPopup={toggleLocationPopup} />
        <CurrentStatus />
        <Questions />
        <ContactUs />
        <Footer />
        {isLocationPopupOpen && <Location closePopup={toggleLocationPopup} />}
      </div>
    </>
  );
}

export default App;
