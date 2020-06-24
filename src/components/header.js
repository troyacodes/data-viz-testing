import { Link } from "gatsby"
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
        <Link style={{ color: "white", fontSize: "1.5rem" }} to="/amcharts">
          Amcharts
        </Link>
        <br />
        <Link style={{ color: "white", fontSize: "1.5rem" }} to="/recharts">
          Recharts
        </Link>
        <br />
        <Link style={{ color: "white", fontSize: "1.5rem" }} to="/nivo">
          Nivo
        </Link>
        <br />
        <Link style={{ color: "white", fontSize: "1.5rem" }} to="/chartjs">
          Chart.js
        </Link>
        <br />
        <Link style={{ color: "white", fontSize: "1.5rem" }} to="/apex">
          Apex
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
