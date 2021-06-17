import React, { useEffect, useRef, useState } from "react"
import Cover from "./cover"
import PresentationPage from "./page"
import { PresentationWrapper } from "./style"

const Presentation = ({ content: presentation, title, scope, date }) => {
  const [activePage, setActivePage] = useState(0)
  const [onCoverPage, setOnCoverPage] = useState(true)
  const content = presentation[activePage]
  const activePageRef = useRef(0)
  const coverRef = useRef(true)

  function nextSlide() {
    if (coverRef.current) {
      coverRef.current = false
      setOnCoverPage(false)
    } else if (activePageRef.current !== presentation.length - 1) {
      activePageRef.current += 1
      setActivePage(activePageRef.current)
    }
  }

  function prevSlide() {
    if (activePageRef.current !== 0) {
      activePageRef.current -= 1
      setActivePage(activePageRef.current)
      coverRef.current = false
      setOnCoverPage(false)
    } else {
      coverRef.current = true
      setOnCoverPage(true)
    }
  }

  function handleKeyPress({ keyCode }) {
    switch (keyCode) {
      case 39:
        nextSlide()
        break
      case 37:
        prevSlide()
        break
      default:
        break
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress)
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [])

  return (
    <PresentationWrapper>
      {onCoverPage ? (
        <Cover title={title} scope={scope} date={date} />
      ) : (
        <PresentationPage key={content._key} {...content} />
      )}
    </PresentationWrapper>
  )
}

export default Presentation
