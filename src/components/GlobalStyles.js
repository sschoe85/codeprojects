import React from "react"
import { Global, css } from "@emotion/core"

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Solway:wght@400&family=Finger+Paint&display=swap");

        :root {
          --gradient: linear-gradient(101deg, #78e4ff, #ff48fa);
          --gradientSecondary: linear-gradient(to right, #f7ff00, #db36a4);
        }
        *,
        *:before,
        *:after {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
        html {
          background: #111;
          color: #fff;
          font-family: "Solway", serif;
          scroll-behavior: smooth;
        }

        h1,
        h2,
        h3,
        h4 {
          font-family: "Finger Paint", cursive;
          text-align: center;
        }
        p {
          text-align: justify;
          margin: 1.8rem;
          font-size: 1.3rem;
          overflow-x: auto;
        }
        li {
          margin: 1rem;
          font-size: 1.1rem;
        }
        section {
          margin: 3rem 0rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
      `}
    />
  )
}
