import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <Link to="/amcharts">Amcharts</Link> <br />
    <Link to="/recharts">Recharts</Link> <br />
    <Link to="/nivo">Nivo</Link> <br />
  </Layout>
)

export default IndexPage
