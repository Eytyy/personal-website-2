import React from "react"
import { buildImageObj } from "../lib/helpers"
import { imageUrlFor } from "../lib/image-url"

const Figure = ({ image, width = 1200 }) => {
  const maintainAspectRatio = false
  const aspectRatio = image.asset.metadata.dimensions.aspectRatio
  const defaultRatio = 9 / 16

  const imgUrl =
    image &&
    imageUrlFor(buildImageObj(image))
      .width(width)
      .height(
        maintainAspectRatio
          ? width / aspectRatio
          : Math.floor(defaultRatio * width)
      )
      .fit("crop")
      .auto("format")
      .url()
  return imgUrl ? <img src={imgUrl} alt={image.alt || ""} /> : <></>
}

export default Figure
