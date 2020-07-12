import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Content>
        <BackgroundName>
          cameron zollinger cameron zollinger cameron zollinger cameron
          zollinger cameron zollinger cameron zollinger
        </BackgroundName>
        <Description>
          a full stack web developer w/ a <Highlight>design-minded</Highlight>{" "}
          approach to development
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
  position: relative;
`;

const BackgroundName = styled.h1`
  color: #f1f7ff;
  position: fixed;
  font-size: 300px;
  top: -75px;
  left: 75px;
  line-height: 240px;
  z-index: -100;
  text-overflow: none;

  @media (max-width: 600px) {
    font-size: 200px;
    line-height: 160px;
    left: 40px;
  }
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

  @media (max-width: 600px) {
    font-size: 45px;
    width: 100%;
    padding-right: 40px;
    padding-left: 40px;
    margin: 0px;
    text-align: center;
  }
`;

const Button = styled.a`
  font-family: "DM Mono", monospace !important;
  width: 260px;
  height: 75px;
  background: #ffffff;
  box-shadow: inset 0 0 0 0 #2f80ed;
  border-radius: 5px;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease-out 0.4s;
  position: relative;

  &:hover {
    /* transform: scale(1.05); */
    box-shadow: inset 400px 0 0 0 #2f80ed;
  }

  &::before {
    content: " ";
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 260px;
    height: 75px;
    background: #ffffff;
    transition: ease-out 0.4s;
    border-radius: 5px;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 600px) {
    font-size: 24px;
    width: 180px;
    height: 50px;
    margin-top: 25px;

    &::before {
      width: 180px;
      height: 50px;
    }
  }
`;
