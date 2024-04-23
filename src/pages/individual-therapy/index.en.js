import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { BookingButton } from "../../components/buttons"

const Index = props => {
  return (
    <Layout {...props}>
      <SEO
        title="Individual Therapy | Therapy for Anxiety and Depression in Tokyo"
        description="Psychotherapy provides help with a large range of challenges from anxiety, depression, and low self-esteem, to difficulties in intimate relationships, at work or career conflicts."
      />
      <section className="py-6 md:py-16 bg-image bg-image-plant">
        <div className="container">
          <div className="lg:flex">
            <div className="lg:w-2/3">
              <h1 className="page-title b-line">Individual Therapy</h1>
              <h2 className="font-light text-4xl">
                Psychotherapy provides help with a large range of challenges
                from <strong>anxiety</strong>, <strong>depression</strong>, and{" "}
                <strong>low self-esteem</strong>, to difficulties in intimate
                relationships, at work or career conflicts.
              </h2>
              <p className="text-lg">
                For the most, psychotherapy is a conversation about you, about
                the challenges you are facing in life, and how to master them.
                The ultimate goal of psychotherapy is to enhance our quality of
                life.
              </p>
              <p className="text-lg">
                Maybe you're searching— therapist near me—because you're
                starting to realize you can't solve the problem you are facing
                on your own. Now you've taken that first step and searched for
                solutions. Next comes taking that information and getting
                started on the road to a better quality of life.
              </p>
              <p className="text-lg">
                Psychotherapy helps. It provides you with tools and insights
                when you have difficulty dealing with life. In clinical
                psychology, talk therapy helps you work through trauma, grief,
                medical illness, and even depression and anxiety. A
                psychotherapist specializes in interpersonal, behavioral, and
                talk-based strategies leading to change and solutions.
              </p>
              <p className="text-lg">
                Depending on the client's specific needs, the treatment can be
                very brief (two consultations) or last months and even years if
                there is long-standing trauma or a severe condition. If you
                haven't felt comfortable with a prior's provider, it is
                important to keep searching for someone whom you will be able to
                share your experiences safely and honestly.
              </p>
              <p className="text-lg">
                I specialize in psychotherapy, cognitive behavioral therapy, and
                accelerated experiential-dynamic psychotherapy, as well as other
                treatments used in clinical psychology. My main line of work is
                integrative. I work with a broad range of difficulties, such as
                relationship conflicts, self-esteem, identity conflicts, and
                mood and anxiety disturbances.
              </p>
              <div className="text-center md:text-left">
                <BookingButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
