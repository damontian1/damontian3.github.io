import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import ProjectGallery from "../components/project-gallery"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <ProjectGallery />
  </Layout>
)

export default IndexPage
