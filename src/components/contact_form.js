import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
import AppContext from "../contexts/app_context"

export default () => {
  const { t } = useTranslation("contactForm")
  const appContext = useContext(AppContext)
  const { langKey } = appContext.pageContext

  const action = langKey === "en" ? "/access?success" : "/ja/access?success"

  return (
    <form
      action={action}
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="form-group">
        <label>{t("Name")}</label>
        <input type="text" name="name" required />
      </div>
      <div className="form-group">
        <label>{t("E-mail")}</label>
        <input type="email" name="email" required />
      </div>
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
        <button className="btn btn-orange">{t("Send message")}</button>
      </div>
    </form>
  )
}
