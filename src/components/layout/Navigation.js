import React from "react"
import { Link } from "gatsby"
import logo from "../../../static/images/logos/logo.png"
import "./layout.css"

const Navigation = () => (
  <header>
    <Link to="/">
      <div className="Logo-Wrapper">
        <img className="Logo" src={logo} />
        <div className="Logo-Text">
          <span className="Logo-Span">The Swintons</span>
          <h1 className="Logo-Heading">Predictions League</h1>
        </div>
      </div>
    </Link>
    <div className="Nav">
      <a className="Nav-Link" href="../predictions">Predictions</a>
      <a className="Nav-Link" href="../league">League standings</a>
      <a className="Nav-Link" href="../table">PL Table</a>
      <a className="Nav-Link" href="../fixtures">PL Fixtures</a>
    </div>
  </header>
)

export default Navigation