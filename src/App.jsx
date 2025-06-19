import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Modal, Button, Image } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import OurMission from './components/OurMission';
import Programmes from './components/Programmes';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import CourseRegistrationForm from './components/CourseRegistrationForm';
import EventDetails from './components/EventDetails';
import YesjEchos from './components/YesjEchos';
import Contribute from './components/Contribute';

import 'leaflet/dist/leaflet.css';
import Courses from './pages/Courses';
import EventPage from './pages/Events';

function App() {
  const [firstVisit, setFirstVisit] = useState(false);
  const [courseModalOpened, { open: openCourseModal, close: closeCourseModal }] = useDisclosure(false);

  useEffect(() => {
    const visited = sessionStorage.getItem('visited');
    if (!visited) {
      setFirstVisit(true);
      sessionStorage.setItem('visited', 'true');
    }
  }, []);

  return (
    <Router>
      <div className="App bg-[#f9fafc]">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ourmission" element={<OurMission />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="event/:id" element={<EventDetails />} />
          <Route path="/yesjechoes" element={<YesjEchos />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/courses" element={<Courses />} />
          <Route path='/events'  element={<EventPage/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
