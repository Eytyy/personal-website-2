import styled from "@emotion/styled"

export const VideoWrapper = styled.div`
  position: relative;

  video {
    width: 100%;
    height: auto;
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
  cursor: pointer;
  font-size: 10rem;

  .video-btn {
    display: block;
    font-size: 10rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const BottomControls = styled.div`
  font-size: 5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
`
