import styled from "@emotion/styled"
import React from "react"
import CardSection from "./CardSection"

function Activities(props) {
  const SectionActivities = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `

  return (
    <SectionActivities>
      <CardSection section="Activities" />
    </SectionActivities>
  )
}

export default Activities
