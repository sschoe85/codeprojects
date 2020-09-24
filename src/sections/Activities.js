import styled from "@emotion/styled"
import React from "react"
import SectionHeader from "../components/SectionHeader"
import Faq from "../pages/faq"

function Activities(props) {
  const SectionActivities = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;`
  
  return (
    <SectionActivities>
      <SectionHeader>Activities</SectionHeader>
      <Faq></Faq>
    </SectionActivities>
  )
}

export default Activities
