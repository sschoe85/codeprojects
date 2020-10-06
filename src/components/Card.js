import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  position: absolute;
  height: 300px;
  width: 300px;
  top: 15px;
  left: 15px;
  background-color: #111;
  overflow-y: scroll;
`

const Border = styled.div`
  position: relative;
  height: 330px;
  width: 330px;
  background-image: var(--gradient);
  margin: 0rem 1rem;
`

function Card({ title, description }) {
  return (
    <Border>
      <Container>
        <h2>{title}</h2>
        <p>{description}</p>
      </Container>
    </Border>
  )
}

export default Card
