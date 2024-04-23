import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { BookingButton } from "../../components/buttons"

const Index = props => {
  return (
    <Layout {...props}>
      <SEO
        title="Relationship Counseling | Counseling Services in Tokyo"
        description="We are wired to be social. Even for those who enjoy aloneness, relating to others is vital for a sense of wellbeing, direction, purpose, and pleasure. This is why continually seeking rich interpersonal relationships and connecting with your loved ones is both crucial and beneficial."
      />
      <section className="py-6 md:py-16 bg-image bg-image-plant">
        <div className="container">
          <div className="lg:flex">
            <div className="lg:w-2/3">
              <h1 className="page-title b-line">Relationship Counseling</h1>
              <h2 className="font-light text-4xl">
                We are wired to be social.
              </h2>
              <p className="text-lg">
                Even for those who enjoy aloneness, relating to others is vital
                for a sense of wellbeing, direction, purpose, and pleasure. This
                is why continually seeking rich interpersonal relationships and
                connecting with your loved ones is both crucial and beneficial.
              </p>
              <h6>
                <em>What if your relationship is no longer satisfying?</em>
              </h6>
              <p className="text-lg">
                When relationships begin to feel like a struggle, it’s essential
                to seek help and work towards a better future. Like most things
                of value, relationships require “work”. No garden flourishes
                without proper care. Maintaining a good partnership is an active
                choice we make every single day. It requires intentionality and
                effort to cultivate it.
              </p>
              <h6>
                <em>It’s a courageous act to communicate and connect.</em>
              </h6>
              <p className="text-lg">
                Lack of effective communication and connection are the building
                blocks of growing resentment and distancing in relationships.
                The way we communicate and express our feelings and needs can
                make or break our relationships.
              </p>
              <p className="text-lg">
                Criticism, contempt, defensiveness, and stonewalling, behaviors
                that become common occurrences during a conflict, are, in fact,
                predictors of relationship failure and divorce. Silencing your
                thoughts and feelings, giving up on your partner, or handling a
                delicate matter with anger, resentment, and hostility don’t
                improve issues. They pave the way to chronic discontent or
                extinction of the bond.
              </p>
              <p className="text-lg">
                Every relationship needs mending and polishing daily, sometimes
                requiring professional guidance. Master having difficult
                conversations and move past the anger, fears, or insecurities
                crumbling the relationships important to you.
              </p>
              <p className="text-lg">
                Start a conversation to save what matters.
              </p>
              <div className="text-center md:text-left">
                <BookingButton />
              </div>
            </div>
            <div className="w-1/3"></div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
