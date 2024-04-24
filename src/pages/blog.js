import React from "react"
import { graphql, Link } from "gatsby"

const BlogPage = ({ data }) => {
  return (
    <div>
      <h1>Blog Posts</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default BlogPage
