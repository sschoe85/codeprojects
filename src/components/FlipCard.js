import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import styled from "@emotion/styled"

const Container = styled.div`
  text-align: center;
  position: relative;
  height: 300px;
  min-width: 300px;
`
const Front = styled(animated.div)`
  display: flex;
  flex-direction: column;
  background-image: var(--gradient);
  cursor: pointer;
  color: white;
  padding: 1rem;
  position: absolute;
  width: 100%;
  height: 100%;
`
const Back = styled(animated.div)`
  display: flex;
  flex-direction: column;
  background-image: var(--gradientSecondary);
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 1rem;
  color: black;
  overflow-y: scroll;
  li {
    text-align: left;
  }
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

function FlipCard({ front, back }) {
  const [flipped, setFlipped] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px), rotateX(${flipped ? 180 : 0})deg`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <Container onClick={() => setFlipped(!flipped)}>
      <Front style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
        <div dangerouslySetInnerHTML={front}></div>
      </Front>
      <Back
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
        }}
      >
        <div dangerouslySetInnerHTML={back}></div>
      </Back>
    </Container>
  )
}

export default FlipCard
