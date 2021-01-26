import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import LeagueTable from "../components/league/leaguetable"

const LeaguePage = () => (
  <Layout>
    <SEO title="League" />
    <LeagueTable />
  </Layout>
)

export default LeaguePage