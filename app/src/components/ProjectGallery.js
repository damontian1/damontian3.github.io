import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

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
              fluid {
                src
                originalName
              }
            }
          }
        }
      }
    }
  `)
  // const a = data.images.edges.filter(item => item.node.childImageSharp.fluid.originalName === "extra.png").map(item => item.node.childImageSharp.fluid.src)
  // console.log(a)

  return (
    <section id="work-gallery" className="py-12">
      <div className="gap-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 py-8">
        {data.allDataJson.edges.map(item => {
          let matched = data.images.edges.filter(elem => elem.node.childImageSharp.fluid.originalName == item.node.tag).map(elem => elem.node.childImageSharp.fluid.src);
          return (
            <div className="card" key={item.node.id}>
              <Link to={`/project/${item.node.id}`}>
                <img src={matched[0]} className="rounded" alt="" />
              </Link>
            </div>
          )
        })}
      </div>
    </section >
  )
}

export default ProjectGallery
