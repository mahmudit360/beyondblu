// NOTE: Commented out as not currently using a blog
// import React from "react"
// import { graphql } from "gatsby"
// import Link from "../components/app_link"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import Img from "gatsby-image"

// const BlogPostTemplate = props => {
//   const post = props.data.markdownRemark
//   const siteTitle = props.data.site.siteMetadata.title
//   const { previous, next } = props.pageContext

//   return (
//     <Layout {...props}>
//       <SEO
//         title={post.frontmatter.title}
//         description={post.frontmatter.description || post.excerpt}
//       />
//       <section className="py-8">
//         <div className="container">
//           <div className="max-w-3xl mx-auto">
//             <article itemScope itemType="http://schema.org/Article">
//               <header>
//                 <div className="mb-6">
//                   <Img
//                     fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
//                   />
//                 </div>
//                 {/* <div className="mb-6">
//                   <Link to="/">← Back</Link>
//                 </div> */}
//                 <h1 itemProp="headline">{post.frontmatter.title}</h1>
//                 <p>{post.frontmatter.date}</p>
//               </header>
//               <section
//                 dangerouslySetInnerHTML={{ __html: post.html }}
//                 itemProp="articleBody"
//               />
//             </article>

//             {/* <nav>
//               <ul
//                 style={{
//                   display: `flex`,
//                   flexWrap: `wrap`,
//                   justifyContent: `space-between`,
//                   listStyle: `none`,
//                   padding: 0,
//                 }}
//               >
//                 <li>
//                   {previous && (
//                     <Link to={previous.fields.slug} rel="prev">
//                       ← {previous.frontmatter.title}
//                     </Link>
//                   )}
//                 </li>
//                 <li>
//                   {next && (
//                     <Link to={next.fields.slug} rel="next">
//                       {next.frontmatter.title} →
//                     </Link>
//                   )}
//                 </li>
//               </ul>
//             </nav> */}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   )
// }

// export default BlogPostTemplate

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         description
//         featuredImage {
//           childImageSharp {
//             fluid(maxWidth: 1024) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `
