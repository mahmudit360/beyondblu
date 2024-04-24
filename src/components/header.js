import React, { useContext, useState } from "react"
import AppContext from "../contexts/app_context"
import { Link as GatsbyLink } from "gatsby"
import Link from "./app_link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTranslation } from "react-i18next"

const Nav = () => {
  const { t } = useTranslation()
  const [isOpen, open] = useState(false)

  return (
    <>
      <button className="nav-menu-btn p-3 -mr-3" onClick={() => open(!isOpen)}>
        <FontAwesomeIcon icon="bars" className="text-gray-900" />
      </button>
      <nav
        className={`nav-menu ${isOpen ? "nav-menu--open" : ""}`}
        // onClick={() => open(false)} // Force-close nav if current page link is tapped
      >
        <Link to="/">{t("Home")}</Link>
        <Link to="/about">{t("About")}</Link>
        <Link to="/individual-therapy">{t("Individuals")}</Link>
        <Link to="/couples-therapy">{t("Couples")}</Link>
        <Link to="/relationship-counseling">{t("Relationships")}</Link>
        <Link to="/booking">{t("Booking")}</Link>
        <Link to="/access">{t("Access")}</Link>
      </nav>
    </>
  )
}

// const DropdownMenu = () => {
//   const [isOpen, open] = useState(false)

//   return (
//     <div className="dropdown-menu">
//       <span className="uppercase inline-block p-5 cursor-default">
//         Services
//       </span>
//       <div className="dropdown-menu-sub-menu pl-5 lg:pl-0">
//         <Link
//           to="/services/therapy-for-depression"
//           className="p-5 uppercase whitespace-no-wrap block"
//         >
//           Therapy for Depression
//         </Link>
//         <Link
//           to="/services/therapy-for-anxiety"
//           className="p-5 uppercase whitespace-no-wrap block"
//         >
//           Therapy for Anxiety
//         </Link>
//         <Link
//           to="/services/therapy-for-self-esteem"
//           className="p-5 uppercase whitespace-no-wrap block"
//         >
//           Therapy for Self-Esteem
//         </Link>
//         <Link
//           to="/services/relationship-counseling"
//           className="p-5 uppercase whitespace-no-wrap block"
//         >
//           Relationship Counseling
//         </Link>
//       </div>
//     </div>
//   )
// }

export default () => {
  const appContext = useContext(AppContext)
  const { pageContext } = appContext

  return (
    <header className="fixed z-10 w-full bg-white shadow-lg top-0">
      <div className="bg-primary text-white h-10 flex items-center relative">
        <div className="container text-right relative">
          <a className="md:mx-2 no-underline" href="tel:03-5962-3883">
            <FontAwesomeIcon icon="phone" className="mr-1" /> 03-5962-3883
          </a>
          <a
            className="hidden md:inline mx-2 no-underline"
            href="mailto:info@beyondbleu.com"
          >
            <FontAwesomeIcon icon="envelope" className="mr-1" />{" "}
            info@beyondbleu.com
          </a>
          <span className="hidden md:inline">
            <a
              href="https://www.instagram.com/beyondbleu_psychotherapy/"
              title="Follow me on Instagram"
              className="mx-1"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} className="mr-0" />
            </a>
          </span>
          <span className="mx-3 opacity-25 border-r border-white"></span>{" "}
          {pageContext.langKey === "en" ? (
            <GatsbyLink to={`/ja${pageContext.slug}`} className="no-underline">
              <span className="flag-icon flag-icon-jp mr-1"></span>{" "}
              <span className="font-ja">日本語</span>
            </GatsbyLink>
          ) : (
            <GatsbyLink
              to={`${pageContext.slug.replace("/ja", "")}`}
              className="no-underline"
            >
              <span className="flag-icon flag-icon-us mr-1"></span> English
            </GatsbyLink>
          )}
        </div>
      </div>
      <div className="">
        <div className="container">
          <div className="flex h-20 items-center justify-between relative">
            <div className="lg:hidden"></div>
            <Link to="/">
              <img
                src={require("../images/beyond-bleu.svg")}
                className="h-16"
                alt="Beyond Bleu - Psychotherapy &amp; Counseling"
              />
            </Link>
            <Nav />
          </div>
        </div>
      </div>
    </header>
  )
}
