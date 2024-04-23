import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { BookingButton } from "../../components/buttons"

const Index = props => {
  const images = useStaticQuery(graphql`
    query {
      tumee: file(
        relativePath: {
          eq: "tumee-bayanbileg-standing-english-speaking-therapist-in-tokyo-beyondbleu.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout {...props}>
      <SEO
        title="Tumee Bayanbileg | English Speaking Therapist in Tokyo"
        description="As a psychotherapist, I’ve had the privilege of working with clients from all kinds of backgrounds and life experience. I recognize the importance of having an informed and open viewpoint in order to truly be present."
      />
      <section className="py-6 md:py-16">
        <div className="container">
          <div className="lg:flex">
            <div className="lg:w-2/3 lg:pr-10">
              <h1 className="page-title b-line">Tumee Bayanbileg. M.A</h1>
              <p>
                As a psychotherapist, I’ve had the privilege of working with
                clients from all kinds of backgrounds and life experience. I
                recognize the importance of having an informed and open
                viewpoint in order to truly be present.
              </p>
              <p>
                Each person has characteristic ways of managing their emotional
                reactions to their unique life challenges. The focus of my
                psychotherapy work is on identifying, strengthening, and, when
                necessary, modifying these coping methods to optimize your
                satisfaction in work and relationships. One of the most
                important parts of our collaborative counseling work will be to
                create a safe space for the exploration of feelings and
                behaviors. My style as a therapist is interactive, supportive
                and nurturing, while also being honest and direct.
              </p>
              <p>
                I have substantial experience aiding clients through the
                processing of multiple types of trauma, bereavement, grief/loss,
                ambiguous losses, relationship conflicts, self-esteem, identity
                conflicts, and mood and anxiety disturbances. I facilitate
                enhanced cognitive behavioral therapeutic approach (CBT),
                Acceptance and Commitment Therapy (ACT), Intensive Short-Term
                Dynamic Psychotherapy (ISTDP) and Dialectical Behavior Therapy
                (DBT).
              </p>
              <p>
                Taking a first step to therapy can be intimidating, but
                therapeutic work can lead to a more balanced and enriching
                relationship with yourself and others, let’s discover it
                together! I am trained to walk alongside you during your
                explorative journey.
              </p>
              <p>
                The Japanese Psychological Association, member #210020
                <br />
                Japan Society of Personality Psychology, member #00151962
                <br />
                Society of the Psychiatry and Culture
                <br />
                American Psychological Association, Division 52 International
                Psychology
              </p>
              <div className="text-center md:text-left mb-8 lg:mb-0">
                <BookingButton />
              </div>
            </div>
            <div className="lg:w-1/3 about-img">
              <Img
                fluid={images.tumee.childImageSharp.fluid}
                className="mx-auto"
                alt="Tumee Bayanbileg - English Speaking Therapist in Tokyo"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
