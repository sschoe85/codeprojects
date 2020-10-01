import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Welcome from "../sections/Welcome"
import Activities from "../sections/Activities"
import AboutMe from "../sections/AboutMe"
import PageLayout from "../components/PageLayout"
import SignUp from "../sections/SignUp"
import { Helmet } from "react-helmet"

function IndexPage(props) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          keywords
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
        <meta name="author" content={data.site.siteMetadata.author} />
        <link rel="canonical" href="www.code-projects.de" />
      </Helmet>
      <PageLayout>
        <Welcome />
        <Activities></Activities>
        <SignUp />
        <AboutMe></AboutMe>
      </PageLayout>
    </>
  )
}

export default IndexPage
