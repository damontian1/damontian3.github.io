const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/Damon/Desktop/damontian1.github.io/app/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Damon/Desktop/damontian1.github.io/app/src/pages/index.js"))),
  "component---src-pages-project-js": hot(preferDefault(require("/Users/Damon/Desktop/damontian1.github.io/app/src/pages/project.js")))
}

