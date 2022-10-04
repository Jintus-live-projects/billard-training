import { LocationProvider } from '@redwoodjs/router'
import { render } from '@redwoodjs/testing/web'

import TopbarLink from './TopbarLink'

describe('TopbarLink', () => {
  it('should render children', () => {
    const { container } = render(
      <TopbarLink to="/mockPath">Children</TopbarLink>
    )
    expect(container.querySelector('a')).toBeInTheDocument()
  })

  it('should have active class', () => {
    const { container } = render(
      <LocationProvider location={{ pathname: '/mockPath' }}>
        <TopbarLink to="/mockPath">Children</TopbarLink>
      </LocationProvider>
    )
    expect(container.querySelector('a')).toHaveClass('border-secondary')
  })

  it('should not have inactive class', () => {
    const { container } = render(
      <LocationProvider location={{ pathname: '/mockPathOther' }}>
        <TopbarLink to="/mockPath">Children</TopbarLink>
      </LocationProvider>
    )
    expect(container.querySelector('a')).toHaveClass('border-transparent')
  })
})
