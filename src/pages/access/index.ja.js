import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Map from "../../components/map"
import AccessDetails from "../../components/access_details"
import ContactForm from "../../components/contact_form"

const Index = props => {
  return (
    <Layout {...props}>
      <SEO
        title="アクセス、サイコセラピー・心理カウンセリング東京"
        description="アクセス＆問い合わせ。東京メトロ日比谷線、東西線の茅場町J駅から徒歩1分です。東京メトロ日比谷線、東西線とも、地上改札階についたら、出口１を出て下さい。"
      />
      <section className="py-6 md:py-16">
        <div className="container">
          <div className="md:flex">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-10">
              {props.location.search === "?success" ? (
                <div className="alert alert-success">
                  ご連絡頂き誠にありがとうございます。
                </div>
              ) : (
                <>
                  <h1 className="page-title b-line">アクセス＆問い合わせ</h1>
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
            都営地下鉄浅草線、宝町駅、A１とA２出口から徒歩3分、東京メトロ銀座線の京橋駅、出口１と４から徒歩4分です。
          </p>
        </div>
      </section>

      <Map />
    </Layout>
  )
}

export default Index
