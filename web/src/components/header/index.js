import React from "react"
import { css } from "@emotion/core"

import { Logo, HeaderWrapper, hidden } from "./styles"

const Header = () => {
  return (
    <HeaderWrapper>
      <h1
        aria-hidden
        css={css`
          ${hidden}
        `}
      >
        Eyas Tayyem
      </h1>
      <Logo />
    </HeaderWrapper>
  )
}

export default Header
