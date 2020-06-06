import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

import Layout from "../components/layout";
import ContactForm from "../components/contact-form";

const ContactMe = () => {
  return (
    <Layout>
      <Content>
        <Background>
          @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @
          @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @
          @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @
          @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @
          @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @
          @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @
          @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @
          @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @
          @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @
          @ @ @ @ @ @ @ @ @
        </Background>
        <Title>contact</Title>
        <ContactForm />
      </Content>
    </Layout>
  );
};

export default ContactMe;

//STYLES_________________________
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

const Background = styled.h1`
  font-size: 72px;
  color: #e5effd;
  line-height: 110px;
  position: absolute;
  width: 100%;
  height: 100%;
  padding-right: 75px;
  padding-left: 75px;
  z-index: -100;
`;

const Title = styled.h1`
  font-size: 86px;
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
