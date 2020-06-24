/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header siteTitle="Chart testing" />
      <main>{children}</main>
    </Fragment>
  )
}

export default Layout
