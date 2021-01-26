import React from "react"
import "./layout.css"
import styled from "styled-components"
import { Link } from "gatsby"
import Navigation from "./Navigation"

function Layout({ children }) {
  return (
    <LayoutContainer>
      <Navigation />
      <Main>{children}</Main>
      <Footer>
        © {` `}
        <Link href="https://www.gatsbyjs.com">CSwinton</Link>
        {` `} {new Date().getFullYear()}
      </Footer>
    </LayoutContainer>
  )
}

export default Layout

const Main = styled.main`
  display: block;
  min-height: 80vh;
`

const Footer = styled.footer`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  padding: 30px;

  @media only screen and (max-width: 600px) {
    padding: 10px;
  }

  a {
    text-decoration: none;
    color: #01fe87;
  }
`

const LayoutContainer = styled.div`
  margin: 1rem;

  @media only screen and (max-width: 600px) {
    padding: 10px;
  }
`
