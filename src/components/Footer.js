import React from "react"

const Footer = () => {
  return (
    <section id="footer" className="bg-gray-100">
      <footer className="container mx-auto py-16">
        <div className="flex justify-evenly">
          <div className="text-gray-800 hidden sm:block">
            <p className="pb-5 text-black uppercase text-sm">
              <strong>Site Info</strong>
            </p>
            <p>© 2019 | By Damon Tian</p>
            <p>Built with: Gatsby.js</p>
            <p>Tailwind, React.js</p>
          </div>
          <div className="text-gray-800">
            <p className="pb-5 text-black uppercase text-sm">
              <strong>Contact Info</strong>
            </p>
            <p>Damon Tian</p>
            <p>New York, NY</p>
            <p>damontian@live.com</p>
          </div>
          <div className="text-gray-800">
            <p className="pb-5 text-black uppercase text-sm">
              <strong>Connect with me</strong>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/damontian1" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
            <p>
              <a href="https://github.com/damontian1" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
            <p>
              <a href="https://codepen.io/damontian1/pens/loved" target="_blank" rel="noopener noreferrer">CodePen</a>
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer
