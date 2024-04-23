import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
import AppContext from "../contexts/app_context"

export default () => {
  const { t } = useTranslation("bookingForm")
  const appContext = useContext(AppContext)
  const { langKey } = appContext.pageContext

  const action = langKey === "en" ? "/booking?success" : "/ja/booking?success"

  return (
    <form
      action={action}
      name="booking"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="booking" />
      <div className="form-group">
        <label>{t("Name")}</label>
        <input type="text" name="name" required />
      </div>
      <div className="form-group">
        <label>{t("E-mail")}</label>
        <input type="email" name="email" required />
      </div>
      <div className="form-group">
        <label>{t("Phone")}</label>
        <input type="text" name="phone" required />
      </div>
      <hr className="my-6" />
      <div className="form-group">
        <label>{t("Please specify service type")}</label>
        <select name="service_type" required>
          <option>{t("Initial")}</option>
          <option>{t("Individual")}</option>
          <option>{t("Couple")}</option>
          <option>{t("Family")}</option>
        </select>
      </div>
      <div className="form-group">
        <label>{t("Please provide 3 desired appointment dates")}</label>
        <input
          type="text"
          name="appointment_choice_1"
          placeholder={t("First choice")}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="appointment_choice_2"
          placeholder={t("Second choice")}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="appointment_choice_3"
          placeholder={t("Third choice")}
        />
        <div>
          <span className="text-sm text-gray-600">
            {t("appointment_choice_hint")}
          </span>
        </div>
      </div>
      <hr className="my-6" />
      <div className="form-group">
        <label>{t("Message")}</label>
        <textarea name="message" rows="5" required></textarea>
      </div>
      <div className="hidden">
        <label>
          <span>Don’t fill this out if you're human:</span>
          <input name="bot-field" />
        </label>
      </div>
      <div className="text-center lg:text-left">
        <button className="btn btn-orange">{t("Submit booking")}</button>
      </div>
    </form>
  )
}
