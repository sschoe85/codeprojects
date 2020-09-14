import React from "react"
import { Global, css } from "@emotion/core"

export default function GlobalStyles({ children }) {
  return (
    <div>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Finger+Paint&display=swap");
          @import url("https://fonts.googleapis.com/css2?family=Solway:wght@300;400;500;700;800&display=swap");
          *,
          *:before,
          *:after {
            box-sizing: border-box;
            padding: 0;
            margin: 5px;
          }
          html {
            background: #111;
            color: #fff;
            font-family: "Solway", serif;
            
            
          }
          h1,
          h2,
          h3 {
            font-family: "Finger Paint", cursive;
            
          }
          
        `}
      />
      {children}
    </div>
  )
}
