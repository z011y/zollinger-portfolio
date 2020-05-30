import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

import Layout from "../components/layout";
import ContactForm from "../components/contact-form";

const ContactMe = () => {
  return (
    <Layout>
      <Content>
        <BackgroundIs>
          i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i
          i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i
          i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i
          i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i
          i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i
          i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i
          i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i
          i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i
          i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i
          i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i
          i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i
          i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i
          i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i
          i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i
          i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i
          i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i
          i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i
          i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i i
          i i i i i i i i i i
        </BackgroundIs>
        <LargeCircleStyled src="/large-circle.svg" />
        <ICorner />
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

const BackgroundIs = styled.h1`
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
`;

const LargeCircleStyled = styled.img`
  position: absolute;
  top: -300px;
  width: 65%;
`;

const ICorner = styled.div`
  width: 200px;
  height: 600px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #2f80ed;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
`;
