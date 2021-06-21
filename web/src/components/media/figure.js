import React from "react"
import { buildImageObj } from "../../lib/helpers"
import { imageUrlFor } from "../../lib/image-url"

function getImageHeight({ width, image }) {
  const originalAspectRatio =
    image?.asset?.metadata?.dimensions?.aspectRatio || 1
  return Math.floor(width / originalAspectRatio)
}
const Figure = ({ image, width }) => {
  if (!image.asset) return null
  // const height = getImageHeight({ width, image })
  const imgUrl =
    image &&
    imageUrlFor(buildImageObj(image))
      .fit("crop")
      .width(width)
      .auto("format")
      .url()
  return imgUrl ? <img src={imgUrl} alt={image.alt || ""} /> : <></>
}

export default Figure
