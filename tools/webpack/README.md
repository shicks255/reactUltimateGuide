
Our src/index.js files has a dependency on lodash _, although that is never excplicitly declared.  As we can see, the src/index.js file just expects to have the lodash _ global varliable

Webpack is a bundler that attempts to solve this messy problem.