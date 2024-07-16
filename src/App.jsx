import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './pages/Homepage';
// import OurMission from './pages/OurMission';
import AboutUs from './pages/AboutUs';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import { Container } from '@mantine/core';
import CustomSection from './components/Program';
import OurMission from './components/OurMission';
import Programmes from './components/Programmes';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import CourseRegistrationForm from './components/CourseRegistrationForm';
import EventDetails from './components/EventDetails';
// ... other pages
import 'leaflet/dist/leaflet.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage />} />
      
          <Route path="/ourmission" element={<OurMission />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path='*' element={<ErrorPage/>}/>
          <Route path='/ourmission' element={<OurMission/>}/>
          <Route path='/programmes' element={<Programmes/>}/>
          <Route path='/contactus' element={<Contact/>}/>
          <Route path='/mediagallery' element={<Gallery/>}/>
          <Route path="event/:id" element={<EventDetails />} />
          {/* ... other routes */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
