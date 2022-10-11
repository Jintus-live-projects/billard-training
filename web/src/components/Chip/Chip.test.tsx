import { render } from '@redwoodjs/testing/web'

import Chip from './Chip'

describe('Chip', () => {
  it('should render given children', () => {
    const component = render(<Chip>mock</Chip>)
    expect(component.getByText('mock')).toBeInTheDocument()
  })

  it('should set aria-selected to true when active', () => {
    const component = render(<Chip isActive>mock</Chip>)
    expect(
      component.container.querySelector('[aria-selected="true"]')
    ).toBeDefined()
  })

  it('should set aria-selected to false when inactive', () => {
    const component = render(<Chip>mock</Chip>)
    expect(
      component.container.querySelector('[aria-selected="false"]')
    ).toBeDefined()
  })
})
