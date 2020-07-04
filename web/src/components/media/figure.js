import React from "react"
import { buildImageObj } from "../../lib/helpers"
import { imageUrlFor } from "../../lib/image-url"
import { css } from "@emotion/core"

function getImageHeight({ width, format, image }) {
  switch (format) {
    case "square":
      return width
    case "original":
      const originalAspectRatio = image.asset.metadata.dimensions.aspectRatio
      return Math.floor(width / originalAspectRatio)
    default:
      const defaultRatio = 9 / 16
      return Math.floor(defaultRatio * width)
  }
}
// TODO: figure out how to pass aspect ratio to gallery container

const Figure = ({ image, width = 1200, format = "landscape" }) => {
  const height = getImageHeight({ width, format, image })
  const imgUrl =
    image &&
    imageUrlFor(buildImageObj(image))
      .width(width)
      .height(height)
      .fit("crop")
      .auto("format")
      .url()
  return imgUrl ? (
    <img
      css={css`
        height: 100%;
        object-fit: contain;
      `}
      src={imgUrl}
      alt={image.alt || ""}
    />
  ) : (
    <></>
  )
}

export default Figure
