import styled from "@emotion/styled"
import { mq } from "../../styles/utils"

export const MainTitle = styled.h1`
  margin: 0.25em 0 1em;
  text-transform: lowercase;
`

export const ProjectHeader = styled.header`
  margin-bottom: 30px;
  grid-column: auto / span 2;
  ${mq.tablet} {
    margin-bottom: 0px;
  }
`

export const ProjectElement = styled.div``

export const ProjectDetailsWrapper = styled.article`
  position: fixed;
  height: ${({ isDescriptionVisible }) =>
    isDescriptionVisible ? " calc(100vh)" : " calc(100vh - 170px)"};
  width: calc(100vw - 170px);
  background: ${({ isDescriptionVisible }) =>
    isDescriptionVisible
      ? `rgba(255, 255, 255, 0.95)`
      : `rgba(255, 255, 255, 0.8)`};
  transition: all 200ms linear;
  top: ${({ isDescriptionVisible }) => (isDescriptionVisible ? "0px" : "85px")};
  padding: ${({ isDescriptionVisible }) =>
    isDescriptionVisible ? "20px 0px" : "0px 0px"};
  left: 85px;
  z-index: ${({ isDescriptionVisible }) =>
    isDescriptionVisible ? "100" : "10"};
  font-size: 52px;
  overflow-y: scroll;
  overflow-x: hidden;
  ${MainTitle}, h2 {
    font-size: 0.5em;
  }
`

export const Wrapper = styled.div`
  height: 100%;
  position: relative;
`

export const ProjecDescriptionWrapper = styled(Wrapper)`
  margin-right: -40px;
  overflow-x: hidden;
`
export const ProjecDescriptionInner = styled.div`
  padding-right: 40px;
`

export const ProjecMediaWrapper = styled(Wrapper)`
}
  img,
  video {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    display: block;
    width: 100%;
    object-fit: contain;
  }
`
