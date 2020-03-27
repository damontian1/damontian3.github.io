import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "./layout"
import SEO from "./seo"
import Error from "../pages/404"

const ProjectDetails = props => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        edges {
          node {
            github
            website
            title
            stack
            slogan
            objective
            art
            id
          }
        }
      }
    }
  `)
  if (props.location.state && props.location.state.active) {
    return (
      <Layout>
        <SEO title="Project Description" />
        <section id="project-description" className="py-12">
          <div>
            {data.allDataJson.edges
              .filter(item => item.node.id === props.id)
              .map(item => (
                <div className="max-w-screen-sm" key={item.node.id}>
                  <h2 className="font-bold leading-tight text-3xl sm:text-4xl">
                    {item.node.title}
                  </h2>
                  <img className="max-w-sm w-full my-8 rounded" alt="" src={item.node.art} />
                  <div className="mb-6">
                    <span className="uppercase font-bold">Objective</span>
                    <p>{item.node.objective}</p>
                  </div>
                  <div className="mb-6">
                    <div>
                      <span className="uppercase font-bold">Website</span>
                    </div>
                    <a href={item.node.website} className="underline">{item.node.website}</a>
                  </div>
                  <div className="mb-6">
                    <div>
                      <span className="uppercase font-bold">Github</span>
                    </div>
                    <a href={item.node.github} className="underline">{item.node.github}</a>
                  </div>
                  <div>
                    <div>
                      <span className="uppercase font-bold">Tech Stack</span>
                    </div>
                    {item.node.stack.map((item, i) => (
                      <span key={i} className="inline-block bg-gray-200 mr-1 mb-2 px-2 py-1">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    )
  } else {
    return (
      <Error />
    )
  }

}
export default ProjectDetails
