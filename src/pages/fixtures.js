import React from "react"
import GameweekFixtures from "../components/fixtures/fixtures"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

const FixturesPage = () => (
  <Layout>
    <SEO title="Fixtures" />
    <GameweekFixtures />
  </Layout>
)

export default FixturesPage
