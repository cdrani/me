import React from 'react'
import styles from '../Post/Tags/Tags.module.scss'

const Technologies = ({ technologies }) => (
  <div className={styles['tags']}>
    <ul className={styles['tags__list']}>
      {technologies.map(technology => (
        <li className={styles['tags__list-item']} key={technology}>
          {technology}
        </li>
      ))}
    </ul>
  </div>
)

export default Technologies
