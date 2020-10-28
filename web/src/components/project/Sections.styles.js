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
  grid-column: 1 / span 6;
`

const projectSection = css`
  margin-bottom: ${spacing.small};
  ${mq.tablet} {
    margin-bottom: 0;
  }
`

export const ProjectSectionText = styled(Body)`
  ${projectSection}
  grid-column: ${({ layout }) =>
    layout === "full" ? "auto / span 6" : "auto / span 2"}; ;
    
  text-align: ${({ layout }) => (layout === "full" ? "center" : "left")};
  font-size: ${({ layout }) => (layout === "full" ? "1.6rem" : "1.1rem")};

  h2 {
    margin-bottom: 0.5em;
    font-size: ${({ layout }) => (layout === "full" ? "2.8rem" : "1.8rem")};
  }

  ${mq.bigscreen} {
    font-size: ${({ layout }) => (layout === "full" ? "2rem" : "1.3rem")};
    h2 {
      font-size: ${({ layout }) => (layout === "full" ? "3.2rem" : "2.2rem")};
    }
  }
`

export const ProjectSectionMedia = styled.div`
  ${projectSection}
  ${({ layout }) => getBlockStyles(layout)}
`

export const ProjectSectionHeadline = styled(H2)`
  margin-bottom: 0.5em;
  font-size: 1.8rem;

  ${mq.bigscreen} {
    font-size: 2.2rem;
  }
`
