import { Box, Flex, Paper, Text, ThemeIcon, rem } from '@mantine/core';
import { IconColorSwatch } from '@tabler/icons-react';
import classes from './CardGradient.module.css';

export default function CustomSection({title,desc,poster}) {
  return (
    <Paper withBorder  radius="md" className={classes.card} >
  <Box>
  <img src={poster} alt="poster" style={{width:'75%'}}/>
      <Text size="lg" fw={500} mt="md" ta={'center'}>
      {desc}
      </Text>
     

  </Box>
    </Paper>
  );
}