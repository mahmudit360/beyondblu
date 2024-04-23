import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = props => {
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <Layout {...props}>
      <SEO title="404: Not Found" />
      <section className="py-32">
        <div className="container">
          <h1>Page Not Found</h1>
          <p>You just hit a page that doesn&#39;t exist.</p>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
