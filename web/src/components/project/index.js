import React from "react"
import Figure from "../media/figure"
import VideoThumb from "../media/videoThumb"

import { ProjectElement } from "./styles"

const Project = props => {
  const { media, setActive } = props

  function setActiveProject(asset_id) {
    setActive({ ...props }, asset_id)
  }

  return (
    media &&
    media.map(({ _type, _key, ...props }) => {
      return (
        <ProjectElement onClick={() => setActiveProject(_key)} key={_key}>
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
