import styled from "@emotion/styled"
import { Link } from "gatsby"
import React from "react"

function Footer(props) {
  const StyledFooter = styled.footer`
    width: 100vw;
    min-height: 7vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: var(--gradient);
    opacity: 0.5;
  `
  const FooterElement = styled.div`
    padding: 0.7rem 0.2rem;
    display: flex;
    margin: 0 1rem;
    justify-content: space-around;
    & > a {
      text-decoration: none;
      color: white;
      font-family: "Finger Paint";
      font-size: calc(0.8rem + 1vw);
    }
  `
  return (
    <StyledFooter>
      <FooterElement>
        <Link to="/privacypolicy">Privacy policy</Link>
      </FooterElement>
      <FooterElement>
        <a href="mailto:info@code-projects.de">Get in Touch!</a>
      </FooterElement>
      <FooterElement>
        <Link to="/disclaimer">Disclaimer</Link>
      </FooterElement>
    </StyledFooter>
  )
}

export default Footer
