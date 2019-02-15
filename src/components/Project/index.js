import React from 'react'
import { Link } from 'gatsby'
import Author from '../Post/Author'
import Comments from '../Post/Comments'
import Content from '../Post/Content'
import Meta from '../Post/Meta'
import Tags from '../Post/Tags'
import styles from '../Post/Post.module.scss'

const Project = ({ project }) => {
  const { tags, title, date } = project.frontmatter
  const { html } = project
  const { tagSlugs, slug } = project.fields

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/projects">
        All Projects
      </Link>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <Meta data={date} />
        <Tags tags={tags} tagSlugs={tagSlugs} />
        <Author />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={title} />
      </div>
    </div>
  )
}

export default Project
