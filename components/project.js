import Link from "next/link";
import styled from "styled-components";

const Project = ({ title, img, description }) => {
  return (
    <>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectImage src={img} />
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

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const ProjectDescription = styled.p`
  color: white;
  font-family: "DM Mono", monospace;
  font-size: 24px;
  margin-bottom: 100px;
`;
