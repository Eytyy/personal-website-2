import React from "react"
import Figure from "../media/figure"
import VideoThumb from "../media/videoThumb"

import { ProjectElement } from "./styles"

const Project = props => {
  const { media, setActive } = props

  function setActiveProject(asset_id, asset_index) {
    setActive({ ...props }, asset_id, asset_index)
  }

  return (
    media &&
    media.map(({ _type, _key, ...props }, index) => {
      return (
        <ProjectElement
          onClick={() => setActiveProject(_key, index)}
          key={_key}
        >
          {_type === "figure" ? (
            <Figure width="400" image={props} />
          ) : (
            <VideoThumb {...props} />
          )}
        </ProjectElement>
      )
    })
  )
}

export default Project
