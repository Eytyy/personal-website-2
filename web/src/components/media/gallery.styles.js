import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { headline } from "../../styles/typography"

export const GalleryWrapper = styled.div`
  position: relative;
`

export const Slides = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-top: 56.25%; /* ${(100 * 9) / 16} */
`

export const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: opacity 500ms ease-in-out;
  overflow: hidden;
  &.active {
    opacity: 1;
    z-index: 1;
  }
  &.inactive {
    opacity: 0;
    z-index: 0;
    overflow: hidden;
  }
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

export const GalleryNextBtn = styled.div`
  ${GalleryBtnDefaultStyles}
  right: 0px;
  transform: translate(0%, -50%);
  :hover {
    transform: scale(1.2) translate(0, -50%);
  }
`

export const GalleryPrevBtn = styled.div`
  ${GalleryBtnDefaultStyles}
  left: 0;
  transform: translate(0, -50%);
  :hover {
    transform: scale(1.2) translate(0, -50%);
  }
`
