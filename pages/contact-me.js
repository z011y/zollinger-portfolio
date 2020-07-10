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

  @media (max-width: 600px) {
    padding-right: 40px;
    padding-left: 40px;
  }
`;

const Background = styled.h1`
  font-size: 72px;
  color: rgb(73, 144, 239);
  background-color: #2f80ed;
  line-height: 110px;
  position: fixed;
  width: 100%;
  height: 100%;
  padding-right: 75px;
  padding-left: 75px;
  z-index: -100;
  overflow: hidden;

  @media (max-width: 600px) {
    font-size: 60px;
  }
  @media (max-width: 800px) {
    color: #2f80ed;
  }
`;
