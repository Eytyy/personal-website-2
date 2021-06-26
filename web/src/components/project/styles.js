import styled from "@emotion/styled"
import { Link } from "gatsby"
import { at, breakpoints } from "../../styles/utils"

export const MainTitle = styled.h1`
  margin: 0.25em 0 1em;
  text-transform: lowercase;
`

export const ProjectHeader = styled.header`
  margin-bottom: 30px;
  grid-column: auto / span 2;
  ${at(breakpoints.tablet)} {
    margin-bottom: 0px;
  }
`

export const ProjectElement = styled.a``

export const ProjectDetailsWrapper = styled.article`
  position: fixed;
  height: var(--app-height);
  width: ${({ isDescriptionVisible }) =>
    isDescriptionVisible ? "100%" : "100vw"};
  padding: ${({ isDescriptionVisible, type }) =>
    type === "SanityVideoEmbed"
      ? "52px"
      : isDescriptionVisible
      ? "10px 52px 0px"
      : "0px"};
  top: 0px;
  left: 0px;
  z-index: 10;
  overflow-y: scroll;
  overflow-x: hidden;

  background: ${({ isDescriptionVisible }) =>
    isDescriptionVisible
      ? `rgba(255, 255, 255, 0.95)`
      : `rgba(255, 255, 255, 0.25)`};
  font-size: 20px;

  ${MainTitle}, h2 {
    font-size: 0.75em;
  }
  ${at(breakpoints.tablet)} {
    font-size: 52px;
    left: 85px;
    height: ${({ isDescriptionVisible }) =>
      isDescriptionVisible
        ? "var(--app-height)"
        : " calc(var(--app-height) - 170px)"};
    top: ${({ isDescriptionVisible }) =>
      isDescriptionVisible ? "0px" : "85px"};
    padding: ${({ isDescriptionVisible }) =>
      isDescriptionVisible ? "20px 0px" : "0px 0px"};
    margin-bottom: 0px;
    width: calc(100vw - 170px);

    ${MainTitle}, h2 {
      font-size: 0.5em;
    }
  }
`

export const Wrapper = styled.div`
  height: 100%;
  position: relative;
`

export const ProjecDescriptionWrapper = styled(Wrapper)`
  margin-right: -60px;
  overflow-x: hidden;
`
export const ProjecDescriptionInner = styled.div`
  padding-right: 60px;
  padding-bottom: 52px;
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
