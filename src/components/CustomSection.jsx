import { Box, Flex, Paper, Text, ThemeIcon, rem } from '@mantine/core';
import { IconColorSwatch } from '@tabler/icons-react';
import classes from './CardGradient.module.css';

export default function CustomSection({title,desc,poster}) {
  return (
    <Paper withBorder radius="md" className={classes.card} >
  <Box>
  <img src={poster} alt="poster" style={{width:'75%'}}/>
      <Text size="xl" fw={500} mt="md" ta={'center'}>
        {title}
      </Text>
      <Text size="sm" mt="sm" c="dimmed">
      {desc}
      </Text>

  </Box>
    </Paper>
  );
}