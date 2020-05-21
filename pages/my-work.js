import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

import Layout from "../components/layout";
import SagaImg from "../public/saga.png";
import TavernImg from "../public/tavern.png";
import WeddingImg from "../public/wedding.png";
import FoodiesImg from "../public/foodiesonfoot.png";
import BirdImg from "../public/birdponchos.png";

const MyWork = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("checked!");
  };

  return (
    <Layout>
      <Content>
        <BackgroundWords>
          my work my work my work my work my work my work my work my work my
          work my work my work my work my work my workmy work my work my work my
          work my work my work my work my work my work my work my work my work
          my work my work my work my work my work my work my work my work my
          work my work my work my work my work my work my work my workmy work my
          work my work my work my work my work my work my work my work my work
          my work my work my work my work my work my work my work my work my
          work my work my work my work my work my work my work my work my work
          my workmy work my work my work my work my work my work my work my work
          my work my work my work my work my work my work my work my work my
          work my work my work my work my work my work my work my work my work
          my work my work my workmy work my work my work my work my work my work
          my work my work my work my work my work my work my work my work my
          work my work my work my work my work my work my work my work my work
          my work my work my work my work my workmy work my work my work my work
          my work my work my work my work my work my work my work my work my
          work my work
        </BackgroundWords>
        <Title>my work</Title>

        <FilterContainer>
          <h1>Tech Stack</h1>
          <h2>React</h2>
          <h2>Javascript</h2>
          <h2>Next.js</h2>
          <h2>Python</h2>
          <h2>SQL</h2>
          <h2>GraphQL</h2>
        </FilterContainer>

        <WorkContainer>
          <ProjectTitle>Saga</ProjectTitle>
          <ProjectImage src={SagaImg} />
          <ProjectDescription>
            Where storytellers come together
          </ProjectDescription>
          <ProjectTitle>Tavern</ProjectTitle>
          <ProjectImage src={TavernImg} />
          <ProjectDescription>
            Connecting local artists with local venues
          </ProjectDescription>
          <ProjectTitle>Wedding Site</ProjectTitle>
          <ProjectImage src={WeddingImg} />
          <ProjectDescription>
            My fiance and I's wedding site
          </ProjectDescription>
          <ProjectTitle>Foodies on Foot</ProjectTitle>
          <ProjectImage src={FoodiesImg} />
          <ProjectDescription>
            A food tour of Napa and Sonoma
          </ProjectDescription>
          <ProjectTitle>Bird Ponchos</ProjectTitle>
          <ProjectImage src={BirdImg} />
          <ProjectDescription>
            An ecommerce site for stylish ponchos
          </ProjectDescription>
        </WorkContainer>
      </Content>
    </Layout>
  );
};

export default MyWork;

//STYLES_________________________
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background-color: #2f80ed;
  z-index: -2;
  position: relative;
`;

const BackgroundWords = styled.h1`
  font-size: 72px;
  color: #4990ef;
  line-height: 110px;
  transform: rotate(-180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  padding-right: 75px;
  padding-left: 75px;
  z-index: -1;
`;

const Title = styled.h1`
  font-size: 86px;
  color: white;
  left: 135px;
  top: 90px;
  position: absolute;
  z-index: 2;
`;

const FilterContainer = styled.div`
  width: 300px;
  height: 550px;
  background: #2f80ed;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  position: fixed;
  top: 100px;
  right: 200px;
  z-index: 100;
  padding: 30px;
  color: white;
`;

const WorkContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  top: 190px;
  right: 75px;
  margin-top: 220px;
  margin-left: 140px;
  flex-direction: column;
  overflow: scroll;
`;

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
