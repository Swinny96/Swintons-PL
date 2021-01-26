import React from "react"
import "./layout.css"
import { Link } from "gatsby"
import Navigation from "./Navigation"

function Layout({ children }) {
  return (
    <div className="Layout">
      <Navigation />
      <main>{children}</main>
      <footer>
        © {` `}
        <Link href="https://www.gatsbyjs.com">CSwinton</Link>
        {` `} {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout
