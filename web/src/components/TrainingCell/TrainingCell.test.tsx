import { render } from '@redwoodjs/testing/web'

import { Empty, Loading, Success } from './TrainingCell'
import { standard } from './TrainingCell.mock'

describe('TrainingCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })

  it('renders Empty successfully', async () => {
    expect(() => {
      render(<Empty />)
    }).not.toThrow()
  })

  it('renders Success successfully', async () => {
    expect(() => {
      render(<Success training={standard().training} />)
    }).not.toThrow()
  })
})
