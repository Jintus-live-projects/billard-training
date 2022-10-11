const useMatch = jest.fn()
// eslint-disable-next-line react/react-in-jsx-scope
const Link = jest.fn((args) => <div {...args} />)

const routes = {
  trainingDetail: jest.fn(),
}

module.exports = {
  ...jest.requireActual('@redwoodjs/router'),
  useMatch,
  Link,
  routes,
}
