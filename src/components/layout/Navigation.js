import React from "react"
import { Link } from "gatsby"
import logo from "../../../static/images/logos/logo.png"
import "./Navigation.css"

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
    <nav className="Nav">
      <a href="../predictions">Predictions</a>
      <a href="../league">League standings</a>
      <a href="../table">PL Table</a>
      <a href="../fixtures">PL Fixtures</a>
    </nav>
  </header>
)

export default Navigation
