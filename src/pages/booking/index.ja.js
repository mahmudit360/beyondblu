import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AccessDetails from "../../components/access_details"
import BookingForm from "../../components/booking_form"

const Index = props => {
  return (
    <Layout {...props}>
      <SEO
        title="オンライン予約、心理カウンセリング予約東京"
        description="予約＆料金。平日：10:30~19:30。土曜日：11:00~17:30。各カウンセリングは60間です。"
      />
      <section className="py-6 md:py-16">
        <div className="container">
          <div className="md:flex">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-10">
              {props.location.search === "?success" ? (
                <div className="alert alert-success">
                  ご予約頂き誠にありがとうございます。ご予約の可否につきましては２４時間以内にメールをご返信致しますのでもうしばらくお持ちください。急ぎの方は03-5962-3883にお電話をお願い申し上げます。
                </div>
              ) : (
                <>
                  <h1 className="page-title b-line">予約＆料金</h1>
                  <table className="w-full text-left border-t border-b mb-6">
                    <thead>
                      <tr>
                        <th>個人</th>
                        <th>カップル</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>¥15,000</td>
                        <td>¥20,000</td>
                      </tr>
                       <tr>
                        <td>50分</td>
                        <td>80分</td>
                      </tr>
                   </tbody>
                  </table>
                  <h6>ご予約・問い合わせ</h6>
                  <p>
                    毎日：9:00~18:00
                  </p>
                  <h6>キャンセル料金</h6>
                  <p className="text-sm">
                    ２日以前：無料
                    <br />
                    前日：料金の５０％
                    <br />
                    当日または連絡がない場合：料金１００％
                  </p>
                  <BookingForm />
                </>
              )}
            </div>
            <div className="md:w-1/3 md:border-l border-gray-400 md:pl-10">
              <AccessDetails />
              <div>
                <h6 className="mb-4 mt-8">Psychotherapy Japan LLC</h6>
                会社名 : サイコセラピージャパン合同会社
                <br />
                りそな銀行
                <br />
                支店番号 : 268 新橋支店
                <br />
                普通口座
                <br />
                口座番号 : 1969641
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
