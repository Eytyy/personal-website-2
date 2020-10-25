import React from "react"
import clientConfig from "../../client-config"
import BasePortableText from "@sanity/block-content-to-react"
import { Link } from "gatsby"
import Figure from "./media/figure"

import Video from "./media/video"
import { ProjectSectionHeadline } from "./project/Sections.styles"
import { css } from "@emotion/core"

const BlockRenderer = props => {
  const { style = "normal" } = props.node

  if (style === "h2") {
    return (
      <ProjectSectionHeadline
        css={css`
          margin-bottom: 0.5em;
        `}
      >
        {props.children}
      </ProjectSectionHeadline>
    )
  }

  // Fall back to default handling
  return BasePortableText.defaultSerializers.types.block(props)
}

const serializers = {
  marks: {
    internalLink: ({
      mark: {
        item: { slug = {} },
      },
      children,
    }) => {
      return <Link to={`/work/${slug.current}`}>{children}</Link>
    },
    externalLink: ({ children, mark }) => {
      return mark.blank ? (
        <a target="_blank" rel="noopener noreferrer" href={mark.href}>
          {children}
        </a>
      ) : (
        <a href={mark.href}>{children}</a>
      )
    },
  },
  types: {
    block: BlockRenderer,
    figure: ({ node }) => <Figure alt={node.alt} image={node.asset} />,
    video: ({ node: { asset, autoplay } }) => {
      return <Video hideControls={true} asset={asset} autoplay={autoplay} />
    },
  },
}

const PortableText = ({ blocks }) => {
  return (
    <BasePortableText
      serializers={serializers}
      blocks={blocks}
      {...clientConfig.sanity}
    />
  )
}

export default PortableText
