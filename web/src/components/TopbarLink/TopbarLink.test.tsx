import { useMatch } from '@redwoodjs/router'
import { render } from '@redwoodjs/testing/web'

import TopbarLink from './TopbarLink'

describe('TopbarLink', () => {
  it('should render children', () => {
    jest.mocked(useMatch).mockReturnValue({ match: false })
    const { getByText } = render(
      <TopbarLink to="/mockPath">Children</TopbarLink>
    )
    expect(getByText('Children')).toBeInTheDocument()
  })

  it('should be active', () => {
    jest.mocked(useMatch).mockReturnValue({ match: true })

    const { container } = render(
      <TopbarLink to="/mockPath">Children</TopbarLink>
    )
    expect(container.querySelector('[aria-selected="true"]')).toBeDefined()
  })

  it('should be inactive', () => {
    jest.mocked(useMatch).mockReturnValue({ match: false })

    const { container } = render(
      <TopbarLink to="/mockPath">Children</TopbarLink>
    )
    expect(container.querySelector('[aria-selected="false"]')).toBeDefined()
  })
})
