import React from "react"
import styled from "@emotion/styled"
import SectionHeader from "../components/SectionHeader"
import Card from "../components/Card"

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: auto;
  & ::-webkit-scrollbar {
    width: 10px;
  }
  & ::-webkit-scrollbar-track {
    background: #111;
  }
  & ::-webkit-scrollbar-thumb {
    background: white;
  }
`
const CardsContainer = styled.div`
  display: flex;
`

function Events(props) {
  return (
    <SectionContainer>
      <SectionHeader>Events</SectionHeader>
      <CardsContainer>
        <Card
          title="test"
          description="dhdhshsdhsdhdlkclklksdjflk jljlkljlöjölöjljö öljlöjöljlöjlöljljljlöj ccnweknjefncöafäjäansd ljöjöljöjlöjö-jkljöjlökjlö"
        ></Card>
        <Card
          title="test"
          description="dhdhshsdhsdhdlkclklksdjflk jljlkljlöjölöjljö öljlöjöljlöjlöljljljlöj ccnweknjefncöafäjäansd ljöjöljöjlöjö-jkljöjlökjlö"
        ></Card>
        <Card
          title="test"
          description="dhdhshsdhsdhdlkclklksdjflk jljlkljlöjölöjljö öljlöjöljlöjlöljljljlöj ccnweknjefncöafäjäansd ljöjöljöjlöjö-jkljöjlökjlö"
        ></Card>
        <Card
          title="test"
          description="dhdhshsdhsdhdlkclklksdjflk jljlkljlöjölöjljö öljlöjöljlöjlöljljljlöj ccnweknjefncöafäjäansd ljöjöljöjlöjö-jkljöjlökjlö"
        ></Card>
        <Card
          title="test"
          description="dhdhshsdhsdhdlkclklksdjflk jljlkljlöjölöjljö öljlöjöljlöjlöljljljlöj ccnweknjefncöafäjäansd ljöjöljöjlöjö-jkljöjlökjlö"
        ></Card>
        <Card
          title="test"
          description="dhdhshsdhsdhdlkclklksdjflk jljlkljlöjölöjljö öljlöjöljlöjlöljljljlöj ccnweknjefncöafäjäansd ljöjöljöjlöjö-jkljöjlökjlö"
        ></Card>
        <Card
          title="test"
          description="dhdhshsdhsdhdlkclklksdjflk jljlkljlöjölöjljö öljlöjöljlöjlöljljljlöj ccnweknjefncöafäjäansd ljöjöljöjlöjö-jkljöjlökjlö"
        ></Card>
      </CardsContainer>
    </SectionContainer>
  )
}

export default Events
