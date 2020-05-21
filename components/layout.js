import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import Linkedin from "./svg/linkedin-brands.js";
import Github from "./svg/github-brands.js";
import Facebook from "./svg/facebook-brands.js";
import Instagram from "./svg/instagram-brands.js";
import Dribbble from "./svg/dribbble-brands.js";
import Codepen from "./svg/codepen-brands.js";
import FileIcon from "./svg/file-icon";

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <div className="container">
      <Head>
        <title>Cameron Zollinger Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Header>
        <Link href="/" passHref>
          {router.pathname === "/my-work" ? (
            <LogoWork>:zollinger</LogoWork>
          ) : (
            <Logo>
              <span>:</span>zollinger
            </Logo>
          )}
        </Link>
        {router.pathname === "/my-work" ? (
          <>
            <Link href="/me" passHref>
              <NavLinkWork>me</NavLinkWork>
            </Link>
            <Link href="/my-work" passHref>
              <NavLinkWork>my work</NavLinkWork>
            </Link>
            <Link href="/my-info" passHref>
              <NavLinkWork>my info</NavLinkWork>
            </Link>
          </>
        ) : (
          <>
            <Link href="/me" passHref>
              <NavLink>me</NavLink>
            </Link>
            <Link href="/my-work" passHref>
              <NavLink>my work</NavLink>
            </Link>
            <Link href="/my-info" passHref>
              <NavLink>my info</NavLink>
            </Link>
          </>
        )}
      </Header>

      <main>
        {router.pathname === "/my-work" ? (
          <SocialsWork>
            <a href="https://www.linkedin.com/in/cameron-zollinger">
              <Linkedin />
            </a>
            <a href="https://github.com/cameron-charles">
              <Github />
            </a>
            <a href="https://www.facebook.com/cameron.zollinger/">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/cameroncharles_/">
              <Instagram />
            </a>
            <a href="https://dribbble.com/cameroncharles_">
              <Dribbble />
            </a>
            <a href="https://codepen.io/cameroncharles_">
              <Codepen />
            </a>
          </SocialsWork>
        ) : (
          <Socials>
            <a href="https://www.linkedin.com/in/cameron-zollinger">
              <Linkedin />
            </a>
            <a href="https://github.com/cameron-charles">
              <Github />
            </a>
            <a href="https://www.facebook.com/cameron.zollinger/">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/cameroncharles_/">
              <Instagram />
            </a>
            <a href="https://dribbble.com/cameroncharles_">
              <Dribbble />
            </a>
            <a href="https://codepen.io/cameroncharles_">
              <Codepen />
            </a>
          </Socials>
        )}
        <ResumeContainer>
          <Resume
            href="https://docs.google.com/document/d/1yWLm-agk-Dz-wL2VMHe7QAMQbdnyLBr-ZP4FAURd_Wk/edit?usp=sharing"
            target="blank"
          >
            <FileIcon />
          </Resume>
          <ResumeText>Resume</ResumeText>
        </ResumeContainer>
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
`;

const Logo = styled.a`
  font-family: "DM Mono", monospace !important;
  top: 25px;
  left: 75px;
  position: fixed;
  font-size: 36px;
  transition: 0.2s ease-in-out;
  z-index: 100;

  &:hover {
    transform: scale(1.05);
  }

  span {
    color: #2f80ed;
  }
`;

const NavLink = styled.a`
  color: black;
  margin-right: 50px;
  font-size: 24px;
  padding: 10px;
  border-radius: 5px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: white;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.25);
    color: black;
  }
`;

const Socials = styled.div`
  position: fixed;
  left: 0;
  top: 25%;
  width: 75px;
  height: 50%;
  align-self: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    width: 50%;
  }
`;

const ResumeContainer = styled.div`
  &:hover h3 {
    width: 150px;
    z-index: -1;
  }
`;

const ResumeText = styled.h3`
  width: 50px;
  height: 50px;
  background-color: white;
  position: fixed;
  bottom: 50px;
  right: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  z-index: -5;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-left: 20px;
  transition: 0.25s ease-in-out;
  overflow: hidden;
`;

const Resume = styled.a`
  width: 50px;
  height: 50px;
  background-color: white;
  position: fixed;
  bottom: 50px;
  right: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  svg {
    width: 40%;
    color: #2f80ed;
  }
`;

// const Footer = styled.footer`
//   width: 100%;
//   height: 200px;
//   background-color: #e5effd;
// `;

const LogoWork = styled(Logo)`
  color: white;
  background-color: #2f80ed;
  padding: 10px;
  border-radius: 5px;
  top: 15px;
  left: 65px;
`;

const NavLinkWork = styled(NavLink)`
  color: white;
`;

const SocialsWork = styled(Socials)`
  a {
    color: white;
  }
`;
