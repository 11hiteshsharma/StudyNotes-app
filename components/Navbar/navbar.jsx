import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import Image from "next/image";

import { useDispatch } from "react-redux";

import Sidebar from "./sidebar";
import { OpenModal } from "@/redux/slices/quizModal";

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
    href: "/blogs",
  },
  {
    title: "Notes",
    href: "/notes",
  },
];

function NavBar() {
  const dispatch = useDispatch();
  const [shadow, setShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      setShadow(window.scrollY >= 70);
    };

    window.addEventListener("scroll", handleShadow);

    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavigationBar shadow={shadow}>
      <NavbarContainer>
        <Logo>
          <Link href="/">
            <StyledLogo>
              <Image src="/logo.svg" alt="logo" width={50} height={50} />
            </StyledLogo>
          </Link>

          <StyledLink href="/">
            <StyledFontAwesomeIcon>N</StyledFontAwesomeIcon>otio
          </StyledLink>
        </Logo>

        <Navigation>
          {NavLink.map((link) => (
            <Link href={link?.href} key={link.title}>
              {link?.title}
            </Link>
          ))}

          <a
            onClick={() => {
              dispatch(OpenModal(true));
            }}
          >
            Quiz&apos;s
          </a>
        </Navigation>

        <NavMenu onClick={toggleSidebar}>
          <HiMenuAlt3 size={30} />
        </NavMenu>
      </NavbarContainer>

      <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
    </NavigationBar>
  );
}
export default NavBar;

const NavigationBar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10000;
  transition: box-shadow 0.3s ease-in-out;

  background-color: ${({ shadow }) => (shadow ? "#fff" : "transparent")};
  box-shadow: ${({ shadow }) => (shadow ? "2px 2px 13px 2px #E2E2E2" : "none")};
`;

const NavbarContainer = styled.div`
  margin-inline: 4rem;
  padding-block: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 830px) {
    margin-inline: 1rem;
  }
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
  color: #3e9ed6;
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
  font-size: 1.2rem;
  font-weight: 500;

  @media (max-width: 830px) {
    display: none;
  }

  /* The pseudo class ":nth-last-child" is potentially unsafe when doing server-side rendering. Try changing it to ":nth-last-of-type". */
  & > a:nth-last-child(2) {
    background-color: #009df9;
    border-radius: 5px;
    color: #fff;
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

const NavMenu = styled.div`
  display: none;
  cursor: pointer;

  border-radius: 50%;
  padding: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #f7f2f2;
  }

  @media (max-width: 830px) {
    display: block;
  }
`;
