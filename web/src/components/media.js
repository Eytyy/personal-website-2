import React from "react"
import Gallery from "./gallery"
import Video from "./video"
import Figure from "./figure"

const Media = ({ data }) => {
  if (data.length === 0) {
    return null
  }
  if (data.length > 1) {
    return <Gallery slides={data} />
  }
  const singleAsset = data[0]
  return singleAsset.__typename === "SanityVideoEmbed" ? (
    <Video {...singleAsset} />
  ) : (
    <Figure image={singleAsset} />
  )
}

export default Media
