import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const ProjectGallery = () => {
  const data = useStaticQuery(graphql`
    {
      allDataJson {
        edges {
          node {
            tag
            id
          }
        }
      }
      images: allFile(filter: {extension: {eq: "png"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
                originalName
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
          let matched = data.images.edges.filter(elem => elem.node.childImageSharp.fluid.originalName === item.node.tag).map(elem => elem.node.childImageSharp.fluid);
          return (
            <div className="card" key={item.node.id}>
              <Link to={`/project/${item.node.id}`}>
                <Img fluid={matched[0]} className="rounded" alt="" />
              </Link>
            </div>
          )
        })}
      </div>
    </section >
  )
}

export default ProjectGallery
