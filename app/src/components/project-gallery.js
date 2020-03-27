import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const ProjectGallery = () => {
  const data = useStaticQuery(graphql`
    {
      __typename
      allDataJson {
        edges {
          node {
            art
            id
          }
        }
      }
    }
  `)

  return (
    <section id="work-gallery" className="py-12">
      <div className="gap-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 py-8">
        {data.allDataJson.edges.map(item => (
          <div className="card" key={item.node.id}>
            <Link to={`/project/${item.node.id}`} state={{ active: true }}>
              <img src={item.node.art} className="rounded" alt="" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectGallery
