import React from "react"
import Gallery from "./gallery"
import Video from "./video"
import Figure from "./figure"
import MediaGrid from "./mediaGrid"

const Media = ({ data, displayType = "gallery", ...props }) => {
  if (data.length === 0) {
    return null
  }

  if (data.length > 1) {
    return displayType === "gallery" ? (
      <Gallery slides={data} {...props} />
    ) : (
      <MediaGrid data={data} {...props} />
    )
  }

  const singleAsset = data[0]
  return singleAsset._type === "videoEmbed" ? (
    <Video {...singleAsset} />
  ) : singleAsset.__typename === "SanityVideoEmbed" ? (
    <Video {...singleAsset} />
  ) : (
    <Figure image={singleAsset} />
  )
}

export default Media
