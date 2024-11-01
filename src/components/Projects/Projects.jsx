import React from 'react'
import styles from "./Projects.module.css"
import project from "../Data/projects.json"
import ProjectCard from './ProjectCard'


export default function Projects() {
  return <section className={styles.container} id='projects'>
    <h2 className={styles.title}>Projects</h2>
    <div className={styles.projects}>
        {
            project.map((project,id)=>{
                return (
                    <ProjectCard key={id} project={project}/>
                )
            })
        }
    </div>
  </section>
}
