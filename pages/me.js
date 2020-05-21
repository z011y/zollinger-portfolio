import styled from "styled-components";
import Link from "next/link";

import Layout from "../components/layout";
import LargeCircle from "../components/svg/large-circle";
import MeIllustration from "../components/svg/me-illustration";

const Me = () => {
  return (
    <Layout>
      <Content>
        <BackgroundColons>
          : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : :
          : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : :
          : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : :
          : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : :
          : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : :
          : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : :
          : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : :
          : : : : : : : : : : : : : : : :
        </BackgroundColons>
        <LargeCircleTopStyled />
        <LargeCircleStyled />
        <MeIllustrationStyled />
        <Title>me</Title>
        <BioContainer>
          <h1>Cameron Zollinger</h1>
          <h2>
            Graduate of <span>Bottega Code School</span>
          </h2>
          <BioText>
            Hi, I'm Cameron Zollinger, a full stack web developer. I'm
            passionate about great code and minimalist design. I love to create,
            and web development gives me the freedom to create anything I want.
            My technology stack of choice is React and Python, but I'm a quick
            learner and I'm excited to continue expanding my knowledge.
          </BioText>
        </BioContainer>
      </Content>
    </Layout>
  );
};

export default Me;

//STYLES_________________________
const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: -2;
  position: relative;
  overflow: hidden;
`;

const BackgroundColons = styled.h1`
  font-size: 72px;
  color: #e5effd;
  line-height: 110px;
  position: absolute;
  width: 100%;
  height: 100%;
  padding-right: 75px;
  padding-left: 75px;
  z-index: -1;
`;

const Title = styled.h1`
  font-size: 86px;
  left: 135px;
  top: 90px;
  position: absolute;
  z-index: 2;
`;

const BioContainer = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  left: 115px;
  top: 205px;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.25);
  background-color: white;
  padding: 20px;
  border-radius: 5px;

  span {
    color: #2f80ed;
  }
`;

const LargeCircleStyled = styled(LargeCircle)`
  position: absolute;
  right: -250px;
  bottom: -750px;
`;

const LargeCircleTopStyled = styled(LargeCircle)`
  position: absolute;
  right: -250px;
  top: -800px;
`;

const MeIllustrationStyled = styled(MeIllustration)`
  position: absolute;
  right: 80px;
  bottom: 0;
  height: 96%;
`;

const BioText = styled.p`
  font-family: "DM Mono", monospace;
  font-size: 20px;
  line-height: 35px;
`;