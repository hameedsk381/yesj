import { Text, Title, TextInput, Button, Image } from '@mantine/core';
import classes from './newsletter.module.css';

export function NewsLetter() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title fw={1000} fz="xl" mb={5}  className={classes.heading}>
        BECOME A VOLUNTEER
        </Title>
        <Text fz="sm" styles={{root:{color:"whitesmoke"}}}>
        Our Voluntary Immersion Programme enables you to challenge yourself, experience another culture and develop an attitude of being grateful.
        </Text>
<Text fw={900} fz={'lg'} my={10} styles={{root:{color:"white"}}}
>Come and immerse yourself to change your world.</Text>
        <div className={classes.controls} id="news">
          <TextInput
            placeholder="Please Enter Your email"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button className={classes.control}>Subscribe</Button>
        </div>
      </div>
      <Image src={'https://yesj.org/assets/images/pl-3.jpg'} alt='image' className={classes.image} />
    </div>
  );
}
export default NewsLetter;