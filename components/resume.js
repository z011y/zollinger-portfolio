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
    width: 150px !important;
    z-index: 1000 !important;
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
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.25);
  justify-content: flex-start;
  align-items: center;
  z-index: 999;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-left: 20px;
  transition: 0.25s ease-in-out;
  overflow: hidden;

  @media (max-width: 550px) {
    bottom: 20px;
    right: 20px;
  }
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
  z-index: 1001;

  svg {
    width: 40%;
    color: #2f80ed;
  }

  @media (max-width: 550px) {
    bottom: 20px;
    right: 20px;
  }
`;
