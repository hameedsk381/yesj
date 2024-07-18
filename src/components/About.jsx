import React from 'react';
import { Title, SimpleGrid, Text, Container, Card, Avatar, rem, ThemeIcon } from '@mantine/core';
import classes from './about.module.css';
import ourapproach from '../assets/our-approach-icon.png';
import ourgoal from '../assets/our-goals-icon.png';
import ourroots from '../assets/h3.png';
import flexible from '../assets/cont-1.png';

import managementTeam from '../assets/team'; // Assume you have team images in this folder

const management = [
  {
    name: 'John Doe',
    title: 'CEO',
    image: managementTeam.johndoe, // Assume you have a johndoe.png image in the assets folder
  },
  {
    name: 'Jane Smith',
    title: 'CTO',
    image: managementTeam.janesmith, // Assume you have a janesmith.png image in the assets folder
  },
  // Add more team members here...
];


const features = [
  {
    image: ourgoal, // Replace with actual image URL
    title: 'OUR GOAL',
    description: 'To reform our youth to be men and women of Conscience, Compassion, Competence and Commitment and be active agents of change in the society they live in. ',
  },
  {
    image: ourapproach, // Replace with actual image URL
    title: 'OUR APPROACH',
    description: 'At YES-J, we value RELATIONSHIPS. We, along with our target groups, want to have a vital relationship with God and His creation. ',
  },
  {
    image: ourroots, // Replace with actual image URL
    title: 'OUR ROOTS',
    description:
      'We are a part of the Society of Jesus, popularly known as Jesuits, which is an international Religious Order of men within the Catholic Church.',
  },
  {
    image: flexible, // Replace with actual image URL
    title: 'Flexible',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
];

const items = features.map((feature) => (
  <div key={feature.title}>
    <ThemeIcon
      size={44}
      radius="xl"
      variant="gradient"
      gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      style={{ backgroundColor: 'transparent' }}
    >
      <img src={feature.image} alt={feature.title} style={{ width: rem(44), height: rem(44) }} />
    </ThemeIcon>
    <Text fz="lg" mt="sm" fw={500}>
      {feature.title}
    </Text>
    <Text c="dimmed" fz="sm">
      {feature.description}
    </Text>
  </div>
));



const ManagementTeamItem = ({ name, title, image }) => (
  <Card  padding="lg" radius="md" shadow='lg' >
     <Avatar src={image} alt={name} size={120} style={{margin:'auto'}} />
    <Text fz="lg" mt="sm" fw={500} ta="center">
      {name}
    </Text>
    <Text c="dimmed" fz="sm" ta="center">
      {title}
    </Text>
  </Card>
);

const About = () => (
  <div className='my-[5%] ' >
   <div className='px-[10%]'>
   <Title className={classes.title} ta="center" order={2}>
      YOUTH EMPOWERING SERVICE - JESUITS
    </Title>
    <Text style={{ textAlign: 'justify', color: 'black' }} py={20}>
      In India, the Telugu speaking states of Andhra Pradesh and Telangana consist of almost 85 million people of which a vast majority are young. Most of the youth living in rural, semi-urban and urban slum areas encounter the harsh realities of poverty, lack of education, unemployment, casteism, gender discrimination and social inequality. We exist to bring social, psychological, spiritual and practical help to young people in need, irrespective of their caste, religion and social background.
    </Text>
    <Text style={{ textAlign: 'justify', color: 'black' }} py={20}>
      Youth Empowering Service – Jesuits (YES-J) is one of the ministries of the Andhra Jesuit Province of the Society of Jesuits that serves the needy, young people from Telangana and Andhra Pradesh in India. Young people in our society can not only be the object of formation but could themselves become active agents of change if their energies, aptitudes, and talents are better channeled. We firmly believe that all young people, irrespective of their educational, social, religious, and economic backgrounds, are capable of fulfilling their potential for a better and meaningful life. Unfortunately, due to the unjust social structure in Indian society, lack of opportunities, resources, guidance, and support, many young people are pushed to margins and impoverished life situations.
      <br />
      <br />
    </Text>
    <SimpleGrid cols={{ base: 1, md: 2 }} mt={60}>
        {items}
      </SimpleGrid>
   </div>
  

   
     
    <div className='bg-gradient-to-r from-blue-400 to-teal-400 p-10 mt-10'>
    <Title style={{color:'white'}} ta="center" order={2} >
      OUR MANAGEMENT TEAM
    </Title>
    <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="lg" mt={40}  >
      {management.map((member) => (
        <ManagementTeamItem key={member.name} {...member} />
      ))}
    </SimpleGrid>
    </div>
  </div>
);

export default About;
