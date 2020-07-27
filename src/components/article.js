import React from 'react'
import {Link} from 'gatsby'
import styles from  './_article.module.scss'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunction.js'

const Article = ({ path, title, date, excerpt, fluid, tags }) => {
   return(
      <article className={styles.articleBox}>
         <div className={styles.left}>
            <Img fluid={fluid} alt={title} />
         </div>
         <div className={styles.right}>
            <h3>
             <Link to={path}>{title}</Link>
            </h3>
            <div className={styles.date}>{date}
            </div>
            <div>
               {excerpt}
            </div>
            <div className={styles.tags}>
               {tags.map(tag => (
                  <Link to={`/tag/${slugify(tag)}`}>{tag}</Link> 
               ))}         
            </div>
            <div className={styles.more}>
               <Link to={path}>Read More</Link> 
            </div>
         </div>
      </article>
   )
}

export default Article


/* Batas */
/*
export default (props) => (

   <Link to={props.to}>
      <article className={styles.articleBox} key={props.id}>
         <div className={styles.left}>
            <img src={'https://source.unsplash.com/150x150/?' + props.keywords} alt={props.title} />
         </div>
         <div className={styles.right}>
            <h3>
               {props.title}
            </h3>
            <div className={styles.date}>{props.date}
            </div>
            <div>
               {props.excerpt}
            </div>
         </div>
      </article>
   </Link>

)

*/