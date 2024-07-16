import {
  Container,
  Group,
  Tabs,
  Button,
  Modal,
  Avatar,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconArrowRight } from '@tabler/icons-react';
import classes from './HeaderTabs.module.css';
import ProfileMenu from './ProfileMenu';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Login from '../pages/Login';
import Register from './Register';
import CourseRegistrationForm from './CourseRegistrationForm'; // Import the course registration form

const tabs = [
  'Home',
  'Our Mission',
  'About Us',
  'Programmes',
  'Yesj Echos',
  'Media Gallery',
  'Contribute',
 
];

function Header() {
  const [opened, { open, close }] = useDisclosure(false);
  const [courseModalOpened, { open: openCourseModal, close: closeCourseModal }] = useDisclosure(false);
  const [login, setLogin] = useState(false);
  const [currentView, setCurrentView] = useState('login'); // or 'register'

  const showLogin = () => {
    setCurrentView('login');
  };

  const showRegister = () => {
    setCurrentView('register');
  };

  const items = tabs.map((tab) => {
    const to = tab === 'Home' ? '/' : `/${tab.replace(/\s+/g, '').toLowerCase()}`;
    return (
      <Tabs.Tab value={tab} key={tab} component={Link} to={to}>
        {tab}
      </Tabs.Tab>
    );
  });

  return (
    <>
      <Modal opened={opened} onClose={close}>
        {currentView === 'login' ? <Login onRegisterClick={showRegister} /> : <Register onLoginClick={showLogin} />}
      </Modal>

      <Modal fullScreen opened={courseModalOpened} onClose={closeCourseModal}>
        <CourseRegistrationForm />
      </Modal>

      <header className={classes.header}>
        <Container className={classes.mainSection} size="xl">
          <Group justify="space-between">
            {/* {login ? <ProfileMenu /> : <Button onClick={open}>Login / Register</Button>} */}
            <nav>
              <Container size="md" >
                <Tabs
                  defaultValue="Home"
                  variant="default"
                  visibleFrom="sm"
                  classNames={{
                    root: classes.tabs,
                    list: classes.tabsList,
                    tab: classes.tab,
                  }}
                >
                  <Tabs.List>{items}
                 
                  </Tabs.List>
                </Tabs>
              </Container>
            </nav>
            <Button rightSection={<IconArrowRight size={14} />} onClick={openCourseModal}>Register for a course</Button>
          </Group>
        </Container>
      </header>
      
      <div className={classes.avatarContainer}>
        <Avatar src="YESJ_Logo_Black.png" alt="Yesj" radius="xl" size="5.5rem" />
      </div>
      
      <Outlet />
    </>
  );
}

export default Header;
