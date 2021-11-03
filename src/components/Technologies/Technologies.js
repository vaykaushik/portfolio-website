import React from 'react';
import { DiReact, DiJavascript1, DiSass, DiHtml5, DiCss3 } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked mostly with React and Sass to turn designs into front-end code as well as develop API based applications. My knowledge of API based applications also extend to working with vanilla Javascript too. 
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="5rem" />
        <ListContainer>
          <ListTitle>React JS</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiSass size="5rem" />
        <ListContainer>
          <ListTitle>Sass/Scss</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiHtml5 size="5rem" />
        <ListContainer>
          <ListTitle>HTML 5</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCss3 size="5rem" />
        <ListContainer>
          <ListTitle>CSS 3</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript1 size="5rem" />
        <ListContainer>
          <ListTitle>Javascript</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
