import Link from "next/link";
import styled from "styled-components";

const Project = ({ title, link, img, description }) => {
  return (
    <>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectLink href={link} target="blank">
        <ProjectImage src={img} />
      </ProjectLink>
      <ProjectDescription>{description}</ProjectDescription>
    </>
  );
};

export default Project;

//STYLES__________________________
const ProjectTitle = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-size: 40px;
`;

const ProjectLink = styled.a`
  position: relative;
  z-index: 1000;

  &:hover {
    cursor: pointer;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 5px;
  position: relative;
  z-index: 1000;

  &:hover {
    cursor: pointer;
  }
`;

const ProjectDescription = styled.p`
  color: white;
  font-family: "DM Mono", monospace;
  font-size: 24px;
  margin-bottom: 100px;
`;
