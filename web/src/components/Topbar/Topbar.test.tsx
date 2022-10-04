import { render } from '@redwoodjs/testing/web'

import Topbar from 'src/components/Topbar/Topbar'

describe('Topbar', () => {
  it('should display a link', () => {
    const { container } = render(<Topbar />)
    expect(container.querySelectorAll('a')).toHaveLength(1)
  })
})
