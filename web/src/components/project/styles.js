import styled from "@emotion/styled"
import { at, breakpoints } from "../../styles/utils"

export const ProjectHeader = styled.header`
  margin-bottom: 30px;
  grid-column: auto / span 2;
  ${at(breakpoints.tablet)} {
    margin-bottom: 0px;
  }
`

export const ProjectElement = styled.a``

export const MainTitle = styled.h2`
  text-transform: lowercase;
  letter-spacing: 0.035em;
  font-size: 24px;
  padding: ${({ isDescriptionVisible }) =>
    isDescriptionVisible ? "2px 0px 0px 0px" : " 2px 52px 0px"};
  ${at(breakpoints.tablet)} {
    padding: 8px 0px 0px 0px;
  }
`

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
      : "10px 0px 62px"};
  top: 0px;
  left: 0px;
  z-index: 10;
  overflow-y: scroll;
  overflow-x: hidden;

  display: grid;
  grid-template-rows: min-content auto;
  grid-gap: 20px;

  background: #fff;
  font-size: 20px;

  ${at(breakpoints.tablet)} {
    font-size: 52px;
    left: 85px;
    height: ${({ isDescriptionVisible }) =>
      isDescriptionVisible
        ? "var(--app-height)"
        : " calc(var(--app-height) - 85px)"};
    top: 0px;
    padding: ${({ isDescriptionVisible }) =>
      isDescriptionVisible ? "20px 0px 0px" : "20px 0px 85px"};
    margin-bottom: 0px;
    width: calc(100vw - 170px);

    h2 {
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

  h2 {
    font-size: 0.75em;
  }

  ${at(breakpoints.tablet)} {
    h2 {
      font-size: 0.5em;
    }
  }
`

export const ProjecMediaWrapper = styled(Wrapper)`
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

export const Caption = styled.div`
  position: fixed;
  bottom: 10px;
  text-transform: lowercase;
  letter-spacing: 0.035em;
  font-size: 24px;
  min-height: 32px;
  display: flex;
  align-items: center;
  left: ${({ type }) => (type === "videoEmbed" ? "52px" : "10px")};
  ${at(breakpoints.tablet)} {
    bottom: 20px;
    height: 42px;
    left: 82px;
    right: 82px;
  }
`
