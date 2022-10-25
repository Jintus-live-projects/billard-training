import { render } from '@redwoodjs/testing/web'

import Billard from './Billard'

describe('Billard', () => {
  it('should renders successfully', () => {
    expect(() => {
      render(<Billard />)
    }).not.toThrow()
  })

  it('should renders children', () => {
    const { getByText } = render(<Billard>Mock</Billard>)
    expect(getByText('Mock')).toBeInTheDocument()
  })
})
