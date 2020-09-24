import React from "react"

const Video = ({ videoSrcURL, width, height, title }) => (
  <iframe
  title={title}
    width={width}
    height={height}
    src={videoSrcURL}
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    frameBorder="0"
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowFullScreen
  />
)
export default Video

