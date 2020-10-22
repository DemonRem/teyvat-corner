import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Sidebar />
    </Layout>
)

export default IndexPage
