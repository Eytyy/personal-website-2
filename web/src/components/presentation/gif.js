import React from "react"
import UseGif from "../../hooks/useGif"
import Media from "../media/media"
import SvgEl from "../media/SvgEl"
import { PresentationPageWrapper, Deck, PresentationHeader } from "./style"

const Gif = ({ title, content: slides, universalDelay, loop, displayType }) => {
  if (!slides) return null

  const { activeSlide } = UseGif({ slides, universalDelay, loop })

  return (
    <PresentationPageWrapper>
      <PresentationHeader>
        {title && <div className="caption">{title}</div>}
      </PresentationHeader>{" "}
      {slides?.map(({ _type, _key, image, snippet, svg }, index) => (
        <Deck
          displayType={displayType}
          active={index === activeSlide}
          key={_key}
        >
          {_type === "gifItem" ? (
            <Media {...image} />
          ) : (
            <SvgEl key={_key} markup={svg?.code || snippet} />
          )}
        </Deck>
      ))}
    </PresentationPageWrapper>
  )
}

export default Gif
