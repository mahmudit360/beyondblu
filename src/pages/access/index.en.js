import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Map from "../../components/map"
import AccessDetails from "../../components/access_details"
import ContactForm from "../../components/contact_form"

const Index = props => {
  return (
    <Layout {...props}>
      <SEO title="Access | Psychotherapy &amp; Counseling Services in Tokyo" />
      <section className="py-6 md:py-16">
        <div className="container">
          <div className="md:flex">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-10">
              {props.location.search === "?success" ? (
                <div className="alert alert-success">
                  Thank you for your message.
                </div>
              ) : (
                <>
                  <h1 className="page-title b-line">Get in touch...</h1>
                  <ContactForm />
                </>
              )}
            </div>
            <div className="md:w-1/3 md:border-l border-gray-400 md:pl-10">
              <AccessDetails />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container">
          <p className="text-center max-w-4xl mx-auto mb-0">
            Beyond Bleu Psychotherapy &amp; Consulting is located conveniently
            in central Tokyo and it is a 3-minute walk from Toei Asakusa line,
            Takaracho station, exit both A1 and A2; 4-minute walk from Ginza
            line, Kyobashi station, exit 1 and 4.
          </p>
        </div>
      </section>

      <Map />
    </Layout>
  )
}

export default Index
