/* eslint-disable jsx-a11y/media-has-caption */
import React from "react"
import { useState, useRef, useEffect } from "react"

import {
  VideoWrapper,
  VideoControls,
  BottomControls,
  VideoMain,
  PlayButton,
} from "./video.styles"
import VideoLoader from "./VideoLoader"
import { MdPlayArrow, MdPause, MdVolumeOff, MdVolumeUp } from "react-icons/md"
import { MediaButton } from "./media.styles"

const Video = ({ video, hideControls, autoplay = false, active = false }) => {
  const { file } = video
  const videoElement = useRef(null)
  const [state, setState] = useState({
    playing: false,
    loading: false,
    muted: false,
  })

  function safelySetState(changes) {
    setState(state => ({
      ...state,
      ...changes,
    }))
  }

  const play = () => {
    videoElement.current.play()
    safelySetState({
      playing: true,
    })
  }

  const pause = () => {
    videoElement.current.pause()
    safelySetState({
      playing: false,
    })
  }

  const onComplete = () => {
    safelySetState({
      playing: false,
    })
    videoElement.current.currentTime = 0
  }

  const showLoading = () => {
    safelySetState({
      loading: true,
    })
  }

  const hideLoading = () => {
    safelySetState({
      loading: false,
    })
  }

  const onPlaying = () => {
    safelySetState({
      playing: true,
      loading: state.loading ? false : state.loading,
    })
  }

  const onPaused = () => {
    safelySetState({
      playing: false,
    })
  }

  const toggleSound = () => {
    const isMuted = videoElement.current.muted
    videoElement.current.muted = !isMuted
    safelySetState({
      muted: !isMuted,
    })
  }

  const ToggleVideo = () => (state.playing ? pause() : play())

  useEffect(() => {
    const video = videoElement.current
    video.addEventListener("ended", onComplete)
    video.addEventListener("waiting", showLoading)
    video.addEventListener("loadedmetadata", hideLoading)
    video.addEventListener("playing", onPlaying)
    video.addEventListener("play", onPlaying)
    video.addEventListener("pause", onPaused)

    if (video.muted) {
      safelySetState({
        muted: true,
      })
    }

    return function cleanup() {
      video.removeEventListener("ended", onComplete)
      video.removeEventListener("waiting", showLoading)
      video.removeEventListener("loadedmetadata", hideLoading)
      video.removeEventListener("playing", onPlaying)
      video.removeEventListener("play", onPlaying)
      video.removeEventListener("pause", onPaused)
    }
  }, [])

  useEffect(() => {
    if (!active && state.playing) {
      pause()
    }
  }, [active])

  const { playing, loading, muted } = state
  return (
    <VideoWrapper>
      <VideoMain>
        {autoplay ? (
          <video
            playsInline
            loop
            muted
            autoPlay
            ref={videoElement}
            preload="auto"
            src={file.asset.url}
            className="video"
          />
        ) : (
          <video
            playsInline
            ref={videoElement}
            preload="auto"
            src={file.asset.url}
            className="video"
          />
        )}

        {loading ? (
          <VideoLoader></VideoLoader>
        ) : hideControls ? null : (
          <VideoControls>
            <div className="video-btn" onClick={ToggleVideo}>
              {!playing && (
                <PlayButton>
                  <MdPlayArrow color="#FFF" />
                </PlayButton>
              )}
            </div>
          </VideoControls>
        )}
      </VideoMain>
      {!hideControls && (
        <BottomControls playing={playing}>
          <div onClick={ToggleVideo}>
            <MediaButton>
              <MdPause color="#FFF" />
            </MediaButton>
          </div>
          <div onClick={toggleSound} className="volume">
            {muted ? (
              <MediaButton>
                <MdVolumeUp color="#FFF" />
              </MediaButton>
            ) : (
              <MediaButton>
                <MdVolumeOff color="#FFF" />
              </MediaButton>
            )}
          </div>
        </BottomControls>
      )}
    </VideoWrapper>
  )
}

Video.propTypes = {}

export default Video
