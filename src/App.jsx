import './App.css'
import Header from './components/header/Header'
import Landing from './components/Landing'
import WhyUs from './components/whyUs/WhyUs'
// import useScrollAnimation from './UseScrollAnimation'
import Faculty from './components/faculty/Faculty'
import Courses from './components/courses/courses'
import Questions from './components/FAQ/Questions'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import CurrentStatus from './components/CurrentStatus'

function App() {
//  useScrollAnimation();
  return (
    <>
    <div className="app">

      {/* <Header scroll="fade-in"/> */}
      <Header />
      <Landing />
      <WhyUs />
      <Faculty/>
      <Courses/>
      <CurrentStatus/>
      <Questions/>
      <ContactUs/>
      <Footer/>
    </div>
    </>
  )
}

export default App
