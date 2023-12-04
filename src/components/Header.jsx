
import {
  Container,
  Group,
  Tabs,
  Burger,
  Button,
  Modal,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {

  IconSearch,
} from '@tabler/icons-react';
import classes from './HeaderTabs.module.css';
import ProfileMenu from './ProfileMenu';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Login from '../pages/Login';
import Register from './Register';

const tabs = [
  'Home',
  'Our Mission',
  'About Us',
  'Programmes',
  'Yesj Echos',
  'Media Gallery',
  'Contribute',
  'Contact Us',
];

function Header() {
    const [opened, { open, close }] = useDisclosure(false);
const [login,setLogin] = useState(false);
const [currentView, setCurrentView] = useState('login'); // or 'register'
const showLogin = () => {
    setCurrentView('login');
};

const showRegister = () => {
    setCurrentView('register');
};

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab} component={Link} to={tab.replace(/\s+/g, '').toLowerCase()}>
      {tab}
    </Tabs.Tab>
  ));

  return (
    <>
       <Modal opened={opened} onClose={close} >
    {currentView === 'login' ? <Login onRegisterClick={showRegister} /> : <Register onLoginClick={showLogin} />}
</Modal>

     <header className={classes.header}>
      <Container className={classes.mainSection} size="md">
        <Group justify="space-between">
          <IconSearch/>


         {login ?  <ProfileMenu/> : <Button onClick={open}>Login / Register</Button>}
        </Group>
      </Container>
      <nav>
      <Container size="md">
      <Tabs
          defaultValue="Home"
          variant="outline"
          visibleFrom="sm"
          classNames={{
            root: classes.tabs,
            list: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>{items}</Tabs.List>
        </Tabs>
      </Container>
      </nav>
    </header>
    <Outlet/>
    </>
   
  );
}
export default Header;