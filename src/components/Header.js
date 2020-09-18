import styled from "@emotion/styled"
import { Link } from "gatsby"
import React, { useEffect } from "react"
import MenuIcon from "../assets/hamburgerMenuIcon.png"

const StyledHeader = styled.header`
  width: 100vw;
  min-height: 9vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--gradient);
  transition: all 0.7s ease-in;
  margin-bottom: 1rem;
`
const StyledScrolledHeader = styled(StyledHeader)`
  position: fixed;
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
    height: 8vh;
  }
`

const Header = props => {
  const [scrolled, setScrolled] = React.useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 200) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  let TheOneandOnlyTrueHeader = !scrolled
    ? StyledHeader
    : StyledScrolledHeader
 
  return (
    <TheOneandOnlyTrueHeader>
      <HeaderElement>
        <Link to="">
          <img src={MenuIcon} alt="Menu" />
        </Link>
      </HeaderElement>
      <HeaderElement>
        <Link to="">Logo</Link>
      </HeaderElement>
      <HeaderElement>
        <Link to="">Site in English</Link>
      </HeaderElement>
    </TheOneandOnlyTrueHeader>
  )
}
export default Header
