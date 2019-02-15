import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Project from '../components/Project'

const ProjectTemplate = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = data.site.siteMetadata

  const {
    title: projectTitle,
    description: projectDescription
  } = data.markdownRemark.frontmatter

  const metaDescription =
    projectDescription !== null ? projectDescription : siteSubtitle

  return (
    <Layout
      title={`${projectTitle} - ${siteTitle}`}
      description={metaDescription}
    >
      <Project project={data.markdownRemark} />
    </Layout>
  )
}

export const query = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        author {
          name
          contacts {
            twitter
          }
        }
        disqusShortname
        subtitle
        title
        url
      }
    }
    markdownRemark(
      fields: { collection: { eq: "projects" }, slug: { eq: $slug } }
    ) {
      id
      html
      fields {
        tagSlugs
        categorySlug
      }
      frontmatter {
        date
        description
        tags
        title
      }
    }
  }
`

export default ProjectTemplate
