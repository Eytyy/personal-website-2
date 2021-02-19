import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { headline } from "../../styles/typography"
import { spacing } from "../../styles/utils"
import { layout } from "../../styles/vars"

export const GalleryWrapper = styled.div`
  position: relative;
`

export const Slides = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  overflow-x: scroll;
`

export const Slide = styled.div`
  flex: 0 0 22%;
  margin: 0 ${layout.gutter_desktop}px 0 0;
`

const GalleryBtnDefaultStyles = () => css`
  ${headline}
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: blue;
  color: #fff;
  box-shadow: 0px 2px 13px -10px #000;
  transition: 0.3s;
  font-size: 1.4rem;
  position: absolute;
  top: 50%;
  cursor: pointer;
  visibility: hidden;
  z-index: 2;
  opacity: 0;
  transition: opacity 200ms linear;

  &.visible {
    opacity: 1;
    visibility: visible;
  }
  :hover {
    transform: scale(1.2);
  }
  transition: 0.3s;
`
