import React from "react"
import GlobalStyles from "../components/GlobalStyles"
import FaqCard from "../components/FaqCard"
import styled from "@emotion/styled"

const FaqSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 60px));
  @media (min-width: 900px) {
    grid-template-columns: repeat(8, minmax(auto, 60px));
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(12, minmax(auto, 60px));
  }
  grid-gap: 40px;
  align-items: center;
  justify-content: center;

  & * {
    grid-column: span 4;
  }
`
function Faq(props) {
  return (
    <div>
      <GlobalStyles />

      <FaqSection>
        <FaqCard question="Codeprojects Junior" answer="Details" />
        <FaqCard question= "Click Cards to see more!" answer= "You found the Easter Egg :-)"/>
        <FaqCard question="Codeprojects Senior" answer="Details" />
      </FaqSection>
    </div>
  )
}

export default Faq
