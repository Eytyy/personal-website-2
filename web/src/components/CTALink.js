import React from "react"
import { Link, navigate } from "gatsby"
import { NavigationItem } from "./header.styles"

const doNavigate = target => {
  if (!target || !target.length) {
    return
  }
  const internal = /^\/(?!\/)/.test(target)
  if (internal) {
    navigate(target)
  } else {
    window.location = target
  }
}

const CTALink = props => {
  let link = props.route || props.link || "#"

  if (
    props.landingPageRoute &&
    props.landingPageRoute.slug &&
    props.landingPageRoute.slug.current
  ) {
    const active =
      props.location &&
      props.location.pathname &&
      props.location.pathname.match(
        RegExp(`${props.landingPageRoute.slug.current}`)
      )
    if (active) return null
    link = `/${props.landingPageRoute.slug.current}`
  }

  // External
  if (props.link) {
    return (
      <NavigationItem>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {props.title}
        </a>
      </NavigationItem>
    )
  }

  return (
    <NavigationItem>
      <Link to={link}>{props.title}</Link>
    </NavigationItem>
  )
}

export default CTALink
