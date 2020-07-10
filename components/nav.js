import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Nav = () => {
  const router = useRouter();

  return (
    <>
      <Link href="/" passHref>
        {router.pathname === "/contact-me" ? (
          <LogoDark>:zollinger</LogoDark>
        ) : (
          <Logo>
            <span>:</span>zollinger
          </Logo>
        )}
      </Link>
      {router.pathname === "/contact-me" ? (
        <>
          <Link href="/me" passHref>
            <NavLinkDark>me</NavLinkDark>
          </Link>
          <Link href="/my-work" passHref>
            <NavLinkDark>my work</NavLinkDark>
          </Link>
          <Link href="/contact-me" passHref>
            <NavLinkDark>contact</NavLinkDark>
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
          <Link href="/contact-me" passHref>
            <NavLink>contact</NavLink>
          </Link>
        </>
      )}
    </>
  );
};

export default Nav;

//STYLES__________________________
const Logo = styled.a`
  font-family: "DM Mono", monospace !important;
  top: 25px;
  left: 75px;
  position: fixed;
  font-size: 36px;
  transition: 0.2s ease-in-out;
  z-index: 1002;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  top: 15px;
  left: 65px;

  &:hover {
    transform: scale(1.05);
  }

  span {
    color: #2f80ed;
  }

  @media (max-width: 550px) {
    font-size: 32px;
    left: 20px;
  }
`;

const LogoDark = styled(Logo)`
  color: white;
  background-color: #2f80ed;

  @media (max-width: 600px) {
    font-size: 32px;
    left: 20px;
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
    color: #2f80ed;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const NavLinkDark = styled(NavLink)`
  color: white;
`;
