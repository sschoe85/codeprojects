import React from "react"
import { Global, css } from "@emotion/core"

export default function GlobalStyles() {
  return (

    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Finger+Paint&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Solway:wght@300;400;500;700;800&display=swap");

        :root {
          --gradient: linear-gradient(101deg, #78e4ff, #ff48fa);
          --gradientSecondary: linear-gradient(
            0deg,
            rgba(34, 193, 195, 1) 0%,
            rgba(253, 187, 45, 1) 100%
          );
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
