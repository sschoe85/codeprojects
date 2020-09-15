import React from "react"
import { Global, css } from "@emotion/core"

export default function GlobalStyles({ children }) {
  return (

    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Solway:wght@300;400;500;700;800&family=Finger+Paint&display=swap");

        :root {
          --gradient: linear-gradient(101deg, #78e4ff, #ff48fa);
          --gradientSecondary: linear-gradient(to right, #f7ff00, #db36a4);
        }
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

  )
}
