import styled from "@emotion/styled"
import { Grid } from "../../styles/layout"
import { mq, spacing } from "../../styles/utils"
import { H2, Body } from "../../styles/typography"
import { css } from "@emotion/core"

export const ProjectSectionGrid = styled(Grid)`
  ${mq.desktop} {
    grid-template-columns: repeat(5, 1fr);
  }
  ${mq.bigscreen} {
    grid-template-columns: repeat(5, 1fr);
  }
`

function getBlockStyles(layout) {
  switch (layout) {
    case "small":
      return small
    case "big":
      return big
    case "full":
      return full
    default:
      return medium
  }
}

const small = css`
  grid-column: auto / span 1;
`

const medium = css`
  grid-column: auto / span 2;
`

const big = css`
  grid-column: auto / span 3;
`

const full = css`
  grid-column: 1 / span 3;
  grid-row: 1;
`

const projectSection = css`
  margin-bottom: ${spacing.small}px;
  ${mq.tablet} {
    margin-bottom: 0;
  }
`

export const ProjectSectionText = styled(Body)`
  ${projectSection}
  grid-column: auto / span 2;
  h2 {
    margin-bottom: 0.5em;
  }
`

export const ProjectSectionMedia = styled.div`
  ${projectSection}
  ${({ layout }) => getBlockStyles(layout)}
`

export const ProjectSectionHeadline = styled(H2)`
  margin-bottom: 0.5em;
`
