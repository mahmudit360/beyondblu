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
        title="トラウマカウンセリング、うつ病・不安障害カウンセリング東京"
        description="生きている以上、誰でも何かしらの問題や壁にぶつかります。そんな時にどう乗り越えたらいいか、どんな捉え方をしたらいいか、前に進むために何をするか等を具体的に一緒に探していく場がカウンセリングです。そして、成長したり、考え方のバリエーションを増やしたり、新しい自分を発見する場でもあります。"
      />
      <main>
          
    <section className="py-6 md:py-16 bg-image-home bg-image-home">
        <div className="container md:w-5/6 ">
          <div className="lg:flex">
            <div className="lg:w-2/3">
              <div className="lg:flex items-center px-15">
                <div className="lg:full">
                  <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl text-center lg:text-left font-normal leading-snug lg:mb-0">
                生きている以上、誰でも何かしらの問題や壁にぶつかります。そんな時にどう
                <strong className="lg:whitespace-no-wrap">乗り越</strong>
                えたらいいか、どんな
                <strong className="lg:whitespace-no-wrap">捉え方</strong>
                をしたらいいか、
                <strong className="lg:whitespace-no-wrap">前に進む</strong>
                ために何をするか等を具体的に一緒に探していく場がカウンセリングです。そして、
                <strong className="lg:whitespace-no-wrap">成長</strong>
                したり、考え方のバリエーションを増やしたり、
                <strong className="lg:whitespace-no-wrap">新しい自分</strong>
                を発見する場でもあります。
              </h1>
                  </div>
                </div>
              </div>
    
              <div className="md:container py-10">
              <div className="max-w-3xl mx-auto">
                  <p class="text-lg">
              初めての方は、慣れない場所に来て、その道のカウンセラーとはいえ初対面の人に話をすることは不安や緊張があって当たり前です。カウンセリングは必ずしも心の悩みや不調がある人だけが受けるものではありません。もちろん、はじめは不快な症状を取り除きたいとか、自分のことをもっと知りたい、生き方を見直したい、人自分の心をごまかしたくない、人間関係の悩みを解消したいという目的で始めることが大半です。
            </p>
            <p class="text-lg">
              私たちは、「人は誰でも自分の問題を解決していく潜在的な力を持っている」と提唱したカール・ロジャーズの来談者中心療法を基本姿勢とし、ご相談の方の主体
              性を尊重し、カウンセラーの価値観や決め付けなどによる判断がない姿勢でお話を聴いていきます。
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
                  <div className="uppercase text-sm"> 心理カウンセリング＆企業コンサルティング</div>
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
                <h2>クライアント様のご感想</h2>
              </div>
              <div className=" py-3">
                <div className="lg:w-full mb-6 bg-white p-4 rounded">
                  <p className="mb-0 text-md text-gray-900 text-justify">
                    <FontAwesomeIcon
                      icon="quote-left"
                      className="text-gray-400 mb-2"
                    />{" "}
                    私は冬になると決まって気分が落ち込み、朝起きずらくなり、家事も手抜きになりました。先生に相談すると「冬季うつじゃない？」と言われ、夫に腹が立っていたことを吐き出すと元気になりました。もっと早く気付けばよかった。今まで気づかずにいた生きづらさのようなものを見つけると、カウンセリングを受けて解決することを続けています。過去に味わった不快な感情を思いだし、吐き出すと、想像以上にスッキリし、その夜はグッスリ眠ることができます。
                カウンセリングでは、本当の感情に向き合い、小さい頃に下した自分の決断に気づいていきます。何年も、何十年もふたをしてきたことに向き合うのは、正直なところ、かなりきついと感じるときもあります。3０年以上かかえていた、心の中の黒く重たい感覚が消え、生きていることへの罪悪感がなくなることがありえるなんて。こんなに楽になれるなんて。1年前の私には想像もできないことでした。
                今、何かの問題で苦しんでいる人には、思い切って再決断のカウンセリングを受けて欲しいなと思います。きっとよくなりますよ。{" "}
                    <FontAwesomeIcon
                      icon="quote-right"
                      className="text-gray-400 mb-2"
                    />
                  </p>
                </div>
                <div className="lg:w-full bg-white p-4 rounded">
                  <p className="mb-0 text-md text-gray-900 text-justify">
                    <FontAwesomeIcon
                      icon="quote-left"
                      className="text-gray-400 mb-2"
                    />{" "}
                    バヤンビレグ様、2ヶ月間のカウンセリング誠にありがとうございました。
                私はカウンセリングに行く前まで、自分の失敗などがあった時に自分を責めてしまいがちで、自己肯定感を高める必要があると強く感じていました。
                そのような中カウンセリングを受けていると、なかなか周りの人と話す機会がない心のことを詳細に話すことができ、回数を重ねる中で素直な自分の心、自分のマインドに気づく事ができました。素直な心、マインドを大切にするよう心がけること、自分の人生に対する高い理想を本質的なレベルまで落とし込むこと、自分の長所を見返すこと、深呼吸をすることの4つを意識して日常的に行い続けるうちに、自分に対する不満や将来の自分に対する過度な期待が無くなりました。おかげさまで穏やかに安定した心で今を生きることができるようになりました。
                これからもカウンセリングで学んだことを続けて、穏やかに安定した心で今を生き続けられるよう、意識していきます。{" "}
                    <FontAwesomeIcon
                      icon="quote-right"
                      className="text-gray-400 mb-2"
                    />
                  </p>
                </div>
              </div>
            </div>
              <div className="md:container py-16">
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
