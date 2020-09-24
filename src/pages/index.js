import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Welcome from "../sections/Welcome"
import Activities from "../sections/Activities"
import AboutMe from "../sections/AboutMe"
import PageLayout from "../components/PageLayout"


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
    <PageLayout>
      <Welcome />
      <Activities></Activities>
      <AboutMe></AboutMe>
      </PageLayout>
  )
}

export default IndexPage
