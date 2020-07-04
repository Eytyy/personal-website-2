import React from "react"
import Figure from "./figure"
import Video from "./video"

const MediaGrid = ({ data }) => {
  return data.map(({ _type, _key, ...props }) =>
    _type === "figure" ? (
      <Figure key={_key} image={props} />
    ) : (
      <Video key={_key} {...props} />
    )
  )
}

export default MediaGrid
