import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const MenuItemContainer = styled.li`
  margin-top: 0.5rem;

  > a {
    display: flex;
    padding: 0.6rem 0rem;
    max-width: 90%;
    align-items: center;
    text-decoration: none;
    border-radius: 10px;
    border: 1.5px solid white;
    box-shadow: 0.5px 0px 20px 0px rgba(0, 0, 0, 0.3);
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
