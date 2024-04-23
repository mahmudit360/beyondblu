import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import { graphql, useStaticQuery } from "gatsby"
//import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BookingButton } from "../components/buttons"

const Index = props => {
  // const images = useStaticQuery(graphql`
  //   query {
  //     tumee: file(
  //       relativePath: {
  //         eq: "tumee-bayanbileg-english-speaking-therapist-in-tokyo-beyondbleu.jpg"
  //       }
  //     ) {
  //       childImageSharp {
  //         fluid(maxWidth: 500) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout {...props}>
      <SEO
        title="Psychotherapy for Trauma, Depression &amp; Anxiety. English speaking psychologist in Tokyo"
        description="Psychotherapy for trauma, depression, anxiety, relationship issues &amp; general struggles of modern life."
      />
      <main>
          
    <section className="py-6 md:py-16 bg-image-home">
        <div className="container md:w-5/6 ">
          <div className="lg:flex">
            <div className="lg:w-2/3">
              <div className="lg:flex items-center px-15">
                <div className="lg:full">
                  <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl lg:text-5xl text-center line-height lg:text-left font-light">
                      Psychotherapy for
                  <br />
                  <span className="font-bold">trauma</span>,{" "}
                  <span className="font-bold">depression</span>,{" "}
                  <span className="font-bold">anxiety</span>, relationship
                  issues &amp; general struggles of modern life.
                    </h1>
                  </div>
                </div>
              </div>
    
              <div className="md:container py-10">
              <div className="max-w-3xl mx-auto">
                <p className="text-xl mb-0 text-justify">
              Most of us reach a point in our lives when we begin to feel that
              it is time for change, but when we recognize how difficult it is
              to alter our existing patterns of thinking and behaviors we tend
              to give up. This in turn leads to further avoidance, fears,
              disappointments, and decreased motivation. Ultimately these
              experiences can leave you feeling anxious or depressed, lead to
              difficulties in relationships, and have you living an unhappy
              life. Although it may feel like a dead end, in reality there are
              many ways in which you could be helped. Psychotherapy is a process
              through which you can explore your issues, improve insight into
              what is holding you back, and develop efficient ways to deal with
              your problems.
                </p>
              </div>
            </div>
              <div className="md:container py-10">
               <div className="xl:flex items-center py-0 gap-1">
                <div className="xl:w-full p-5 flex flex-col items-center text-center bg-white mb-1">
                    <FontAwesomeIcon icon="globe-asia" className=" text-base" />
                  <h3 className="my-2 text-base">
                    {" "}
                    PSYCHOTHERAPY JAPAN. LLC
                  </h3>
                  <div className="uppercase text-sm">Counseling &amp; Consulting</div>
                </div>
            </div>
                <div className="lg:flex items-center py-0 gap-1 ">
                  <a href="mailto:info@beyondbleu.com" className="py-5 mb-1 bg-white xl:w-1/2
 no-underline flex flex-col items-center text-center">
                       <FontAwesomeIcon icon="envelope" />
                    <h3 className="my-2 text-base">
                      info@beyondbleu.com
                    </h3>
                    <div className="uppercase">E-MAIL ME</div>
                  </a>
                    <a href="tel:03-5962-3883" className="py-5 mb-1 bg-white xl:w-1/2
 no-underline flex flex-col items-center text-center">
                      <FontAwesomeIcon icon="phone" />
                    <h3 className="my-2 text-base">
                       03-5962-3883
                    </h3>
                    <div className="uppercase">CALL NOW</div>
                  </a>
                </div>

            <div className="md:container py-10">
              <div className="text-center">
                <h2>What my clients are saying...</h2>
              </div>
              <div className="lg:flex items-center py-3">
                <div className="lg:w-1/2 p-5">
                  <p className="mb-0 text-lg text-gray-900 text-justify">
                    <FontAwesomeIcon
                      icon="quote-left"
                      className="text-gray-400 mb-2"
                    />{" "}
                    Thank you – in a big way. I’m struggling to find the words to
                    express my gratitude. Thank you for helping me find my smile
                    again and teaching me about how to pursue real happiness. These
                    last few sessions have made me feel great as I’ve realized that
                    I’ve accomplished a lot with you.{" "}
                    <FontAwesomeIcon
                      icon="quote-right"
                      className="text-gray-400 mb-2"
                    />
                  </p>
                </div>
                <div className="lg:w-1/2 p-5">
                  <p className="mb-0 text-lg text-gray-900 text-justify">
                    <FontAwesomeIcon
                      icon="quote-left"
                      className="text-gray-400 mb-2"
                    />{" "}
                    Understanding therapist! Very understanding therapist. Took the
                    time to listen and understand the situation – Flexible about
                    timing, location (via Zoom if needed) – Offering extra or
                    follow-ups when needed.{" "}
                    <FontAwesomeIcon
                      icon="quote-right"
                      className="text-gray-400 mb-2"
                    />
                  </p>
                </div>
              </div>
            </div>
              <div className="md:container py-16">
              <h2 className="text-4xl text-center">
                Book a therapy session, today.
              </h2>
              <p className="text-center max-w-lg mx-auto text-lg">
                Whether you're struggling with anxiety, depression, low self-esteem,
                or relationship troubles, I can help.
              </p>
              <div className="text-center">
                <BookingButton />
              </div>
            </div>       
            <div className="w-1/3"></div>
          </div>
        </div>
        </div> 
        </div>
      </section>
  </main>
    </Layout>
  )
}

export default Index
