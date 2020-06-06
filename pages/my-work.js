import styled from "styled-components";
import Link from "next/link";

import Layout from "../components/layout";
import Project from "../components/project";

const MyWork = () => {
  return (
    <Layout>
      <Content>
        <BackgroundWords>
          my work my work my work my work my work my work my work my work my
          work my work my work my work my work my work my work my work my work
          my work my work my work my work my work my work my work my work my
          work my work my work my work my work my work my work my work my work
          my work my work my work my work my work my work my work my work my
          work my work my work my work my work my work my work my work my work
          my work my work my work my work my work my work my work my work my
          work my work my work my work my work my work my work my work my work
          my work my work my work my work my work my work my work my work my
          work my work my work my work my work my work my work my work my work
          my work my work my work my work my work my work my work my work my
          work my work my work my work my work my work my work my work my work
          my work my work my work my work my work my work my work my work my
          work my work my work my work my work my work my work my work my work
          my work my work my work my work my work my work my work my work my
          work my work my work my work my work my work my work my work my work
          my work my work my work my work my work my work my work my work my
          work my work my work my work my work my work my work my work my work
          my work my work my work my work my work my work my work my work my
          work my work my work my work my work my work my work my work my work
          my work my work my work my work my work my work my work my work my
          work my work my work my work my work my work my work my work my work
          my work my work my work my work my work my work my work my work my
          work my work my work my work my work my work my work my work my work
          my work my work my work my work my work my work my work my work my
          work my work my work my work my work my work my work my work my work
          my work my work my work my work my work my work my work my work my
          work my work my work my work my work my work my work my work my work
          my work my work my work my work my work my work my work my work my
          work my work my work my work my work my work my work my work my work
          my work my work my work my work my work my work my work my work my
          work my work my work my work my work my work my work my work my work
          my work my work my work my work my work my work my work my work
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
          <Project
            title={"Saga"}
            img={"/saga.png"}
            description={"Where storytellers come together"}
          />
          <Project
            title={"Tavern"}
            img={"/tavern.png"}
            description={"Connecting local artists with local venues"}
          />
          <Project
            title={"Wedding Site"}
            img={"/wedding.png"}
            description={"My fiance and I's wedding site"}
          />
          <Project
            title={"Foodies On Foot"}
            img={"/foodiesonfoot.png"}
            description={"A food tour in Napa, California"}
          />
          <Project
            title={"Bird Ponchos"}
            img={"/birdponchos.png"}
            description={"An ecommerce site for stylish rain ponchos"}
          />
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
  position: relative;
  z-index: -2;
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
  @media (max-width: 600px) {
    left: 75px;
    font-size: 70px;
  }
  @media (max-width: 400px) {
    font-size: 60px;
  }
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

  @media (max-width: 1200px) {
    right: 50px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
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

  @media (max-width: 1000px) {
    width: 75%;
  }
  @media (max-width: 600px) {
    width: 75%;
    margin-left: 75px;
  }
`;
