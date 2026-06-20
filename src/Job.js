import React, { Fragment } from 'react';
import {
  TitleLine, Company, CompanyName, Details, Tenure, Location, Description,
  Role, Project, PointText, BreakBefore,
} from './ui';

const ProjectItem = ({ project }) => {
  const content = (
    <Fragment>
      <Project>{project.name}</Project>
      {project.bullets.map((bullet, idx) => (
        <PointText key={idx}>{bullet}</PointText>
      ))}
    </Fragment>
  );
  return project.breakBefore ? <BreakBefore>{content}</BreakBefore> : content;
};

const RoleItem = ({ role }) => {
  const content = (
    <Fragment>
      {role.name && <Role>{role.name}</Role>}
      {role.projects
        ? role.projects.map((project, idx) => <ProjectItem key={idx} project={project} />)
        : role.bullets.map((bullet, idx) => <PointText key={idx}>{bullet}</PointText>)
      }
    </Fragment>
  );
  return role.breakBefore ? <BreakBefore>{content}</BreakBefore> : content;
};

const Job = ({ data }) => {
  if (data.live === 'off') return null;
  const { companyName, tenure, location, roles, breakBefore } = data;
  const company = (
    <Company>
      <TitleLine>
        <CompanyName>{companyName}</CompanyName>
        <Details>
          <Tenure>{tenure.start} - {tenure.end}</Tenure>
          <Location>{location}</Location>
        </Details>
      </TitleLine>
      <Description>
        {roles.map((role, idx) => <RoleItem key={idx} role={role} />)}
      </Description>
    </Company>
  );
  return breakBefore ? <BreakBefore>{company}</BreakBefore> : company;
};

export default Job;
