import React, { useContext } from "react"
import AppContext from "../contexts/app_context"
import { Link } from "gatsby"

export default ({ to, ...rest }) => {
  const appContext = useContext(AppContext)
  const { langKey } = appContext.pageContext

  const localisedTo = langKey === "en" ? to : `/ja${to}`

  return <Link to={localisedTo} {...rest} />
}
