import React from "react"
import styled from "@emotion/styled"

const Menu = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;

  border-right: 3.5px solid white;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(-20%)" : "translateX(-130%)")};
  position: fixed;
  flex-flow: column nowrap;
  background-color: var(--bg-color);

  top: 0;
  right: 0;
  height: 100%;
  width: 85%;
  z-index: 30;

  padding-top: 15vh;
`

const MenuItemList = ({ open, children }) => {
  return <Menu open={open}>{children}</Menu>
}

export default MenuItemList
