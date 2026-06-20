import React from 'react';
import styled from 'styled-components';
import { PiBracketsCurly, PiCirclesThree } from 'react-icons/pi';
import { FaDatabase, FaCloud, FaGraduationCap, FaChessBoard, FaHeadphones, FaEnvelope, FaFilePdf, FaLinkedin, FaGithub } from 'react-icons/fa6';
import { GrServices } from 'react-icons/gr';
import { AiOutlineGlobal } from 'react-icons/ai';
import { TbAutomation, TbCircuitBattery } from 'react-icons/tb';
import { GoGitBranch } from 'react-icons/go';
import { HiLightBulb } from 'react-icons/hi';
import { GiGuitarBassHead, GiHops } from 'react-icons/gi';
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
  Point,
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

const Github = () => (
  <a href="http://www.github.com/aaron-zeisler">
    <FaGithub />
  </a>
);
const LinkedIn = () => (
  <a href="https://www.linkedin.com/in/aaron-zeisler/">
    <FaLinkedin />
  </a>
);

const Head = () => (
  <Header>
    <Desktop>
      <Name>Aaron Zeisler</Name>
    </Desktop>
    <Mobile>
      <Name>Aaron Zeisler</Name>
    </Mobile>
    <Screen>
      <Icons>
        <Github />
        <LinkedIn />
      </Icons>
    </Screen>
  </Header>
);

const ContactSection = () => (
  <Section>
    <SectionTitle>Contact</SectionTitle>
    <Description tight>
      <Bullet icon={FaEnvelope}>
        <a href="mailto:aaron.zeisler@gmail.com">aaron.zeisler@gmail.com</a>
      </Bullet>
      <Screen>
        <Bullet icon={FaFilePdf}>
          <a href="/aaron.zeisler.pdf">aaron.zeisler.pdf</a>
        </Bullet>
      </Screen>
      <Print>
        <Bullet icon={FaLinkedin}>
          <a href="https://www.linkedin.com/in/aaron-zeisler">linkedin.com/in/aaron-zeisler</a>
        </Bullet>
      </Print>
    </Description>
  </Section>
);

const SkillsSection = () => (
  <Section>
    <SectionTitle>Skills</SectionTitle>
    <Description tight>
      <Bullet icon={PiBracketsCurly}>Go, Python, Java</Bullet>
      <Bullet icon={PiCirclesThree}>Distributed Systems</Bullet>
      <Bullet icon={FaDatabase}>DynamoDB, MySQL, Redis</Bullet>
      <Bullet icon={GrServices}>Kafka, SNS/SQS</Bullet>
      <Bullet icon={FaCloud}>AWS, Docker, Linux</Bullet>
      <Bullet icon={AiOutlineGlobal}>REST, gRPC, GraphQL</Bullet>
      <Bullet icon={TbAutomation}>Temporal, OpenTelemetry</Bullet>
      <Bullet icon={GoGitBranch}>TDD, Agile/Kanban, Git</Bullet>
    </Description>
  </Section>
);

const EducationSection = () => (
  <Section>
    <SectionTitle>Education</SectionTitle>
    <Description tight>
      <Bullet icon={FaGraduationCap}>Bowling Green State Univ.</Bullet>
      <Bullet>BS, Computer Science</Bullet>
    </Description>
  </Section>
);

const PatentsSection = () => (
  <Section>
    <SectionTitle>Patents</SectionTitle>
    <Description tight>
      <Bullet icon={HiLightBulb}>2 US Patents (Samsara)</Bullet>
    </Description>
  </Section>
);

const InterestsSection = () => (
  <Section>
    <SectionTitle>Interests</SectionTitle>
    <Description tight>
      <Bullet icon={GiGuitarBassHead}>Guitar</Bullet>
      <Bullet icon={TbCircuitBattery}>Analog Circuits</Bullet>
      <Bullet icon={FaChessBoard}>Board Games</Bullet>
      <Bullet icon={GiHops}>Brewing</Bullet>
      <Bullet icon={FaHeadphones}>Music</Bullet>
    </Description>
  </Section>
);

const AboutMeSection = () => (
  <Section>
    <SectionTitle top>About Me</SectionTitle>
    <Summary>
      <Point>
        Backend engineer who builds the foundational services and developer tools that product teams depend on. Experienced leading platform initiatives at scale — from internal Go microservices serving 50,000+ requests per second to open-source SDKs used by developers across a dozen languages and environments. Strong background in distributed systems and high-throughput data pipelines.
      </Point>
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
