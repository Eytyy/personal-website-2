import React from "react"
import Media from "../media/media"
import PortableText from "../PortableText"
import {
  MainTitle,
  ProjecDescriptionWrapper,
  ProjecDescriptionInner,
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
  console.log(assetId)
  if (!asset && !isDescriptionVisible) return null

  return (
    <ProjectDetailsWrapper isDescriptionVisible={isDescriptionVisible}>
      {isDescriptionVisible && description ? (
        <ProjecDescriptionWrapper>
          <ProjecDescriptionInner>
            <MainTitle>{title}</MainTitle>
            <PortableText blocks={description} />
          </ProjecDescriptionInner>
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
