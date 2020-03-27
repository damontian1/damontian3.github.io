import React from "react"
import { Router } from '@reach/router'
import ProjectDetails from '../components/ProjectDetails';


const Project = () => (
  <Router basepath="/project">
    <ProjectDetails path="/:id" />
  </Router>
)

export default Project