import React from "react"

const Banner = () => {
  return (
    <section id="banner" className="py-2 sm:py-10">
      <div className="max-w-screen-sm mx-auto py-8">
        <div>
          <h1 className="font-bold leading-tight text-3xl sm:text-4xl">
            <span className="block pb-5">Hey, you found me!</span> I’m Damon, a
            Web Developer from New York City and I love building beautiful
            and intuitive web applications.
          </h1>
          <hr className="my-8" />
          <h4 className="mb-8 text-gray-800">
            <strong className="block text-black">My Top Skills:</strong>{" "}
            HTML/CSS, JavaScript, React.js, Laravel, Statamic CMS,
            Node.js/Express.js, Docker, Ruby, Ruby on Rails, MongoDB, MySQL,
            PostgreSQL, WordPress, Git/Github, Bootstrap, Sketch
          </h4>
          <div>
            <a
              className="btn mb-3 sm:mb-0"
              href="https://drive.google.com/file/d/17hPBvj_j4x9EQ9xdu-npg9hrNG9VKUA4/view"
            >
              SEE MY RESUME
            </a>
            <a className="btn" href="mailto:damontian@live.com">
              SEND ME A MESSAGE
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
