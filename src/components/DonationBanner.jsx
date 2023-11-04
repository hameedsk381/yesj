import { Text, Paper, Button, Image } from '@mantine/core';

const DonationBanner = () => {
  return (
    <Paper px={'15%'} py={"5%"} style={{ display: 'flex', flexDirection: 'row', }}>
      <div style={{ flex: 2, paddingRight: '2em' }}>
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
        <Button variant="outline" size="lg" style={{ margin: '1em 0' }}>
          DONATE NOW
        </Button>
      </div>

      <div style={{ flex: 1 }}>
        <Image
          src="https://yesj.org/assets/images/pl-3.jpg" // replace with your actual image source
          alt="Community Center Floor Plan"
          fit="contain"
        />
      </div>
    </Paper>
  );
};

export default DonationBanner;
