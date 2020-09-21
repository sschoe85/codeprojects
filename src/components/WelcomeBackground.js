import { css } from "@emotion/core"
import styled from "@emotion/styled"
import React from "react"
import Particles from "react-tsparticles"
import Button from "./Button"

function WelcomeBackground(props) {
  const ParticlesContainer = styled.div`
    width: 100vw;
    height: 90vh;
    position: relative;
    & > * {
      position: absolute;
    }
    & > h1 {
      top: 30%;
      left: 30%;
    }
    & > button {
      top: 50%;
      left: 40%;
      z-index: 2;
    }
  `

  return (
    <ParticlesContainer>
      <h1>My little coding school</h1>
      <Button>Hallo</Button>
      <Particles
        width="100vw"
        height="100vh"
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 208, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 5 },
            },
            opacity: {
              value: 1,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 600 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              grab: {
                distance: 191.80819180819182,
                line_linked: { opacity: 1 },
              },
              bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3,
              },
              repulse: { distance: 695.3046953046953, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        }}
      />
    </ParticlesContainer>
  )
}

export default WelcomeBackground
