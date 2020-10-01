import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const MenuItemContainer = styled.li`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;

  > a {
    display: flex;
    justify-content: center;
    padding: 0.6rem 0rem;
    width: 90%;
    align-items: center;
    text-decoration: none;
    border-radius: 10px;
    border: 2px solid transparent;
    background: var(--gradient);
    font-family: var(--font-primary);
  }
`

const MenuItem = ({ to, text }) => {
  return (
    <MenuItemContainer>
      <Link to={to}>{text}</Link>
    </MenuItemContainer>
  )
}

export default MenuItem
