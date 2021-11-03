import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there! <br />
        I'm Vay
      </SectionTitle>
      <SectionText>
        Welcome to my portfolio site. Here you can find my latest projects as well as an overview of my skills and the technologies I am familiar with. If you like what you see, feel free to get in touch!
      </SectionText>
      <Button onClick={() => window.location = 'https://uk.linkedin.com/in/vay-kaushik'}>Contact on LinkedIn</Button>
    </LeftSection>
  </Section>
);

export default Hero;