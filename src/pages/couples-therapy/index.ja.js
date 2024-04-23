import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { BookingButton } from "../../components/buttons"

const Index = props => {
  return (
    <Layout {...props}>
      <SEO
        title="カップルカウンセリング、夫婦・家族カウンセリング東京"
        description="家族・夫婦・カップルカウンセリング。誰にも相談できない夫婦の悩みや、話し合いで解決できない夫婦の問題があると、「もう離婚しかないの……?」と追い詰められてしまいませんか?　そんなときは、「夫婦カウンセリング」を受けてみるのもひとつの手です。そして、２人で一緒にカウンセリングを行うことで、お互い感情的になってしまい伝えられない本意を伝え、わかり合えるようになり、カップル・ご夫婦２人で今できること、すべきことが分かり始めます。"
      />
      <section className="py-6 md:py-16 bg-image bg-image-plant">
        <div className="container">
          <div className="lg:flex">
            <div className="lg:w-2/3">
              <h1 className="page-title b-line">
                家族・夫婦・カップルカウンセリング
              </h1>
              <p>
                誰にも相談できない夫婦の悩みや、話し合いで解決できない夫婦の問題があると、「もう離婚しかないの……?」と追い詰められてしまいませんか?　そんなときは、「夫婦カウンセリング」を受けてみるのもひとつの手です。そして、２人で一緒にカウンセリングを行うことで、お互い感情的になってしまい伝えられない本意を伝え、わかり合えるようになり、カップル・ご夫婦２人で今できること、すべきことが分かり始めます。
              </p>
              <h3>たとえばこんな問題があります。</h3>
              <ul className="list-disc list-inside">
                <li>別居や離婚の危機</li>
                <li>別居や家庭内別居が長引いている</li>
                <li>パートナーの不倫・浮気が発覚した</li>
                <li>セックスレス・会話レス</li>
                <li>情はあるが愛情はなくなった</li>
                <li>相手はいつも逃げる</li>
                <li>相手の本音がわからない</li>
                <li>やり直すきっかけがつかめない</li>
                <li>
                  パートナーが精神的に病んでいる（神経症・うつ・人格障害など）のではないかと思う
                </li>
                <li>不信感</li>
                <li>対人恐怖（視線恐怖・自己臭）</li>
                <li>不妊治療にからむ諸問題</li>
                <li>やり直すためのきっかけ</li>
                <li>育児や教育方針の違い</li>
                <li>人とうまく付き合えない</li>
                <li>コミュニケーションの問題</li>
                <li>不倫・浮気・DV</li>
              </ul>

              <p>
                家族間だけで話していても拉致があかなくなってきた時、或いは、ご家族皆なで一緒に考えてみたい相談事など、お気軽にお問い合わせ下さい。
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
