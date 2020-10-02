import styled from "@emotion/styled"
import { Link } from "gatsby"
import React from "react"
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
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
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
  }
`

const Header = props => {
  return (
    <StyledHeader>
      <HeaderElement>
        <Link to="/">
          <img src={HomeIcon} alt="Home Icon" />{" "}
        </Link>
      </HeaderElement>
      <HeaderElement>
        <Link to="/projects">Projects</Link>
      </HeaderElement>
      <HeaderElement>
        <a href="https://www.gisny.org">GISNY</a>
      </HeaderElement>
    </StyledHeader>
  )
}
export default Header
