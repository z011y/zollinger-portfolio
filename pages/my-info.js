import styled from "styled-components";
import Link from "next/link";

import Layout from "../components/layout";
import LargeCircle from "../components/svg/large-circle";

const MyInfo = () => {
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
          i i i i i
        </BackgroundIs>
        <LargeCircleStyled />
        <ICorner />
        <Title>my info</Title>
        <Info>
          <h3>
            email: <span>cameron.ntc@gmail.com</span>
          </h3>
          <h3>
            phone: <span>(541) 953-0737</span>
          </h3>
          <h3>
            <span>Provo, UT</span>
          </h3>
        </Info>
      </Content>
    </Layout>
  );
};

export default MyInfo;

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

const LargeCircleStyled = styled(LargeCircle)`
  position: absolute;
  top: -400px;
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

const Info = styled.div`
  height: 400px;
  width: 600px;
  position: absolute;
  top: 200px;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  color: white;

  span {
    font-family: "DM Mono", monospace;
    font-weight: 400;
  }
`;
