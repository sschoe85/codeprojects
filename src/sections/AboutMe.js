import React from "react"
import SectionHeader from "../components/SectionHeader"
import Video from "../components/Video"

function AboutMe(props) {
  return (
    <section>
      <SectionHeader>About Me</SectionHeader>
      <Video
        title="About Me"
        width="300px"
        height="300px"
        videoSrcURL="https://www.youtube-nocookie.com/embed/Cz7Cy2Ed_tk"
      ></Video>
    </section>
  )
}
export default AboutMe
