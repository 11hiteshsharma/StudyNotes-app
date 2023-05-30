import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { GiBurningBook } from "react-icons/gi";

const NavLink = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blogs",
    href: "/blog",
  },
  {
    title: "Notes",
    href: "/notes",
  },
  {
    title: "Quiz's",
    href: "/quiz",
  },
];

function NavBar() {
  return (
    <NavigationBar>
      <Logo>
        <StyledLogo>
          <GiBurningBook size={40} />
        </StyledLogo>
        <StyledLink href="/">
          <StyledFontAwesomeIcon>S</StyledFontAwesomeIcon>tudyM
        </StyledLink>
      </Logo>

      <Navigation>
        {NavLink.map((link) => (
          <Link href={link.href} key={link.title}>
            {link.title}
          </Link>
        ))}
      </Navigation>
    </NavigationBar>
  );
}

export default NavBar;

const NavigationBar = styled.nav`
  margin-inline: 4rem;
  margin-block: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledLogo = styled.div`
  color: #00c7f9;
`;

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  color: #91cff2;
`;

const StyledFontAwesomeIcon = styled.span`
  color: #009df9;
  font-size: 1.7rem;
  text-transform: capitalize;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 1rem;

  & > a:nth-last-child(2) {
    background-color: #009df9;
    border-radius: 5px;
    padding: 12px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: transparent;
      color: #009df9;
      border: 1px solid #009df9;
    }
  }

  & > a:last-child {
    color: #009df9;
    border: 1px solid #009df9;
    border-radius: 5px;
    padding: 12px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #009df9;
      color: #fff;
    }
  }
`;
