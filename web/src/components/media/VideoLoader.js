import React from "react"
import { Loader } from "./VideoLoader.styles"

const VideoLoader = ({ children, ...props }) => {
  return (
    <Loader {...props}>
      {" "}
      <div className="c c1"></div>
      <div className="c c2"></div>
      <div className="c c3"></div>
      <div className="c c4"></div>
    </Loader>
  )
}

export default VideoLoader
