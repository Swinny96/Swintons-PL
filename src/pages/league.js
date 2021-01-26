import React from "react"
import Layout from "../components/layout/layout"
import LeagueTable from "../components/league/leaguetable"
import SEO from "../components/layout/seo"

const LeaguePage = () => (
  <Layout>
    <SEO title="League" />
    <LeagueTable />
  </Layout>
)

export default LeaguePage
