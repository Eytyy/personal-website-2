import React, { useEffect } from "react"
import { useSiteContext } from "../../siteContext"
import Media from "../media/media"
import PortableText from "../PortableText"
import {
  ProjecDescriptionWrapper,
  ProjecDescriptionInner,
  ProjecMediaWrapper,
  ProjectDetailsWrapper,
  Caption,
  MainTitle,
} from "./styles"

const Project = props => {
  const { description, media, title } = props
  const { state, setActive } = useSiteContext()

  const asset =
    media?.find(({ _key }) => _key === state?.activeAssetID) || media?.[0]

  useEffect(() => {
    if (!state?.activeAssetID) {
      setActive({ ...props }, media[0]._id, 0)
    }
  }, [])

  if (!asset && !state?.isDescriptionVisible) {
    return null
  }

  return (
    <ProjectDetailsWrapper
      type={asset._type}
      isDescriptionVisible={state.isDescriptionVisible}
    >
      <MainTitle isDescriptionVisible={state.isDescriptionVisible}>
        {title}
      </MainTitle>
      {state.isDescriptionVisible && description ? (
        <ProjecDescriptionWrapper>
          <ProjecDescriptionInner>
            <PortableText blocks={description} />
          </ProjecDescriptionInner>
        </ProjecDescriptionWrapper>
      ) : (
        <ProjecMediaWrapper>
          <Media {...asset} />
          <Caption type={asset?._type}>
            {`${state?.activeAssetIndex + 1} of ${media?.length - 1}: ${
              asset.alt || "untitled"
            }`}
          </Caption>
        </ProjecMediaWrapper>
      )}
    </ProjectDetailsWrapper>
  )
}

export default Project
