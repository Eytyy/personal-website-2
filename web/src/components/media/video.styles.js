import styled from "@emotion/styled"
import { at, breakpoints } from "../../styles/utils"
import { css } from "@emotion/core"

export const MediaButton = styled.button`
  background: none;
  appearance: none;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  color: blue;
  border: 3px solid blue;
  box-shadow: 0;
  outline: none;
  display: block;
  cursor: pointer;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
`

export const VideoWrapper = styled.div`
  position: relative;
  height: 100%;
  video {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`

export const VideoCaption = styled.div`
  display: inline-block;
  color: #fff;
  padding: 8px;
`

export const VideoControls = styled.div`
  position: fixed;
  left: 10px;
  right: 0;
  bottom: 10px;
  z-index: 100;
`

const showBottomControls = css`
  height: auto;
  opacity: 1;
  margin-top: 40px;
`
const hideBottomControls = css`
  margin-top: 0;
  height: 0;
  overflow: hidden;
  opacity: 0;
`

export const BottomControls = styled.div`
  transition: 1s;
  ${props => (props.playing ? showBottomControls : hideBottomControls)}
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  padding: 0px 40px;

  ${at(breakpoints.tablet)} {
    padding: 0;
  }
`

export const PlayButton = styled(MediaButton)`
  width: 32px;
  height: 32px;
  font-size: 22px;
  z-index: 2;
  ${at(breakpoints.tablet)} {
    width: 60px;
    height: 60px;
    font-size: 42px;
  }
`

export const VideoThumbnail = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  ${PlayButton} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
