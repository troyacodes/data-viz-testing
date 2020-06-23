import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link style={{ color: "white" }} to="/amcharts">
          Amcharts
        </Link>
        <br />
        <Link style={{ color: "white" }} to="/recharts">
          Recharts
        </Link>
        <br />
        <Link style={{ color: "white" }} to="/nivo">
          Nivo
        </Link>
        <br />
      </h1>
    </div>
  </header>
)

export default Header
