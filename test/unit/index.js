// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../app/src/renderer', true, /^\.\/(?!main(\.js)?$)/)
srcContext.keys().forEach(srcContext)
const srcGuestContext = require.context('../../app/src/guest/renderer', true, /^\.\/(?!main(\.js)?$)/)
srcGuestContext.keys().forEach(srcGuestContext)
