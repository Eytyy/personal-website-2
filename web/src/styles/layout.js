import styled from "@emotion/styled"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
`

export const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

export const PageHeader = styled.header`
  margin-bottom: 2em;
`
