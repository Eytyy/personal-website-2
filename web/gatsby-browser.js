import Layout from "./src/components/layout"

import React from "react"
export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
