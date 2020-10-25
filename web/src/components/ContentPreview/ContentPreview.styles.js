import styled from "@emotion/styled"
import { H2 } from "../../styles/typography"
import { css } from "@emotion/core"
import { mq } from "../../styles/utils"

export const BigTitle = styled(H2)`
  font-size: 3.2em;
`

export const SmallTitle = styled(H2)`
  font-size: 1.2rem;
  ${mq.desktop} {
    font-size: 1.4rem;
  }
  ${mq.bigscreen} {
    font-size: 1.6rem;
  }
`

export const ExternalLinkLabel = styled.div`
  font-size: 1em;
  margin-top: 1em;
  text-decoration: none;
`

export const previewMediaStyles = css`
  margin-bottom: 40px;
  .media {
    margin-bottom: 1em;
  }
`

export const Preview = styled.div`
  ${previewMediaStyles}
  a {
    height: 100%;
  }
`

export const SimplePreview = styled.div`
  ${previewMediaStyles}
  cursor: pointer;
`

export const InProgressPreview = styled.div`
  ${previewMediaStyles}
  position: relative;
  .content {
    opacity: 0.2;
  }
`

export const PreviewLink = styled.div`
  ${previewMediaStyles}
`

export const ProjectInfo = styled.div`
  div {
    margin-bottom: 0.5em;
  }
`
