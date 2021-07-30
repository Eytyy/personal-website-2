import React, { useCallback, useEffect, useState } from "react"

const UseGif = ({ slides, universalDelay, loop }) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [paused, setPaused] = useState(false)

  const animate = useCallback(() => {
    const isLastSlide = activeSlide === slides.length - 1
    const next = isLastSlide ? (loop ? 0 : activeSlide) : activeSlide + 1
    if (isLastSlide && !loop) {
      setPaused(true)
    }
    setActiveSlide(next)
  }, [activeSlide, slides.length])

  useEffect(() => {
    if (!paused) {
      const defaultDelay = universalDelay || 0
      const delay = slides[activeSlide]?.delay || defaultDelay

      setTimeout(animate, delay)
    }
    return function cleanup() {
      clearTimeout(animate)
    }
  }, [animate, paused, activeSlide, slides])

  return { animate, activeSlide, paused }
}

export default UseGif
