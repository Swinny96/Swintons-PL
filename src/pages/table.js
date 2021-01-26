import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import PLTable from "../components/table/table"

const TablePage = () => (
  <Layout>
    <SEO title="PL Table" />
    <PLTable />
  </Layout>
)

export default TablePage
