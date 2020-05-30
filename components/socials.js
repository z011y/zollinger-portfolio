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

const SocialsWork = styled(SocialsAll)`
  a {
    color: white;
  }
`;
