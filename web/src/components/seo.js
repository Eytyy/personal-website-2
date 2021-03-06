import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { imageUrlFor } from "../lib/image-url"
import { buildImageObj } from "../lib/helpers"

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      openGraph {
        title
        description
        image {
          _key
          alt
          crop {
            _key
            _type
            top
            bottom
            left
            right
          }
          hotspot {
            _key
            _type
            x
            y
            height
            width
          }
          asset {
            _id
            metadata {
              lqip
              dimensions {
                aspectRatio
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

function SEO({ description, lang, meta, keywords, title, image, bodyAttr }) {
  const data = useStaticQuery(detailsQuery)
  const defaultSEO = data.site.openGraph

  const metaDescription =
    description || (defaultSEO && defaultSEO.description) || ""
  const siteTitle = data.site.title || ""
  const siteAuthor = (data.site.author && data.site.author.name) || ""

  const metaImage =
    image && image.asset
      ? imageUrlFor(buildImageObj(image)).width(1200).url()
      : defaultSEO && defaultSEO.image && defaultSEO.image.asset
      ? imageUrlFor(buildImageObj(defaultSEO.image)).width(1200).url()
      : ""

  const pageTitle = title || (defaultSEO && defaultSEO.title) || siteTitle

  return (
    <Helmet
      bodyAttributes={bodyAttr}
      htmlAttributes={{ lang }}
      title={pageTitle}
      titleTemplate={pageTitle === siteTitle ? siteTitle : `%s | ${siteTitle}`}
      meta={[
        {
          name: "google-site-verification",
          content: "0lKhCdwNONIB0NIwPB7mPYMG6udUJ7yxhswBsP28Z0M",
        },
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: metaImage,
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: siteAuthor,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
      ]
        .concat(
          keywords && keywords.length > 0
            ? {
                name: "keywords",
                content: keywords.join(", "),
              }
            : []
        )
        .concat(meta)}
    >
      )}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}

export default SEO
