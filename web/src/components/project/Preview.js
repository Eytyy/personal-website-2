import { navigate } from "gatsby"
import React from "react"
import { useSiteContext } from "../../siteContext"
import Figure from "../media/figure"
import VideoThumb from "../media/videoThumb"

import { ProjectElement } from "./styles"

const ProjectPreview = props => {
  const { media, slug } = props

  const { setActive } = useSiteContext()

  const handleClick = (event, asset_id, asset_index) => {
    event.preventDefault()
    setActive({ ...props }, asset_id, asset_index)
    navigate(`/work/${slug?.current}`)
  }

  const mediaItems = media.filter(({ _type }) => _type !== "contentBlockSimple")

  return (
    mediaItems &&
    mediaItems.map(({ _type, _key, ...props }, index) => {
      return (
        <ProjectElement
          href={`/work/${slug?.current}`}
          onClick={event => handleClick(event, _key, index)}
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

export default ProjectPreview
