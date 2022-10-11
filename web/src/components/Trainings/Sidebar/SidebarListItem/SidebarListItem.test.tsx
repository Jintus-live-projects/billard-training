import { render } from '@redwoodjs/testing/web'

import SidebarListItem from './SidebarListItem'

describe('SidebarListItem', () => {
  it('should display given value', () => {
    const component = render(<SidebarListItem value={'test'} />)
    expect(component.getByText('test')).toBeInTheDocument()
  })

  it('should be selected when active', () => {
    const component = render(<SidebarListItem value={'test'} isActive />)
    expect(
      component.container.querySelector('[aria-selected="true"]')
    ).toBeDefined()
  })

  it('should not be selected when not active', () => {
    const component = render(<SidebarListItem value={'test'} />)
    expect(
      component.container.querySelector('[aria-selected="false"]')
    ).toBeDefined()
  })
})
