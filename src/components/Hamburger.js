import React, { useState } from 'react';
import styled from 'styled-components';
import NavList from './NavList.js';

const StyledHamburger = styled.div`
  position: fixed;
  height: 2rem;
  width: 2rem;
  top: 15px;
  right: 20px;
  display: none;
  // background-color: black;
  border-radius: 10px;
  cursor: pointer;
  z-index: 20;

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#000' : '#fff'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(!open)
  }

  return(
    <>
      <StyledHamburger close={close} open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledHamburger>
      <NavList open={open} />
    </>
  )
}

export default Hamburger;
