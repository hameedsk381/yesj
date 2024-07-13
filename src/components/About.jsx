import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem, Container, Flex } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';
import classes from './about.module.css';
import Carouselslider from './Carouselslider';
const features = [
  {
    icon: IconReceiptOff,
    title: 'OUR GOAL',
    description: 'To reform our youth to be men and women of Conscience, Compassion, Competence and Commitment and be active agents of change in the society they live in. ',
  },
  {
    icon: IconFileCode,
    title: 'OUR APPROACH',
    description: 'At YES-J, we value RELATIONSHIPS. We, along with our target groups, want to have a vital relationship with God and His creation. ',
  },
  {
    icon: IconCircleDotted,
    title: 'OUR ROOTS',
    description:
      'We are a part of the Society of Jesus, popularly known as Jesuits, which is an international Religious Order of men within the Catholic Church.',
  },
  {
    icon: IconFlame,
    title: 'Flexible',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
];

const items = features.map((feature) => (
  <div key={feature.title}>
    <ThemeIcon
      size={44}
      radius="md"
      variant="gradient"
      gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
    >
      <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
    </ThemeIcon>
    <Text fz="lg" mt="sm" fw={500}>
      {feature.title}
    </Text>
    <Text c="dimmed" fz="sm">
      {feature.description}
    </Text>
  </div>
));

export function About() {
 

  return (
    <Flex className={classes.wrapper} size={'xl'} pl={'8%'} pb={'8%'}>
      <Grid gutter={80} display={'flex'}  >
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Title className={classes.title} order={2}>
          YOUTH EMPOWERING SERVICE - JESUITS 
          </Title>
          <Text c="dimmed" styles={{root:{textAlign:"justify"}}} py={20}>
          In India, the Telugu speaking states of Andhra Pradesh and Telangana consist of almost 85 million people of which a vast majority are young. Most of the youth living in rural, semi-urban and urban slum areas encounter the harsh realities of poverty, lack of education, unemployment, casteism, gender discrimination and social inequality. We exist to bring social, psychological, spiritual and practical help to young people in need, irrespective of their caste, religion and social background. 
          </Text>

         
        </Grid.Col>
       <Grid.Col span={{ base: 12, md: 7 }}>
       <SimpleGrid  cols={{ base: 1, md: 2 }}>
            {items}
          </SimpleGrid>
       </Grid.Col>
      </Grid>
    </Flex>
  );
}
export default About;