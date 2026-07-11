import React, { Fragment } from 'react';
import {
  TitleLine, Company, CompanyName, Details, Tenure, Location, Description,
  Role, Project, PointText,
} from './ui';

const ProjectItem = ({ project }) => (
  <Fragment>
    <Project breakBefore={project.breakBefore}>{project.name}</Project>
    {project.bullets.map((bullet, idx) => (
      <PointText key={idx}>{bullet}</PointText>
    ))}
  </Fragment>
);

const RoleItem = ({ role }) => (
  <Fragment>
    {role.name && <Role breakBefore={role.breakBefore}>{role.name}</Role>}
    {role.projects
      ? role.projects.map((project, idx) => <ProjectItem key={idx} project={project} />)
      : role.bullets.map((bullet, idx) => <PointText key={idx}>{bullet}</PointText>)
    }
  </Fragment>
);

const Job = ({ data }) => {
  if (data.live === 'off') return null;
  const { companyName, tenure, location, roles, breakBefore } = data;
  return (
    <Company breakBefore={breakBefore}>
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
};

export default Job;
