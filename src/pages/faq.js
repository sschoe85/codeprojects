import React from "react"
import GlobalStyles from "../components/GlobalStyles"
import FaqCard from "../components/FaqCard"
import styled from "@emotion/styled"

function Faq(props) {
const FaqSection = styled.section`
display: grid;
grid-template-columns: repeat(12, minmax(auto, 60px));
grid-gap: 40px;`


  return (
    <GlobalStyles>
      <FaqSection>
        <FaqCard question = "Wie geht's?" answer = "Super!"/>
        <FaqCard question = "Das ist ein Test blablablablabaaaaaa aaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaa" answer = "sdgd sgsg sg sdgsgsg sdgsdg  sdgsdg"/>
        <FaqCard />
        <FaqCard question = "Test" answer = "Test"/>
        <FaqCard />
        <FaqCard />
      </FaqSection>
    </GlobalStyles>
  )
}

export default Faq
