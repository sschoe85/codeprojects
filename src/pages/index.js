import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GlobalStyles from "../components/GlobalStyles"
import Header from "../components/Header"
import Welcome from "../sections/Welcome"
import Activities from "../sections/Activities"

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
    <div>
      <GlobalStyles />
      <Header />
      <Welcome />
      <Activities></Activities>
    </div>
  )
}

export default IndexPage
