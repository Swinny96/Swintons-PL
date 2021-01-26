import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import styled from "styled-components"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <img src="/images/logos/logo.svg" alt="logo" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <Link to="/page-2/">Go to page 2</Link> <br />
      </Container>
    </Layout>
  )
}

export default IndexPage

const Container = styled.div`
  margin: 16px;
`
