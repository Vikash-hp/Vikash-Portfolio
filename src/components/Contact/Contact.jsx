import React from 'react'
import styles from "./Contact.module.css"
import { getImageUrl } from '../../utils'

export default function Contact() {
  return <footer id="contact" className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt={"EmailIcon"} />
            <a href="mailto:vikash2206133@gmail.com">vikash2206133@gmail.com</a>
        </li>
        <li  className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt={"linkedinIcon"} />
            <a href="https://www.linkedin.com/in/vikash-kumar-8b665a259/">linkedin.com/vikash-kumar</a>
        </li>

        <li  className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt={"linkedinIcon"} />
            <a href="https://github.com/Vikash-hp">github.com/vikash-kumar</a>
        </li>
    </ul>
    
  </footer>
}
