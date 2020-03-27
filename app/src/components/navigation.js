import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 230) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      codepen: file(relativePath: {eq: "codepen.svg"}) {
        publicURL
      }
      github: file(relativePath: {eq: "github.svg"}) {
        publicURL
      }
      linkedin: file(relativePath: {eq: "linkedin.svg"}) {
        publicURL
      }
    }
  `)
  return (
    <section id="navigation" className="fixed left-0 right-0 z-50">
      <nav className="border border-l-0 border-r-0 border-t-0">
        <div className="container mx-auto my-5">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="w-40">
              <a href="/">
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
              </a>
            </div>
            <div className="font-bold hidden sm:flex items-center">
              <a href="https://www.linkedin.com/in/damontian1" className="pr-5">
                <img src={data.linkedin.publicURL} alt="" className="w-5" />
              </a>
              <a href="https://github.com/damontian1" className="pr-5">
                <img src={data.github.publicURL} alt="" className="w-5" />
              </a>
              <a href="https://codepen.io/damontian1/pens/loved">
                <img src={data.codepen.publicURL} alt="" className="w-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section >
  )
}

export default Navigation
