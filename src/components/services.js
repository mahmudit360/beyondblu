import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export default () => {
  const images = useStaticQuery(graphql`
    query {
      depression: file(relativePath: { eq: "depression.jpg" }) {
        ...fluidImage
      }
      anxiety: file(relativePath: { eq: "anxiety.jpg" }) {
        ...fluidImage
      }
      selfEsteem: file(relativePath: { eq: "self-esteem.jpg" }) {
        ...fluidImage
      }
      relationship: file(relativePath: { eq: "relationship.jpg" }) {
        ...fluidImage
      }
    }
  `)

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container">
        <div className="text-center">
          <h2 className="text-center mb-10 b-line">My Services</h2>
        </div>
        <div className="md:flex md:flex-wrap -m-5">
          <div className="md:w-1/2 lg:w-1/4 p-5">
            <div className="mb-5">
              <Img
                fluid={{
                  ...images.depression.childImageSharp.fluid,
                  aspectRatio: 1,
                }}
              />
            </div>
            <h3 className="text-2xl mb-3">Therapy for Depression</h3>
            <p className="leading-tight text-gray-800">
              The effects of depression can be so punishing that it becomes hard
              to complete basic tasks of daily living. Depression therapy can
              help immensely.
            </p>
            <div>
              <Link to="/services/therapy-for-depression">Read more</Link>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/4 p-5">
            <div className="mb-5">
              <Img
                fluid={{
                  ...images.anxiety.childImageSharp.fluid,
                  aspectRatio: 1,
                }}
              />
            </div>
            <h3 className="text-2xl mb-3">Therapy for Anxiety</h3>
            <p className="leading-tight text-gray-800">
              The effects of depression can be so punishing that it becomes hard
              to complete basic tasks of daily living. Depression therapy can
              help immensely.
            </p>
            <div>
              <Link to="/services/therapy-for-anxiety">Read more</Link>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/4 p-5">
            <div className="mb-5">
              <Img
                fluid={{
                  ...images.selfEsteem.childImageSharp.fluid,
                  aspectRatio: 1,
                }}
              />
            </div>
            <h3 className="text-2xl mb-3">Therapy for Self-Esteem</h3>
            <p className="leading-tight text-gray-800">
              The effects of depression can be so punishing that it becomes hard
              to complete basic tasks of daily living. Depression therapy can
              help immensely.
            </p>
            <div>
              <Link to="/services/therapy-for-self-esteem">Read more</Link>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/4 p-5">
            <div className="mb-5">
              <Img
                fluid={{
                  ...images.relationship.childImageSharp.fluid,
                  aspectRatio: 1,
                }}
              />
            </div>
            <h3 className="text-2xl mb-3">Relationship Counseling</h3>
            <p className="leading-tight text-gray-800">
              The effects of depression can be so punishing that it becomes hard
              to complete basic tasks of daily living. Depression therapy can
              help immensely.
            </p>
            <div>
              <Link to="/services/relationship-counseling">Read more</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
