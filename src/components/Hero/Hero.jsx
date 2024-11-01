import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export default function Hero() {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vikash Kumar</h1>
        <p className={styles.description}>I'm a full-stack developer and Competitive Programmer. I'm looking for software developer Internship.Explore my work, projects, and contact me for collaborations!</p>
        <a href="mailto:vikash2206133@gmail.com" className={styles.contactBtn}>Contact me</a>
    </div>
    <img src={getImageUrl("hero/profilePic.jpeg")} alt="hero image"  className={styles.heroImg}/>
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>
  </section>
}
