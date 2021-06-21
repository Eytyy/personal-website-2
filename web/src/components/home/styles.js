import styled from "@emotion/styled"

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
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
`
