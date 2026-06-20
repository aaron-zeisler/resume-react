import { PiBracketsCurly, PiCirclesThree } from 'react-icons/pi';
import { FaDatabase, FaCloud, FaGraduationCap, FaChessBoard, FaHeadphones, FaLinkedin, FaGithub } from 'react-icons/fa6';
import { GrServices } from 'react-icons/gr';
import { AiOutlineGlobal } from 'react-icons/ai';
import { TbAutomation, TbCircuitBattery } from 'react-icons/tb';
import { GoGitBranch } from 'react-icons/go';
import { HiLightBulb } from 'react-icons/hi';
import { GiGuitarBassHead, GiHops } from 'react-icons/gi';

export default {
  name: 'Aaron Zeisler',

  contact: {
    email: 'aaron.zeisler@gmail.com',
    github: {
      url: 'http://www.github.com/aaron-zeisler',
      icon: FaGithub,
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/aaron-zeisler/',
      displayText: 'linkedin.com/in/aaron-zeisler',
      icon: FaLinkedin,
    },
    pdf: {
      url: '/aaron.zeisler.pdf',
      label: 'aaron.zeisler.pdf',
    },
  },

  summary: `Backend engineer who builds the foundational services and developer tools that product teams depend on. Experienced leading platform initiatives at scale — from internal Go microservices serving 50,000+ requests per second to open-source SDKs used by developers across a dozen languages and environments. Strong background in distributed systems and high-throughput data pipelines.`,

  skills: [
    { icon: PiBracketsCurly, text: 'Go, Python, Java' },
    { icon: PiCirclesThree, text: 'Distributed Systems' },
    { icon: FaDatabase, text: 'DynamoDB, MySQL, Redis' },
    { icon: GrServices, text: 'Kafka, SNS/SQS' },
    { icon: FaCloud, text: 'AWS, Docker, Linux' },
    { icon: AiOutlineGlobal, text: 'REST, gRPC, GraphQL' },
    { icon: TbAutomation, text: 'Temporal, OpenTelemetry' },
    { icon: GoGitBranch, text: 'TDD, Agile/Kanban, Git' },
  ],

  education: [
    { icon: FaGraduationCap, text: 'Bowling Green State Univ.' },
    { text: 'BS, Computer Science' },
  ],

  patents: [
    { icon: HiLightBulb, text: '2 US Patents (Samsara)' },
  ],

  interests: [
    { icon: GiGuitarBassHead, text: 'Guitar' },
    { icon: TbCircuitBattery, text: 'Analog Circuits' },
    { icon: FaChessBoard, text: 'Board Games' },
    { icon: GiHops, text: 'Brewing' },
    { icon: FaHeadphones, text: 'Music' },
  ],

  experience: [
    {
      companyName: 'LaunchDarkly',
      location: 'Remote',
      tenure: { start: 'Feb 2026', end: 'Present' },
      roles: [
        {
          name: 'Software Engineer - SDK Team',
          bullets: [
            `Member of the team maintaining LaunchDarkly's 35+ open-source SDKs across server-side, client-side, and edge environments, spanning Go, Java, Python, .NET, Rust, and more. Implemented a new data transfer protocol in the Android SDK. Working toward ownership of the Go SDK and the Relay Proxy.`,
          ],
        },
      ],
    },
    {
      companyName: 'Career Break',
      location: '',
      tenure: { start: 'Sept 2025', end: 'Jan 2026' },
      roles: [
        {
          bullets: [
            `Recharging, quality family time, building guitar effects pedals, and developing personal software projects.`,
          ],
        },
      ],
    },
    {
      companyName: 'Samsara',
      location: 'San Francisco Bay Area, CA (Remote)',
      tenure: { start: 'Mar 2021', end: 'Sept 2025' },
      roles: [
        {
          name: 'Senior Software Engineer - Driver Management',
          projects: [
            {
              name: 'Competitions Product',
              bullets: [
                `Tech lead on a driver gamification platform enabling Samsara's fleet customers to run real-time competitions among drivers scored against any tracked metric. Designed and built the Go microservice backend with DynamoDB and Temporal for long-running workflow orchestration, supporting tens of thousands of concurrent participants per customer. Led system design and cross-functional delivery across Go backend, React web, and React Native mobile engineers.`,
              ],
            },
          ],
        },
        {
          name: 'Senior Software Engineer - Custom Reports Platform',
          bullets: [
            `Tech lead on a multi-quarter custom reporting platform enabling customers to combine data across Samsara's core domains — telematics, safety, sustainability, maintenance, and driver training — into a single configurable report. Led a 20-engineer team across the US and Poland. Owned the Go-based query compiler, time-based grouping engine, data-serving service, and chart visualizations.`,
          ],
        },
        {
          name: 'Senior Software Engineer - Media Services',
          bullets: [
            `Tech lead on next-generation media ingestion and serving infrastructure, handling video and image processing for Samsara's fleet and driver safety products. Maintained legacy systems while designing and building replacement Go services.`,
          ],
        },
        {
          name: 'Senior Software Engineer - Telematics Platform',
          projects: [
            {
              name: 'Trips Service',
              bullets: [
                `Maintained and enhanced the Trips service, a Go microservice transforming raw vehicle telemetry into structured activity periods consumed by every product team at Samsara. Served 50,000+ read requests per second at peak.`,
              ],
            },
            {
              name: 'Driver Assignment Service',
              breakBefore: true,
              bullets: [
                `Primary tech lead and engineer on the Driver Assignment service, consolidating Samsara's 11 disparate driver-vehicle assignment methods into a single, queryable Go microservice and data store. Immediately served 30,000+ requests per second upon launch, supporting Samsara's most latency-sensitive real-time logic.`,
              ],
            },
          ],
        },
      ],
    },
    {
      companyName: 'Stitch Fix',
      location: 'San Francisco Bay Area, CA (Remote)',
      tenure: { start: 'Mar 2020', end: 'Mar 2021' },
      roles: [
        {
          name: 'Senior Software Engineer - Messaging Platform',
          bullets: [
            `Developed the Go client libraries used by all Stitch Fix engineers to produce and consume messages across infrastructure handling 70M+ messages per day via Kafka and RabbitMQ. Led the platform migration from RabbitMQ to Kafka across Stitch Fix's microservices. Championed internal Go adoption through versioning standards, Go modules tooling, and a company-wide Go education series ("code clinics").`,
          ],
        },
      ],
    },
    {
      companyName: 'Linden Lab',
      location: 'San Francisco Bay Area, CA',
      tenure: { start: 'Oct 2008', end: 'Mar 2020' },
      roles: [
        {
          name: 'Senior Software Engineer - Core Services',
          bullets: [
            `Built and maintained core platform services in Go — auth, account management, payments and invoicing, PII management, and a virtual currency exchange — via REST APIs and microservices, serving as the data backbone for all Linden Lab products. Co-developed infrastructure for Sansar, Linden Lab's new virtual world; those services were spun off as Tilia, a standalone fintech SaaS company.`,
          ],
        },
        {
          name: 'Software Engineer - Internal Tools',
          bullets: [
            `Developed internal tooling for Linden Lab's customer support organization.`,
          ],
        },
        {
          name: 'Software Engineer - Second Life Web Team',
          bullets: [
            `Technical owner of Second Life's registration platform (join.secondlife.com). Contributed to secondlife.com redesign and billing engine.`,
          ],
        },
      ],
    },
    {
      companyName: 'LifeMasters Supported SelfCare',
      location: 'San Francisco Bay Area, CA',
      tenure: { start: 'Sept 2005', end: 'Oct 2008' },
      roles: [
        {
          name: 'Senior Software Engineer',
          bullets: [
            `Enhanced and maintained enterprise healthcare applications: a call center tool used by 1,000+ health professionals, a client web portal, and a participant portal serving 1M+ users.`,
          ],
        },
      ],
    },
  ],
};
