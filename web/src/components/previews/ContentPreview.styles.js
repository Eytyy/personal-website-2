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

export const DecativatedLabel = styled.span`
  padding: 4px;
  display: inline-block;
`

const mediumPreviewStyles = css`
  grid-column-end: span 2;
  .media {
    margin-bottom: 1em;
  }
`

const bigPreviewStyles = css`
  grid-column-end: span 3;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  .media {
    grid-column: 1 / 4;
    margin-bottom: 1em;
  }
  .overview {
    grid-column: 4 / 6;
  }
`

export const previewMediaStyles = css`
  margin-bottom: 40px;
  .media {
    margin-bottom: 1em;
  }
`

export const DetailedPreview = styled.div`
  ${previewMediaStyles}
`

export const SimplePreview = styled.div`
  ${previewMediaStyles}
`

export const InProgressPreview = styled.div`
  ${previewMediaStyles}
`

export const PreviewLink = styled.div`
  ${previewMediaStyles}
`

export const QuickView = styled.div`
  .role {
    margin-bottom: 1em;
  }
  .collaborators {
    margin-bottom: 1em;
  }
`
