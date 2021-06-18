import css from "@emotion/css"
import styled from "@emotion/styled"
import { fonts } from "../../styles/vars"

export const PresentationWrapper = styled.div`
  height: 100vh;
  width: 100%;
  color: blue;
  .svg_wrapper {
    height: 100%;
    width: 100%;
  }
  img,
  svg {
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: center;
  }
`
export const PresentationPageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

export const HeadlinePage = styled(PresentationPageWrapper)`
  background: blue;
  color: #fff;
`

export const PresentationInnerText = styled.div`
  padding: 0px 20px 20px;
  position: relative;
  height: 100%;
  width: 900px;
  margin: 0 auto;
  font-size: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #000;
`

export const PresentationHeadline = styled.div`
  padding: 0px 20px 20px;
  position: relative;
  height: 100%;
  width: 900px;
  margin: 0 auto;
  font-size: 62px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin: 0 auto;
  }
`

export const Deck = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #fff;
  opacity: ${({ active }) => (active ? "1" : "0")};
  z-index: ${({ active }) => (active ? "1" : "0")};
`

export const dash = ({ color }) => css`
  content: "";
  width: 50px;
  height: 5px;
  background: ${color === "invert" ? "white" : "blue"};
  display: block;
`

export const PageTitle = styled.h1`
  position: relative;
  z-index: 2;
  font-size: 1em;
  text-align: center;
`

export const PresentationHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .heading,
  .caption {
    font-family: ${fonts.bold};
    letter-spacing: 0.03em;
  }
  .caption {
    color: black;
  }
  .subHeading,
  .heading {
    font-size: 36px;
    &:after {
      margin-top: 10px;
      ${dash};
    }
  }
`
export const PresentationFooter = styled.footer`
  font-size: 62px;
  .scope {
    font-size: 36px;
  }
  &:before {
    ${dash};
    margin-bottom: 10px;
  }
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  z-index: 2;
`
