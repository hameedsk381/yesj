import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem, Container, Flex } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';
import classes from './about.module.css';
import Carouselslider from './Carouselslider';
import { colors } from '../themes/colors';
import PhotoFrame from './PhotoFrame';

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

export function About({data,slider,imgg,navigationEnabled}) {
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

  return (
    <Flex className={classes.wrapper} size={'lg'} p={'5%'}>
     {data && data.map((item,idx)=>{
      return (
        <Grid gutter={80} key={idx}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Title className={classes.title} order={2} style={{color:colors.titleColor}}>
          {item.title}
          </Title>
          {item.content.map((item, idx) => {
            // // Check if the content item is an array (for the list of subprograms)
            // if (Array.isArray(item)) {
            //   return (
            //     <ul key={idx}>
            //       {item.map((subItem, subIndex) => (
            //         <li key={subIndex}>{subItem}</li>
            //       ))}
            //     </ul>
            //   );
            // }
            if(typeof item === 'object' && item.type === 'html')
            {
                
                    return <div key={idx} dangerouslySetInnerHTML={{ __html: item.htmlContent }} />;
                  
            }
            // Otherwise, it's a string (the paragraph)
            return <p key={idx}>{item}</p>;
          })}
{navigationEnabled &&  <Button
  variant="gradient"
  gradient={{ deg: 133, from: `${colors.titleColor}`, to: 'blue' }}
  size="md"
  radius="md"
  mt="xl"
>
  Get started
</Button>}
          
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          {/* <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid> */}
         {slider &&  <Carouselslider/>}
         {imgg && <PhotoFrame imageUrl={'https://yesj.org/assets/images/yesj_activity.png'}/>}
        </Grid.Col>
      </Grid>
      )
     })}
    </Flex>
  );
}
export default About;