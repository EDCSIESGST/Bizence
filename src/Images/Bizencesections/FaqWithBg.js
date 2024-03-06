import { Title, Container, Accordion, ThemeIcon, rem } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import classes from './FaqWithBg.module.css';

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

export function FaqWithBg() {
  return (
    <div className={classes.wrapper}>
      <Container size="sm">
        <Title ta="center" className={classes.title} id='fae'>
          Frequently Asked Questions
        </Title>

        <Accordion
          chevronPosition="right"
          defaultValue="reset-password"
          chevronSize={26}
          variant="separated"
          disableChevronRotation
          styles={{ label: { color:'white' }, item: { border: 0 } }}
          chevron={
            <ThemeIcon radius="xl" className={classes.gradient} size={26}>
              <IconPlus style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ThemeIcon>
          }
        >
          <Accordion.Item className={classes.item} value="reset-password">
            <Accordion.Control>Who can be eligible to participate in this event? </Accordion.Control>
            <Accordion.Panel style={{color:'white'}} >Any person is eligible to participate, as long as they are interested in the world of business and entrepreneurship.</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="another-account">
            <Accordion.Control>What necessities should I bring? </Accordion.Control>
            <Accordion.Panel style={{color:'white'}}>Bring your own laptops, your Aadhar Card and college ID card. If your product does not utilise software or tech, bring a prototype working model of your product.</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="newsletter">
            <Accordion.Control>What should be the size of a team?</Accordion.Control>
            <Accordion.Panel style={{color:'white'}}>Each team can consist of 3-4 people</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="credit-card">
            <Accordion.Control>What is the entry fee?</Accordion.Control>
            <Accordion.Panel style={{color:'white'}}>Entry fees will be 150/- per person</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="payment">
            <Accordion.Control>Where will the hackathon take place?</Accordion.Control>
            <Accordion.Panel style={{color:'white'}}>The hackathon will take place inside the college premises. The ideation process will be conducted in the labs of our college.</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="paymt">
            <Accordion.Control>Will we be provided with meals? </Accordion.Control>
            <Accordion.Panel style={{color:'white'}}>Yes, all participants will be provided with 3 full meals and snacks during the event.</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="pay">
            <Accordion.Control>I have no knowledge or experience when it comes to entrepreneurship, what do I do?</Accordion.Control>
            <Accordion.Panel style={{color:'white'}}> No problem, if you are not well versed in the world of entrepreneurship, we are conducting a BMC workshop to help you with your ideas and the mentors will provide guidance for the same.</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}