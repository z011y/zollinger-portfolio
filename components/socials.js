import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import Linkedin from "../public/linkedin.svg";
import Github from "../public/github.svg";
import Facebook from "../public/facebook.svg";
import Instagram from "../public/instagram.svg";
import Dribbble from "../public/dribbble.svg";
import Codepen from "../public/codepen.svg";

const Socials = () => {
  const router = useRouter();

  return (
    <>
      {router.pathname === "/contact-me" ? (
        <SocialsDark>
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
        </SocialsDark>
      ) : (
        <SocialsAll>
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
        </SocialsAll>
      )}
    </>
  );
};

export default Socials;

//STYLES__________________________
const SocialsAll = styled.div`
  position: fixed;
  left: 0;
  bottom: 25%;
  width: 75px;
  height: 50%;
  align-self: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.25s ease-in-out;
  }

  svg {
    width: 50%;
  }

  a:hover {
    color: #2f80ed;
  }

  @media (max-width: 600px) {
    bottom: 0px;
    flex-direction: row;
    width: 100%;
    height: 75px;
    background-color: white;
    padding-right: 40px;
    padding-left: 40px;
  }
`;

const SocialsDark = styled(SocialsAll)`
  a {
    color: white;
  }

  a:hover {
    color: black;
  }

  @media (max-width: 600px) {
    a {
      color: black;
    }
  }
`;
