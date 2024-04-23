import React from "react"
import Link from "./app_link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTranslation } from "react-i18next"

export const BookingButton = () => {
  const { t } = useTranslation()

  return (
    <Link to="/booking" className="btn btn-orange">
      {t("Book a session with me")} <FontAwesomeIcon icon="chevron-right" />
    </Link>
  )
}
