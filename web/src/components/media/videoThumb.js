import React from "react"
import { MdPlayArrow } from "react-icons/md"
import Figure from "./figure"
import { PlayButton, VideoThumbnail } from "./video.styles"

const VideoThumb = ({ posterFrame }) => {
  return (
    <VideoThumbnail>
      {posterFrame && <Figure image={posterFrame} />}
      <PlayButton>
        <MdPlayArrow />
      </PlayButton>
    </VideoThumbnail>
  )
}

export default VideoThumb
