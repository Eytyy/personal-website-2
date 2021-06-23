import styled from "@emotion/styled"
import { at, breakpoints } from "../../styles/utils"

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 200px;
  background: red;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  video {
    object-fit: none;
  }
  ${at(breakpoints.tablet)} {
    grid-template-columns: repeat(4, 1fr);
  }
  ${at(breakpoints.desktop)} {
    grid-template-columns: repeat(6, 1fr);
  }
`
