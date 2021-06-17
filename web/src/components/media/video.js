/* eslint-disable jsx-a11y/media-has-caption */
import React from "react"
import { useState, useRef, useEffect } from "react"
import { MdPause, MdPlayArrow } from "react-icons/md"

import { VideoWrapper, PlayButton } from "./video.styles"

const Video = ({ video, active = false }) => {
  const { file } = video
  const videoElement = useRef(null)
  const [state, setState] = useState({
    playing: false,
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

  const ToggleVideo = () => (state.playing ? pause() : play())

  useEffect(() => {
    const video = videoElement.current
    if (video.muted) {
      safelySetState({
        muted: true,
      })
    }
  }, [])

  useEffect(() => {
    if (!active && state.playing) {
      pause()
    }
  }, [active])

  const { playing } = state
  return (
    <VideoWrapper>
      {playing ? (
        <PlayButton onClick={ToggleVideo}>
          <MdPause />
        </PlayButton>
      ) : (
        <PlayButton onClick={ToggleVideo}>
          <MdPlayArrow />
        </PlayButton>
      )}
      <video
        onEnded={onComplete}
        onPlaying={onPlaying}
        onPlay={onPlaying}
        onPause={onPaused}
        playsInline
        ref={videoElement}
        preload="auto"
        src={file.asset.url}
        className="video"
      />
    </VideoWrapper>
  )
}

Video.propTypes = {}

export default Video
