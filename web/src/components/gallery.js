import React, { useState } from "react"
import PropTypes from "prop-types"
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md"
import {
  GalleryWrapper,
  Slides,
  Slide,
  GalleryPrevBtn,
  GalleryNextBtn,
} from "./gallery.styles"
import Figure from "./figure"
import Video from "./video"

const Gallery = ({ slides }) => {
  const initialState = slides.length > 1 ? [slides[0], slides[1]] : [slides[0]]
  const [visibleSlides, updateVisibleSlides] = React.useState(initialState)

  const [activeIndex, setActiveIndex] = useState(0)

  const safeSlides = visibleSlides.filter(({ file }) => file !== null)

  const nextSlide = () => {
    if (slides.length > safeSlides.length) {
      updateVisibleSlides(prevSlides => {
        return [...prevSlides, slides[safeSlides.length]]
      })
    }
    setActiveIndex(prevIndex => (prevIndex + 1) % safeSlides.length)
  }

  const previousSlide = () => {
    setActiveIndex(
      prevIndex => (prevIndex - 1 + safeSlides.length) % safeSlides.length
    )
  }

  return safeSlides.length > 0 ? (
    <GalleryWrapper>
      <Slides>
        {safeSlides.map(({ _key, __typename, ...props }, index) => {
          return (
            <Slide
              key={_key}
              className={index === activeIndex ? "active" : "inactive"}
            >
              {__typename === "SanityFigure" ? (
                <Figure image={props} />
              ) : (
                <Video {...props} />
              )}
            </Slide>
          )
        })}
      </Slides>
      <div className="gallery__controls">
        <GalleryPrevBtn
          className={`${activeIndex > 0 ? "visible" : "hidden"}`}
          onClick={previousSlide}
        >
          <MdKeyboardArrowLeft color={"#000"} />
        </GalleryPrevBtn>

        <GalleryNextBtn
          className={`${
            activeIndex < slides.length - 1 ? "visible" : "hidden"
          }`}
          onClick={nextSlide}
        >
          <MdKeyboardArrowRight color={"#000"} />
        </GalleryNextBtn>
      </div>
    </GalleryWrapper>
  ) : null
}

Gallery.propTypes = {
  slides: PropTypes.array,
  options: PropTypes.arrayOf(PropTypes.string),
}
export default Gallery
