import React, { useCallback, useEffect, useState } from "react"
import Media from "../media/media"
import SvgEl from "../media/SvgEl"
import { PresentationPageWrapper, Deck, PresentationHeader } from "./style"

const Gif = ({ title, content: slides, universalDelay }) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [paused, setPaused] = useState(false)

  const animate = useCallback(() => {
    const isLastSlide = activeSlide === slides.length - 1
    const next = isLastSlide ? activeSlide : activeSlide + 1
    if (isLastSlide) {
      setPaused(true)
    }
    setActiveSlide(next)
  }, [activeSlide, slides.length])

  useEffect(() => {
    if (!paused) {
      const defaultDelay = universalDelay || 60
      const delay = slides[activeSlide]?.delay || defaultDelay
      setTimeout(animate, delay)
    }
    return function cleanup() {
      clearTimeout(animate)
    }
  }, [animate, paused, activeSlide, slides])

  return (
    <PresentationPageWrapper>
      <PresentationHeader>
        {title && <div className="caption">{title}</div>}
      </PresentationHeader>{" "}
      {slides?.map(({ _type, _key, image, snippet }, index) => (
        <Deck active={index === activeSlide} key={_key}>
          {_type === "gifItem" ? (
            <Media {...image} />
          ) : (
            <SvgEl markup={snippet} />
          )}
        </Deck>
      ))}
    </PresentationPageWrapper>
  )
}

export default Gif
