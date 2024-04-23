import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { BookingButton } from "../../components/buttons"

const Index = props => {
  return (
    <Layout {...props}>
      <SEO
        title="Couples Therapy | Couple Counseling and Marriage Counseling in Tokyo"
        description="Help for partnered couples, premarital counseling, marriage counseling, couples divorced, or considering divorce, dating coaching."
      />
  <section className="py-6 md:py-16 bg-image bg-image-plant">
    <div className="container">
      <div className="lg:flex">
        <div className="lg:w-2/3">
            <div className="w-full">
              <h1 className="page-title b-line">Couples Therapy</h1>
              <h2 className="font-light text-4xl">
                Help for partnered <strong>couples</strong>,{" "}
                <strong>premarital counseling</strong>,{" "}
                <strong>marriage counseling</strong>, couples divorced, or considering
                divorce, dating coaching from Gottman
                method trained therapist
              </h2>
              <p className="text-lg">
              <ul className="list-disc list-outside mx-10 my-6 text-sm">
                <li>Do you want to reduce conflict and improve communication?</li>
                <li>Do you long for a way to rebuild trust and connection?</li>
                <li>Are you looking for greater emotional or sexual intimacy?</li>
                <li>Are you wondering whether to make it work or to get a
                  divorce?</li>
                  <li>Could you benefit from professional support and guidance
                    through a difficult patch in your relationship?</li>
              </ul>
              <p>
                You’re not alone! Most relationships go through challenging times.
                In fact, most couples find themselves in trouble because they’ve
                never learned the tools and skills necessary to make a long-term
                relationship work. What if you didn’t have to end your relationship?
                What if, by working on these challenges, your relationship actually
                thrives and you feel closer than ever?
              </p>
              </p>
            </div>

            <div className="w-full">
              <h2 className="text-3xl">What is Gottman Method Couples Therapy?</h2>
              <p>
                Gottman Method Couple Therapy is a structured, goal-oriented and
                evidence-based therapy. Intervention strategies are based upon
                Dr.John Gottman’s three decades of scientific research with over
                3,000 couples. This research shows us what actually works to help
                couples achieve a long-term healthy relationship.
                <strong>Some skills that you and your spouse or partner will learn
                  include:</strong>
                  <ul className="list-disc list-outside mx-10 my-6 text-sm">
                    <li>Work through and resolve conflict, even around arguments
                      that you’ve been having for years</li>
                      <li>Develop a greater sense of understanding and appreciation for
                        your partner</li>
                        <li>Increase your fondness and love for each other</li>
                        <li>Build soothing and coping strategies to help you and your
                          partner through the inevitable, tough times</li>
                  </ul>
              </p>
            </div>
            <div className="w-full">
              <h2 className="text-3xl">Most couples wait too long…</h2>
              <p>
                Most couples wait too long before they seek the help that they
                need. If you are browsing this page, chances are that it’s time for
                you to take some action.
              </p>
            </div>
            <div className="w-full">
              <h2 className="text-3xl">Imagine how you and your partner would feel
                if you:</h2>
              <p>
                <ul className="list-disc list-outside mx-10 my-6 text-sm">
                  <li>Felt a sense of trust and ease with each other
                  </li>
                    <li>Had confidence and skills to talk about anything without
                      fighting</li>
                      <li>Enjoyed a more passionate sex life</li>
                      <li>Knew how to support each other to be the best version of
                        yourselves</li>
                </ul>
               
              </p>
            </div>
<div class="aspect-w-16 aspect-h-9 mx-auto">
  <div class="w-full" style={{height:'400px'}}>
    <iframe title="Imagine how you and your partner would feel if you" class=" w-full h-full" src="https://www.youtube.com/embed/Ap1TxCYZCHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</div>


          <div className="text-center md:text-left mt-8">
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
