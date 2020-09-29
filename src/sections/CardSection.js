import React from "react"
import Card from "../components/Card"
import styled from "@emotion/styled"
import SectionHeader from "../components/SectionHeader"
import { graphql, useStaticQuery } from "gatsby"

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

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
            html
            frontmatter {
              front
              section
            }
          }
        }
      }
    }
  `)

  const nodes = edges
    .map(edge => edge.node)
    .filter(node => node.frontmatter.section === section)
  return (
    <SectionContainer>
      <SectionHeader>{section}</SectionHeader>
      <Section>
        {nodes.map(node => (
          <Card
            key={node.frontmatter.front}
            front={{ __html: `${node.frontmatter.front}` }}
            back={{ __html: `${node.html}` }}
          />
        ))}
      </Section>
    </SectionContainer>
  )
}

export default CardSection
