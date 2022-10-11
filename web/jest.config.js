const path = require('path')
// More info at https://redwoodjs.com/docs/project-configuration-dev-test-build
const config = {
  rootDir: '../',
  preset: '@redwoodjs/testing/config/jest/web',
  roots: ['<rootDir>/web', path.resolve(__dirname, '../__mocks__')],
}

module.exports = config
