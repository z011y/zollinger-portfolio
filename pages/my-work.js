import styled from "styled-components";
import Link from "next/link";

import Layout from "../components/layout";
import Project from "../components/project";

const MyWork = () => {
  return (
    <Layout>
      <Content>
        <Title>my work</Title>

        <FilterContainer>
          <h1>Tech Stack</h1>
          <h2>Next.js</h2>
          <h2>React</h2>
          <h2>Redux</h2>
          <h2>Javascript</h2>
          <h2>Node.js</h2>
          <h2>Python</h2>
          <h2>SQL</h2>
          <h2>GraphQL</h2>
        </FilterContainer>

        <WorkContainer>
          <Project
            title={"Wedding Site"}
            link={"https://cameronandnicole.com"}
            img={"/wedding.png"}
            description={"My fiance and I's wedding site"}
            target="blank"
          />
          <Project
            title={"Foodies On Foot"}
            link={"https://foodiesonfootnv.now.sh"}
            img={"/foodiesonfoot.png"}
            description={"A food tour in Napa, California"}
            target="blank"
          />
          <Project
            title={"Saga"}
            link={"https://saga-front-end.vercel.app"}
            img={"/saga.png"}
            description={"Where storytellers come together"}
          />
          <Project
            title={"Tavern"}
            link={"https://tavern-front-end.vercel.app"}
            img={"/tavern.png"}
            description={"Connecting local artists with local venues"}
            target="blank"
          />
          <Project
            title={"Bird Ponchos"}
            link={"https://birdponchos.now.sh"}
            img={"/birdponchos.png"}
            description={"An ecommerce site for stylish rain ponchos"}
            target="blank"
          />
          <Project
            title={"Pittsburg Seafood Festival"}
            link={"https://www.pittsburgseafoodandmusicfestival.com/"}
            img={"/pittsburgfestival.png"}
            description={"An event site for the Pittsburg Chamber of Commerce"}
            target="blank"
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
  background-color: white;
  position: relative;
`;

// const BackgroundWords = styled.h1`
//   font-size: 72px;
//   color: #e5effd;
//   line-height: 110px;
//   transform: rotate(-180deg);
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   padding-right: 75px;
//   padding-left: 75px;
//   z-index: 1;
//   @media (max-width: 448px) {
//     font-size: 60px;
//     padding-right: 25px;
//   }
// `;

const Title = styled.h1`
  width: calc(50% + 140px);
  background-color: white;
  font-size: 86px;
  color: black;
  left: 0px;
  top: 0px;
  padding-left: 135px;
  padding-top: 90px;
  position: fixed;
  z-index: 1001;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    font-size: 70px;
    padding-left: 40px;
  }
  @media (max-width: 400px) {
    font-size: 60px;
  }
`;

const FilterContainer = styled.div`
  width: 300px;
  height: 550px;
  background: white;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  position: fixed;
  top: 100px;
  right: 200px;
  z-index: 100;
  padding: 30px;
  color: black;

  h2 {
    font-family: "DM Mono";
    font-weight: 400;
  }

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
  margin-top: 220px;
  margin-left: 140px;
  flex-direction: column;
  overflow: scroll;
  position: relative;
  z-index: 3;

  @media (max-width: 1000px) {
    width: 75%;
  }
  @media (max-width: 600px) {
    width: 100%;
    padding-right: 40px;
    padding-left: 40px;
    margin-left: 0px;
  }
`;
