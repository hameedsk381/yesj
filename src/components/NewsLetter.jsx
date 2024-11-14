import { Text, Title, TextInput, Button, Image } from '@mantine/core';
import classes from './newsletter.module.css';
import VolunteerSignup from './VolunteerSignup';
import volunteer from '../assets/volunteer.png'
export function NewsLetter() {
  return (
    <div className={classes.wrapper} style={{background: 'linear-gradient(135deg, #FF6347 30%, #FFD6A5 100%)'}}>
      
      <div className={classes.body}>
        <Title fw={1400} fz="xl" mb={5}  className='text-white'>
        BECOME A VOLUNTEER
        </Title>
        <Text fz="md" styles={{root:{color:"whitesmoke"}}}>
        Our Voluntary Immersion Programme enables you to challenge yourself, experience another culture and develop an attitude of being grateful.
        </Text>
<Text fw={900} fz={'lg'} my={16} mb={20} styles={{root:{color:"white"}}}
>Come and immerse yourself to change your world.</Text>
       <VolunteerSignup/>
      </div>
      <img src={volunteer} alt='image' className={classes.image} />
    </div>
  );
}
export default NewsLetter;