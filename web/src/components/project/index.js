import React, { useEffect } from "react"
import { useSiteContext } from "../../siteContext"
import Media from "../media/media"
import PortableText from "../PortableText"
import {
  MainTitle,
  ProjecDescriptionWrapper,
  ProjecDescriptionInner,
  ProjecMediaWrapper,
  ProjectDetailsWrapper,
} from "./styles"

const Project = props => {
  const { title, description, media, isDescriptionVisible } = props
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
      {state.isDescriptionVisible && description ? (
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

export default Project
