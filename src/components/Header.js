import styled from "@emotion/styled"
import { Link } from "gatsby"
import React, { useState } from "react"
import Menu from "../components/Menu"
import HomeIcon from "../assets/homeIcon.svg"

const StyledHeader = styled.header`
  width: 100vw;
  min-height: 9vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--gradient);
  transition: all 0.7s ease-in;
  margin-bottom: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
`

const HeaderElement = styled.div`
  padding: 0.7rem 0.2rem;
  display: flex;
  margin: 0 1rem;
  justify-content: space-between;
  & > a {
    text-decoration: none;
    color: white;
    font-family: "Finger Paint";
    font-size: calc(1rem + 1vw);
  }
  & > a > img {
    height: 4vh;
    position: ${({ open }) => (open ? "fixed" : "relative")};
    z-index: 50;
  }
`

const Header = props => {
  const [open, setOpen] = useState(false)
  return (
    <StyledHeader>
      <HeaderElement>
        <Link to="/">
          <img
            open={open}
            onClick={() => setOpen(!open)}
            src={HomeIcon}
            alt="Home Icon"
          />
        </Link>
      </HeaderElement>
      <Menu open={open} />
      <HeaderElement>
        <Link to="/faq">FAQ</Link>
      </HeaderElement>
      <HeaderElement>
        <a
          href="https://www.gisny.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          GISNY
        </a>
      </HeaderElement>
    </StyledHeader>
  )
}
export default Header
