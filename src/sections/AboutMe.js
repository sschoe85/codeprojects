import styled from "@emotion/styled"
import React from "react"
import SectionHeader from "../components/SectionHeader"
import Video from "../components/Video"

function AboutMe(props) {
  const SectionAboutMe = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `

  return (
    <SectionAboutMe>
      <SectionHeader>About Me</SectionHeader>
      <Video
        title="About Me"
        width="300px"
        height="300px"
        videoSrcURL="https://www.youtube-nocookie.com/embed/Cz7Cy2Ed_tk"
      ></Video>
    </SectionAboutMe>
  )
}
export default AboutMe
