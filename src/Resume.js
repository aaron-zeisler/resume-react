import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaFilePdf } from 'react-icons/fa6';
import data from './resume-data.js';
import Job from './Job';
import {
  Bullet,
  Container,
  Description,
  Header,
  Icons,
  Left,
  Name,
  PointText,
  Right,
  Section,
  SectionTitle,
  Summary,
  textShadowOnDark,
} from './ui';
import Responsive from 'react-responsive';

const Screen = props => <Responsive {...props} screen={true} />;
const Print = props => <Responsive {...props} print={true} />;
const Desktop = props => <Responsive {...props} minWidth={900} />;
const Mobile = props => <Responsive {...props} maxWidth={899} />;

const IconLink = ({ href, icon: Icon }) => (
  <a href={href}><Icon /></a>
);

const Head = () => (
  <Header>
    <Desktop>
      <Name>{data.name}</Name>
    </Desktop>
    <Mobile>
      <Name>{data.name}</Name>
    </Mobile>
    <Screen>
      <Icons>
        <IconLink href={data.contact.github.url} icon={data.contact.github.icon} />
        <IconLink href={data.contact.linkedin.url} icon={data.contact.linkedin.icon} />
      </Icons>
    </Screen>
  </Header>
);

const ContactSection = () => {
  const LinkedinIcon = data.contact.linkedin.icon;
  return (
    <Section>
      <SectionTitle>Contact</SectionTitle>
      <Description tight>
        <Bullet icon={FaEnvelope}>
          <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
        </Bullet>
        <Screen>
          <Bullet icon={FaFilePdf}>
            <a href={data.contact.pdf.url}>{data.contact.pdf.label}</a>
          </Bullet>
        </Screen>
        <Print>
          <Bullet icon={LinkedinIcon}>
            <a href={data.contact.linkedin.url}>{data.contact.linkedin.displayText}</a>
          </Bullet>
        </Print>
      </Description>
    </Section>
  );
};

const SkillsSection = () => (
  <Section>
    <SectionTitle>Skills</SectionTitle>
    <Description tight>
      {data.skills.map((skill, idx) => (
        <Bullet key={idx} icon={skill.icon}>{skill.text}</Bullet>
      ))}
    </Description>
  </Section>
);

const EducationSection = () => (
  <Section>
    <SectionTitle>Education</SectionTitle>
    <Description tight>
      {data.education.map((item, idx) => (
        <Bullet key={idx} icon={item.icon}>{item.text}</Bullet>
      ))}
    </Description>
  </Section>
);

const PatentsSection = () => {
  if (!data.patents?.length) return null;
  return (
    <Section>
      <SectionTitle>Patents</SectionTitle>
      <Description tight>
        {data.patents.map((item, idx) => (
          <Bullet key={idx} icon={item.icon}>{item.text}</Bullet>
        ))}
      </Description>
    </Section>
  );
};

const InterestsSection = () => {
  if (!data.interests?.length) return null;
  return (
    <Section>
      <SectionTitle>Interests</SectionTitle>
      <Description tight>
        {data.interests.map((item, idx) => (
          <Bullet key={idx} icon={item.icon}>{item.text}</Bullet>
        ))}
      </Description>
    </Section>
  );
};

const AboutMeSection = () => (
  <Section>
    <SectionTitle top>About Me</SectionTitle>
    <Summary>
      <PointText>{data.summary}</PointText>
    </Summary>
    <div style={{borderBottom: '1px solid #ccc'}} />
  </Section>
);

const ExperienceSection = () => (
  <Section>
    <SectionTitle>Experience</SectionTitle>
    {data.experience.map((e, idx) => <Job key={idx} data={e} />)}
  </Section>
);

const MobileContainer = styled.div`
  margin: 0;
  padding: 0;
`;

const WithBackground = styled.div`
  @media screen {
    padding: 1em;
    background-color: #304655;
    color: #ddd;
    border-top: 5px solid black;
    border-bottom: 5px solid black;
    & h2 {
      ${textShadowOnDark};
    }
  }
`;
const WithoutBackground = styled.div`
  @media screen {
    padding: 1em;
  }
`;

const DesktopLayout = () => (
  <Container>
    <Left>
      <Head />
      <ContactSection />
      <SkillsSection />
      <EducationSection />
      <PatentsSection />
      <InterestsSection />
    </Left>
    <Right>
      <AboutMeSection />
      <ExperienceSection />
    </Right>
  </Container>
);

const MobileLayout = () => (
  <MobileContainer>
    <WithBackground>
      <Head />
      <ContactSection />
    </WithBackground>
    <WithoutBackground>
      <AboutMeSection />
      <ExperienceSection />
    </WithoutBackground>
    <WithBackground>
      <SkillsSection />
      <EducationSection />
      <PatentsSection />
      <InterestsSection />
    </WithBackground>
  </MobileContainer>
);

export default () => {
  return (
    <React.Fragment>
      <Print>
        <DesktopLayout />
      </Print>
      <Screen>
        <Desktop>
          <DesktopLayout />
        </Desktop>
        <Mobile>
          <MobileLayout />
        </Mobile>
      </Screen>
    </React.Fragment>
  );
};
