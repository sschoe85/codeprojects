import styled from "@emotion/styled"
import React from "react"
import CardSection from "./CardSection"

const SectionActivities = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
function Activities(props) {
  return (
    <SectionActivities id="Activities">
      <CardSection section="Activities" />
    </SectionActivities>
  )
}

export default Activities
