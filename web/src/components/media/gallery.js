import React, { useState } from "react"
import PropTypes from "prop-types"
import { GalleryWrapper, Slides, Slide } from "./gallery.styles"
import Figure from "./figure"
import Video from "./video"

const Gallery = ({ slides, ...props }) => {
  const [visibleSlides, updateVisibleSlides] = React.useState(slides)
  const [activeIndex, setActiveIndex] = useState(0)

  return visibleSlides.length > 0 ? (
    <GalleryWrapper>
      <Slides>
        {visibleSlides.map(({ _key, _type, __typename, ...fields }, index) => {
          return (
            <Slide
              key={_key}
              className={index === activeIndex ? "active" : "inactive"}
            >
              {_type === "figure" || __typename === "SanityFigure" ? (
                <Figure image={fields} />
              ) : (
                <Video {...fields} />
              )}
            </Slide>
          )
        })}
      </Slides>
    </GalleryWrapper>
  ) : null
}

Gallery.propTypes = {
  slides: PropTypes.array,
  options: PropTypes.arrayOf(PropTypes.string),
}
export default Gallery
