import styled from "@emotion/styled"
import { mq } from "../../styles/utils"
import { css } from "@emotion/core"

export const VideoWrapper = styled.div`
  video {
    width: 100%;
    height: auto;
  }
`

export const VideoMain = styled.div`
  position: relative;
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

  ${mq.tablet} {
    padding: 0;
  }
`
