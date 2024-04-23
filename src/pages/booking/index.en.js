import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AccessDetails from "../../components/access_details"
import BookingForm from "../../components/booking_form"

const Index = props => {
  return (
    <Layout {...props}>
      <SEO
        title="Online Booking | Book Psychotherapy &amp; Counseling Services in Tokyo"
        description="Online Booking for English Speaking Therapist in Tokyo. Individual Therapy, Couples Therapy, and Relationship Counseling."
      />
      <section className="py-6 md:py-16">
        <div className="container">
          <div className="md:flex">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-10">
              {props.location.search === "?success" ? (
                <div className="alert alert-success">
                  Thank you for your booking request. I will be in touch
                  shortly.
                </div>
              ) : (
                <>
                  <h1 className="page-title b-line">Online booking</h1>
                  <table className="w-full text-left border-t border-b mb-6">
                    <thead>
                      <tr>
                        <th>Individual</th>
                        <th>Couple</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>              
                        <td>¥15,000</td>
                        <td>¥20,000</td>
                      </tr>
                      <tr>              
                        <td>50 minutes</td>
                        <td>80 minutes</td>
                      </tr>
                    </tbody>
                  </table>
                  <h6>Appointments and Inquiries</h6>
                  <p>
                    Monday to Sunday (Everyday): 9:00~18:00
                  </p>
                  <h6>Cancelation policy</h6>
                  <p className="text-sm">
                    2 days before: will be rescheduled without charge
                    <br />
                    A day before: will be charged 50%
                    <br />
                    On the same day: will be charged 100%
                  </p>
                  <BookingForm />
                </>
              )}
            </div>
            <div className="md:w-1/3 md:border-l border-gray-400 md:pl-10">
              <AccessDetails />
              <div>
                <h6 className="mb-4 mt-8">Psychotherapy Japan LLC</h6>
                Bank name: Risona
                <br />
                Branch code: 268
                <br />
                Branch: Shimbashi
                <br />
                Account type: Savings Account
                <br />
                Account No: 1969641
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
