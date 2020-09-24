import React from "react"
import Card from "../components/Card"
import styled from "@emotion/styled"
import SectionHeader from "../components/SectionHeader"
import { graphql, useStaticQuery } from "gatsby"

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 60px));
  @media (min-width: 900px) {
    grid-template-columns: repeat(8, minmax(auto, 60px));
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(12, minmax(auto, 60px));
  }
  grid-gap: 40px;
  align-items: center;
  justify-content: center;

  & * {
    grid-column: span 4;
  }
`

function CardSection({ section }) {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              section
            }
          }
        }
      }
    }
  `)
  const frontmatterItems = edges
    .map(edge => edge.node.frontmatter)
    .filter(frontMatterItem => frontMatterItem.section === section)
  return (
    <>
      <SectionHeader>{section}</SectionHeader>
      <Section>
        {frontmatterItems.map(frontmatterItem => (
          <Card
            key={frontmatterItem.title}
            front={frontmatterItem.title}
            back=""
          />
        ))}
      </Section>
    </>
  )
}

export default CardSection
