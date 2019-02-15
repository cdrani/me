'use strict'

const path = require('path')
const siteConfig = require('../../config.js')

module.exports = async (graphql, actions) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: { template: { eq: "project" }, draft: { ne: true } }
        }
      ) {
        totalCount
      }
    }
  `)

  const { projectsPerPage } = siteConfig
  const numPages = Math.ceil(
    result.data.allMarkdownRemark.totalCount / projectsPerPage
  )

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? '/projects' : `/page/${i}`,
      component: path.resolve('./src/templates/projects-template.js'),
      context: {
        currentPage: i,
        postsLimit: projectsPerPage,
        postsOffset: i * projectsPerPage,
        prevPagePath: i <= 1 ? '/' : `/page/${i - 1}`,
        nextPagePath: `/page/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1
      }
    })
  }
}
