import Link from "next/link";
import styled from "styled-components";

const Project = ({ title, link, img, description }) => {
  return (
    <ProjectWrapper>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectLink href={link} target="blank">
        <ProjectImage src={img} />
      </ProjectLink>
      <ProjectDescription>{description}</ProjectDescription>
    </ProjectWrapper>
  );
};

export default Project;

//STYLES__________________________
const ProjectWrapper = styled.div`
  /* background-color: #2f80ed; */
  margin-bottom: 100px;
`;

const ProjectTitle = styled.h1`
  color: black;
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
  border: 5px solid black;
  position: relative;
  z-index: 1000;
  transition: 0.25s ease-in-out;

  &:hover {
    cursor: pointer;
    border: 5px solid #2f80ed;
  }
`;

const ProjectDescription = styled.p`
  color: black;
  font-family: "DM Mono", monospace;
  font-size: 24px;
`;
