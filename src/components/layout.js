import React from "react"
import "./layout.css"
import AppContext from "../contexts/app_context"
import Header from "./header"
import Main from "./main"
import Footer from "./footer"

import "../lib/font_awesome"
import i18n from "../lib/i18n"

const Layout = ({ children, pageContext }) => {
  i18n.changeLanguage(pageContext.langKey)

  return (
    <AppContext.Provider value={{ pageContext: pageContext }}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </AppContext.Provider>
  )
}

export default Layout
