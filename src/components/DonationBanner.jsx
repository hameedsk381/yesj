import { Text, Paper, Button, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import purpose from '../assets/purpose.png'
const DonationBanner = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Paper
      px={'5%'}
      py={isMobile ? '10%' : '5%'}
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column-reverse' : 'row',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)',
        color: 'white',
      }}
    >
      <div style={{ flex: 2, paddingRight: isMobile ? 0 : '2em', textAlign: isMobile ? 'center' : 'left' }}>
        <Text align="center" size="xl" weight={700}>
          HELP US BUILD A COMMUNITY CENTRE FOR OUR YOUTH
        </Text>
        <Text size="md" style={{ margin: '1em 0' }}>
          Searching for available spaces and renting them out to hold our programmes and events is becoming extremely difficult. It also increases our expenditure in addition to the costs incurred in providing food and accommodation to the participants.
        </Text>
        <Text size="md">
          We need your support to build a dedicated community centre at Andhra Loyola Campus, Vijayawada, Andhra Pradesh, India.
        </Text>
        <Text size="md" style={{ margin: '1em 0' }}>
          Your Donation is safe, secure and private.
        </Text>
        <Text size="md">
          We will send you a tax receipt via email.
        </Text>
        <Button
          variant="gradient"
          gradient={{ from: 'blue', to: 'pink' }}
          size="md"
          style={{ margin: '2rem 0' }}
        >
          DONATE NOW
        </Button>
      </div>

      <div style={{flex: 2, marginBlock: isMobile ? '2em' : 0  }}>
        <Image
          src={purpose} // replace with your actual image source
          alt="Community Center Floor Plan"
          fit="cover"
          style={{ borderRadius: '5px' }}
        />
      </div>
    </Paper>
  );
};

export default DonationBanner;
