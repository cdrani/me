import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Page from '../components/Page'
import Pagination from '../components/Pagination'

const ProjectsTemplate = ({ data, pageContext }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = data.site.siteMetadata

  const {
    currentPage,
    hasNextPage,
    hasPrevPage,
    prevPagePath,
    nextPagePath
  } = pageContext

  const { edges } = data.allMarkdownRemark

  const pageTitle =
    currentPage > 0
      ? `Projects - Page ${currentPage} - ${siteTitle}`
      : siteTitle

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Sidebar />
      <Page>
        <Feed edges={edges} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsTemplate {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
      filter: {
        fields: { collection: { eq: "projects" } }
        frontmatter: { template: { eq: "project" } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
            technologies
            hero {
              childImageSharp {
                fluid(maxWidth: 960) {
                  aspectRatio
                  src
                  srcSet
                  sizes
                  originalName
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ProjectsTemplate
