import styled from "@emotion/styled"
//Gets passed a prop LinkTo that leads to the desired section, exists in two different styles based on its props (https://emotion.sh/docs/styled)

import React from "react"

const ButtonSmall = styled(ButtonLarge)``
const ButtonLarge = styled.button``

function CalltoActionButton(size, linkTo) {
  if (props.size === "small") {
    return <ButtonSmall onClick={handleClick}></ButtonSmall>
  } else {
    return <ButtonLarge onClick={handleClick}></ButtonLarge>
  }
}

export default CalltoActionButton
