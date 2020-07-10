import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const MobileNav = () => {
  const router = useRouter();

  return (
    <NavContainer>
      <Link href="/me" passHref>
        <NavLink>me</NavLink>
      </Link>
      <Link href="/my-work" passHref>
        <NavLink>my work</NavLink>
      </Link>
      <Link href="/contact-me" passHref>
        <NavLink>contact</NavLink>
      </Link>
    </NavContainer>
  );
};

export default MobileNav;

//STYLES__________________________
const NavContainer = styled.div`
  height: 100%;
  width: 200px;
  background-color: white;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1005;
  transition: 0.25s ease-in-out;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 100px;
`;

const NavLink = styled.a`
  color: black;
  font-size: 24px;
  padding: 10px;
  border-radius: 5px;
`;
