import React from "react"
import SvgEl from "../media/SvgEl"
import GifBlock from "./gifBlock"
import { GridBlock, GridPage, GridWrapper } from "./style"

const Grid = props => {
  const { title, content } = props
  console.log(content)
  return (
    <GridPage>
      {content && (
        <GridWrapper>
          {content?.map(block => (
            <GridBlock
              className={block._type === "svg" ? "svg-block" : "gif-block"}
              key={block._id || block._key}
            >
              {block._type === "svg" ? (
                <SvgEl key={block._id || block._key} markup={block.code} />
              ) : (
                <GifBlock {...block} />
              )}
            </GridBlock>
          ))}
        </GridWrapper>
      )}
    </GridPage>
  )
}

export default Grid
