/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import AppContext from "../contexts/app_context"

const SEO = ({ description, lang, meta, title }) => {
  const appContext = useContext(AppContext)
  const { langKey } = appContext.pageContext

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const titleBase = langKey === "en" ? "BeyondBleu" : "ビヨンド・ブルー"
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang: langKey,
      }}
      title={title}
      titleTemplate={`%s | ${titleBase}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `google-site-verification`,
          content: "GBEVneq7xrNfxmjQHAR52-QoRNR413dTIJ9QH8cXd6s",
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      {/* Preload Google fonts */}
      {/* <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&amp;family=Noto+Sans+JP:wght@300;400;700&amp;display=swap"
        as="style"
      /> */}
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&amp;family=Noto+Sans+JP:wght@300;400;700&amp;display=swap"
        rel="stylesheet"
      />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-H7KVYDMBLJ"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-H7KVYDMBLJ');
        `}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
