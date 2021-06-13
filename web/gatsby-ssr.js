import Layout from "./src/components/layout"

import React from "react"
import { SiteContextProvider } from "./src/siteContext"

export const wrapPageElement = ({ element, props }) => (
  <SiteContextProvider {...props}>
    <Layout {...props}>{element}</Layout>
  </SiteContextProvider>
)
