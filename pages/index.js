import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Content>
        <BackgroundName>cameron zollinger cameron zollinger</BackgroundName>
        <Description>
          a full stack web developer w/
          <br />a <Highlight>design-minded</Highlight> approach to development
        </Description>
        <Link href="/my-work" passHref>
          <Button>see my work</Button>
        </Link>
      </Content>
    </Layout>
  );
}

//STYLES_______________________
const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const BackgroundName = styled.h1`
  color: #e5effd;
  position: absolute;
  font-size: 300px;
  top: -75px;
  left: 75px;
  line-height: 240px;
  z-index: -100;
`;

const Highlight = styled.span`
  color: #2f80ed;
`;

const Description = styled.h2`
  font-size: 68px;
  text-align: start;
  align-self: flex-end;
  margin-right: 75px;
  width: 70%;

  @media (max-width: 1370px) {
    font-size: 60px;
  }
  @media (max-width: 1205px) {
    font-size: 50px;
  }

  @media (max-width: 803px) {
    font-size: 30px;
    width: 70%;
  }
`;

const Button = styled.a`
  font-family: "DM Mono", monospace !important;
  width: 260px;
  height: 75px;
  background: #ffffff;
  filter: drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.3));
  box-shadow: inset 0 0 0 0 #2f80ed;
  border-radius: 5px;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease-out 0.4s;

  &:hover {
    /* transform: scale(1.05); */
    box-shadow: inset 400px 0 0 0 #2f80ed;
  }
`;
