import styled from "@emotion/styled"
import React from "react"

const ButtonLarge = styled.button`
  border: solid 3px transparent;
  border-radius: 100rem;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(101deg, #78e4ff, #ff48fa);
  background-origin: border-box;
  background-clip: content-box, border-box;
  padding: 0.5rem 3rem;
  box-shadow: 2px 1000px 1px #111 inset;
  color: white;
  font-family: inherit;

  & :hover {
    animation: pulse 3s;
    box-shadow: 0 0 0 2em rgba(#fff, 0);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--gradient);
    }
  }
`

const ButtonSmall = styled(ButtonLarge)`
  padding: 0.3rem 1rem;
`

function CalltoActionButton(props) {
  if (props.size === "small") {
    return <ButtonSmall>{props.children}</ButtonSmall>
  } else {
    return <ButtonLarge>{props.children}</ButtonLarge>
  }
}

export default CalltoActionButton
