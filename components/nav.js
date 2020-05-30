import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Nav = () => {
  const router = useRouter();

  return (
    <>
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
          <Link href="/contact-me" passHref>
            <NavLinkWork>contact</NavLinkWork>
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
  z-index: 100;

  &:hover {
    transform: scale(1.05);
  }

  span {
    color: #2f80ed;
  }
`;

const LogoWork = styled(Logo)`
  color: white;
  background-color: #2f80ed;
  padding: 10px;
  border-radius: 5px;
  top: 15px;
  left: 65px;
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

const NavLinkWork = styled(NavLink)`
  color: white;
`;
