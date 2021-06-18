import React from "react"
import Video from "./video"
import Figure from "./figure"

const Media = ({ _type, ...props }) => {
  if (!_type) {
    return null
  }
  return _type === "figure" || _type === "image" ? (
    <Figure image={props} />
  ) : (
    <Video {...props} />
  )
}

export default Media
