import styled from "@emotion/styled"
import React from "react"

const SectionHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const SectionHeaderText = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: calc(1.4rem + 1.5vw);
`

const Line = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 2rem;
  background: var(--gradient);
  width: 60%;
  height: 3px;
`
export default function SectionHeader(props) {
  return (
    <SectionHeaderContainer>
      <SectionHeaderText>
        {props.children}
        <Line></Line>
      </SectionHeaderText>
    </SectionHeaderContainer>
  )
}
