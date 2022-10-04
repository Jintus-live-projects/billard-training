import { render } from '@redwoodjs/testing/web'

import TrainingDetailPage from './TrainingDetailPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TrainingDetailPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TrainingDetailPage />)
    }).not.toThrow()
  })
})
