import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";

import MenuIcon from "../public/menu.svg";
import CloseIcon from "../public/close.svg";
import MobileNav from "./mobile-nav";

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Menu onClick={() => setOpen(!open)}>
        {open === true ? <CloseIcon /> : <MenuIcon />}
      </Menu>
      {open === true ? <MobileNav /> : null}
    </>
  );
};

export default Hamburger;

//STYLES__________________________
const Menu = styled.a`
  width: 50px;
  height: 50px;
  background-color: white;
  position: fixed;
  top: 20px;
  right: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;

  svg {
    width: 40%;
    color: #2f80ed;
  }

  @media (min-width: 800px) {
    display: none;
  }
`;
