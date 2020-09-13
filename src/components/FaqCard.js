import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import styled from "@emotion/styled"

function FaqCard(props) {
  const Card = styled(animated.div)`
    background-color: ${props => (props.front ? "hotpink" : "turquoise")};
    font-size: 22px;
    font-weight: bold;
    color: white;
  `

  const [flipped, setFlipped] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px), rotateX(${flipped ? 180 : 0})deg`,
  })
  return (
    <div onClick={() => setFlipped(!flipped)}>
      <Card
        front
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        {props.question}
      </Card>
      <Card
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
        }}
      >
        {props.answer}
      </Card>
    </div>
  )
}

export default FaqCard
