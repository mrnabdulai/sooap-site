// color=#328AFF
import React, { useState } from "react";
import styled from "styled-components";
import Container from "@mui/material/Container";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
const Logo = styled.div`
  font-weight: bold;
  color: #328aff;
  font-weight: 700;
  font-size: 25px;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    justify-content: center;

    top: 80px;
    width: 100%;
    left: ${(props) => (props.navIsOpen ? "0" : "-100%")};
    font-size: 20px;
    height: calc(100vh - 80px);
    background-color: #FFF;
    z-index: 999;
    transition: all 0.5s ease;


    & > * {
      margin-top: 30px;
    }
  }
`;

const NavContainer = styled(Container)``;

const NavWrapper = styled.div`
  padding: 30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > * {
    flex: 1;
  }
`;

const MenuBtn = styled.img`
  display: none;
  width: 30px;
  height: 30px;

  @media screen and (max-width: 768px) {
    display: block;
    flex: 0;
    cursor: pointer;
  }
`;

function Navbar() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  // TODO:inplement language in french
  return (
    <nav>
      <NavContainer>
        <NavWrapper>
          <Logo>
            <WorkspacesIcon />
            Sooap
          </Logo>
          <NavLinks navIsOpen={navIsOpen}>
            <li>Services</li>
            <li>How it works</li>
            <li>Plans</li>
            <li>Register</li>
            <li className='last'>Login</li>
          </NavLinks>
          <MenuBtn
            onClick={() => {
              setNavIsOpen(!navIsOpen);
            }}
            src={
              !navIsOpen
                ? "/images/icons/zig-menu.svg"
                : "/images/icons/close.svg"
            }
            alt=''
          />
        </NavWrapper>
      </NavContainer>
    </nav>
  );
}

export default Navbar;
