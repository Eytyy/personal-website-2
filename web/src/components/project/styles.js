import styled from "@emotion/styled"
import { headline } from "../../styles/typography"
import { mq } from "../../styles/utils"

export const MainTitle = styled.h1`
  font-size: 1rem;
  margin: 0 0 0.1em;
  text-transform: lowercase;
  text-align: center;
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
  height: calc(100vh - 105px);
  width: calc(100vw - 170px);
  background: #fff;
  top: 20px;
  left: 85px;
  z-index: 10;
`

export const Wrapper = styled.div`
  height: 100%;
  position: relative;
`

export const ProjecDescriptionWrapper = styled(Wrapper)``

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
