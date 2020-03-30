import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const ProjectGallery = () => {
  const data = useStaticQuery(graphql`
    {
      allDataJson {
        edges {
          node {
            id
            url {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section id="work-gallery" className="py-12">
      <div className="gap-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 py-8">
        {data.allDataJson.edges.map(item => {
          return (
            <div className="card" key={item.node.id}>
              <Link to={`/project/${item.node.id}`}>
                <Img fluid={item.node.url.childImageSharp.fluid} className="rounded" alt="" />
              </Link>
            </div>
          )
        })}
      </div>
    </section >
  )
}

export default ProjectGallery
