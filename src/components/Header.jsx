import React, { useState } from 'react';
import { Container, Group, Tabs, Button, Modal, Avatar, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconArrowRight } from '@tabler/icons-react';
import { Link, Outlet } from 'react-router-dom';
import Login from '../pages/Login';
import Register from './Register';
import CourseRegistrationForm from './CourseRegistrationForm';
import classes from './HeaderTabs.module.css';

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
  const [login, setLogin] = useState(false);
  const [currentView, setCurrentView] = useState('login'); // or 'register'
  const [menuOpened, setMenuOpened] = useState(false); // Hamburger menu state

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

      <header className={classes.header}>
        <nav className="hidden md:flex justify-around py-2">
          <Tabs
            defaultValue="Home"
            variant="default"
            classNames={{
              root: classes.tabs,
              list: classes.tabsList,
              tab: classes.tab,
            }}
          >
            <Tabs.List>{items}</Tabs.List>
          </Tabs>
          {/* {login ? <ProfileMenu /> : <Button onClick={open}>Login / Register</Button>} */}
        </nav>
        <div className="flex md:hidden justify-between w-full pb-1 pr-3">
          <Avatar src="YESJ_Logo_Black.png" alt="Yesj" radius="xl" size="3.5rem" />
          <Burger opened={menuOpened} onClick={() => setMenuOpened((o) => !o)} />
        </div>
        {menuOpened && (
          <nav className="md:hidden bg-white shadow-md absolute top-full left-0 w-full z-50">
            <Tabs
              defaultValue="Home"
              variant="default"
              classNames={{
                root: classes.tabs,
                list: classes.tabsList,
                tab: classes.tab,
              }}
            >
              <Tabs.List onClick={() => setMenuOpened(false)}>{items}</Tabs.List>
            </Tabs>
          </nav>
        )}
      </header>
      
      <div className="hidden md:block">
        <div className={classes.avatarContainer}>
          <Avatar src="YESJ_Logo_Black.png" alt="Yesj" radius="xl" size="5.5rem" />
        </div>
      </div>
      
      <Outlet />
    </>
  );
}

export default Header;
