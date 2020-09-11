import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useSpring, animated } from "react-spring"
import styled from "@emotion/styled"

function FaqCard(props) {
  const CardFront = styled(animated.div)`
    background-color: black;
  `
  const CardBack = styled(animated.div)`
    background-color: green;
  `

  const [flipped, setFlipped] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px), rotateX(${flipped ? 180 : 0})deg`,
  })
  return (
    <div onClick={() => setFlipped(!flipped)}>
      <CardFront
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        Hallo
      </CardFront>
      <CardBack
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
        }}
      >
        Tschüss
      </CardBack>
    </div>
  )
}

export default FaqCard
