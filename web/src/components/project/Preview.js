import { navigate } from "gatsby"
import React from "react"
import { useSiteContext } from "../../siteContext"
import Figure from "../media/figure"
import VideoThumb from "../media/videoThumb"

import { ProjectElement } from "./styles"

const ProjectPreview = props => {
  const { media, slug, id } = props

  const { setActive } = useSiteContext()

  const handleClick = (event, assetID, assetIndex) => {
    event.preventDefault()
    setActive({ projectID: id, assetID, assetIndex })

    navigate(`/work/${slug?.current}`)
  }

  return media?.map(({ _type, _key, ...props }, index) => {
    return _type !== "contentBlockSimple" ? (
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
    ) : null
  })
}

export default ProjectPreview
