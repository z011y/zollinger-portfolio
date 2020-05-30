import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import Socials from "./socials";
import Nav from "./nav";
import Resume from "./resume";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>Cameron Zollinger Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@700&display=swap"
          rel="stylesheet"
        ></link>
        <script id="mcjs">
          !function(c,h,i,m,p)
          {
            ((m = c.createElement(h)),
            (p = c.getElementsByTagName(h)[0]),
            (m.async = 1),
            (m.src = i),
            p.parentNode.insertBefore(m, p))
          }
          (document,"script","https://chimpstatic.com/mcjs-connected/js/users/d8d55abb620ac085187e19ed6/cbb28caaffe9f292c18c51fb5.js");
        </script>
      </Head>

      <Header>
        <Nav />
      </Header>

      <main>
        <Socials />
        <Resume />
        {children}
      </main>

      {/* <Footer>footer</Footer> */}
    </div>
  );
}

//STYLES__________________________
const Container = styled.div`
  height: 100%;
`;

const Header = styled.header`
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  display: flex;
  padding-right: 75px;
  z-index: 1000;
`;

// const Footer = styled.footer`
//   width: 100%;
//   height: 200px;
//   background-color: #e5effd;
// `;
