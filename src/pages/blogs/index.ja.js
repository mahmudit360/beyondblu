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
        title="トゥメーバヤンビレグ、バイリンガール心理カウンセラー"
        description="臨床心理士。皆さんこんにちは、臨床心理士ーのトゥメー　バヤンビレグです。私は,アメリカや東京都内で臨床心理士として長年、トラウマ、うつ病等、不安障害、対人関係他様々な悩みのカウンセリングをお受けしてまいりました。"
      />
      <section className="py-6 md:py-16">
        <div className="container">
          <div className="lg:flex">
            <div className="lg:w-2/3 lg:pr-10">
              <h1 className="page-title b-line">臨床心理士</h1>
              <p>
                皆さんこんにちは、臨床心理士ーのトゥメー　バヤンビレグです。私は,アメリカや東京都内で臨床心理士として長年、トラウマ、うつ病等、不安障害、対人関係他様々な悩みのカウンセリングをお受けしてまいりました。
              </p>
              <p>
                外国人の臨床心理士の立場から言いますと日本人は我慢強く、人の目を気にし、相談者様の多くは問題がかなり深刻化してからカウンセリングを受けられるのが現状です。私が学生時代を過ごしたドイツやアメリカでは人生に一度はカウンセリング受けたという人は半数以上です。欧米のように心理カウンセリングが一般的になるよう日本の文化・風習等を配慮した心理カウンセリング・心理療法を心かけています。
              </p>
              <h3>得意な心理療法</h3>
              <p>
                私は、トラウマあるいは心的外傷後ストレス障害（PTSD）と境界人格障害のクライアントさんの問題を主にサポートしていますがどんな心の悩みに対応致します。そして、境界性パーソナリティ障害（BPD）に効果的な認知行動療法と言われている弁証法的行動療法DBT(Dialectical
                Behavior
                Therapy)、情緒や行動に影響を及ぼしている認知的要因を積極的に治療標的として扱っている認知行動療法CBT(Cognitive
                Behavioral Therapy)
                、自分の価値を再発見・再自覚し，それに基づき自分のペースで行動していくことを治療目的としているアクセプタンス・コミットメント療法(ACT),トラウマフォーカスト認知行動療法（TF-CBT）などの療法は私は得意とします。
              </p>
              <table className="-ml-3">
                <tr>
                  <td className="p-3">フォーレストインスティテュート</td>
                  <td className="p-3 whitespace-no-wrap">米国</td>
                  <td className="p-3 whitespace-no-wrap">臨床心理士学</td>
                  <td className="p-3 whitespace-no-wrap">修士</td>
                </tr>
                <tr>
                  <td className="p-3">東京外国語大学</td>
                  <td className="p-3 whitespace-no-wrap">日本</td>
                  <td className="p-3 whitespace-no-wrap">日本語・社会学</td>
                  <td className="p-3 whitespace-no-wrap">学士</td>
                </tr>
              </table>
              <p>
                日本心理学会、会員番号: #210020
                <br />
                日本パーソナリティ心理学会、会員番号: #00151962
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
