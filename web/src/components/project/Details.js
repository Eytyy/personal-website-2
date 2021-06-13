import React from "react"
import Media from "../media/media"
import PortableText from "../PortableText"
import {
  MainTitle,
  ProjecDescriptionWrapper,
  ProjecMediaWrapper,
  ProjectDetailsWrapper,
} from "./styles"

const ProjectDetails = ({
  title,
  description,
  media,
  assetId,
  isDescriptionVisible,
}) => {
  const asset = media?.find(({ _key }) => _key === assetId)
  if (!asset && !isDescriptionVisible) return null

  return (
    <ProjectDetailsWrapper>
      {isDescriptionVisible && description ? (
        <ProjecDescriptionWrapper>
          <MainTitle>{title}</MainTitle>
          <PortableText blocks={description} />
        </ProjecDescriptionWrapper>
      ) : (
        <ProjecMediaWrapper>
          <Media {...asset} />
        </ProjecMediaWrapper>
      )}
    </ProjectDetailsWrapper>
  )
}

export default ProjectDetails
