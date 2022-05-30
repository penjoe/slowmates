import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    margin: 0.7rem;
  }

  a {
    text-decoration: none;
    color: rgb(228, 228, 228);
    margin: 0.7rem;
    font-size: 1.5rem;
    background: transparent;
    opacity: 1;
    text-shadow: 1.5px 1.5px 1.5px #555;
  }

  @media only screen and (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgba(1, 1, 1, 0.5);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: black;
    }
  }
`;

const NavList = ({ open, close }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="/#">Home</a>
      </li>
      <li>
        <a href="/#about">About</a>
      </li>
      <li>
        <a href="/#roadmap">Roadmap</a>
      </li>
      <li>
        <a href="/#team">Team</a>
      </li>
      <li>
        <a href="https://twitter.com/slowmates">Twitter</a>
      </li>
      <li>
        <a href="https://discord.gg/ktw4Pz5V5H">Discord</a>
      </li>
    </Ul>
  );
};

export default NavList;
