import styled from "@emotion/styled"
import { at, breakpoints } from "../../styles/utils"
import { css } from "@emotion/core"
import { MediaButton } from "./media.styles"

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
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  .video-btn {
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
`
