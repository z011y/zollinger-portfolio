import Link from "next/link";
import styled from "styled-components";

import FileIcon from "../public/file-icon.svg";

const Resume = () => {
  return (
    <ResumeContainer>
      <ResumeIcon
        href="https://docs.google.com/document/d/1yWLm-agk-Dz-wL2VMHe7QAMQbdnyLBr-ZP4FAURd_Wk/edit?usp=sharing"
        target="blank"
      >
        <FileIcon />
      </ResumeIcon>
      <ResumeText>Resume</ResumeText>
    </ResumeContainer>
  );
};

export default Resume;

//STYLES__________________________
const ResumeContainer = styled.div`
  &:hover h3 {
    width: 150px;
    z-index: -1;
  }
`;

const ResumeText = styled.h3`
  width: 50px;
  height: 50px;
  background-color: white;
  position: fixed;
  bottom: 50px;
  right: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  z-index: -5;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-left: 20px;
  transition: 0.25s ease-in-out;
  overflow: hidden;
`;

const ResumeIcon = styled.a`
  width: 50px;
  height: 50px;
  background-color: white;
  position: fixed;
  bottom: 50px;
  right: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  svg {
    width: 40%;
    color: #2f80ed;
  }
`;
