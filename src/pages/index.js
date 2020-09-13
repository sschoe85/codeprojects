import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GlobalStyles from "../components/GlobalStyles"
import Welcome from "../components/WelcomeBackground"

function IndexPage(props) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <GlobalStyles>
      <Welcome>
        <h1>Hallo</h1>
        {data.site.siteMetadata.title}
      </Welcome>
    </GlobalStyles>
  )
}

export default IndexPage
