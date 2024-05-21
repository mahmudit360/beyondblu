import React from "react"
import { graphql } from "gatsby"
import Link from "../../components/app_link"
import Layout from "../../components/layout"
import BlogItem from "../../components/blog_roll"
import SEO from "../../components/seo"

const BlogIndex = (props) => {
  return (
    <Layout {...props}>
      <SEO title="All Blog Posts" />
      <BlogItem />
    </Layout>
  )
}

export default BlogIndex
