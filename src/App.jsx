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
import { Modal, Button, Image } from '@mantine/core';
import OurMission from './components/OurMission';
import Programmes from './components/Programmes';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import CourseRegistrationForm from './components/CourseRegistrationForm';
import EventDetails from './components/EventDetails';
import YesjEchos from './components/YesjEchos';
// ... other pages
import 'leaflet/dist/leaflet.css';
import { IconArrowRight } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';
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
       <Modal opened={firstVisit} onClose={() => setFirstVisit(false)} size="xl">
        <div className="text-center">
          <Image  src="yesj_activity.png" alt="Poster" />
          <Button
            rightSection={<IconArrowRight size={14} />}
            onClick={() => {
              setFirstVisit(false);
              openCourseModal();
            }}
            className="mt-4"
          >
            Register for a course
          </Button>
        </div>
      </Modal>

      <Modal fullScreen opened={courseModalOpened} onClose={closeCourseModal}>
        <CourseRegistrationForm />
      </Modal>

      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage />} />
      
          <Route path="/ourmission" element={<OurMission />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path='*' element={<ErrorPage/>}/>
    
          <Route path='/programmes' element={<Programmes/>}/>
          <Route path='/contactus' element={<Contact/>}/>
          <Route path='/mediagallery' element={<Gallery/>}/>
          <Route path="event/:id" element={<EventDetails />} />
          <Route path='/yesjechos' element={<YesjEchos/>}/>
          {/* ... other routes */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
