import { routes } from '@redwoodjs/router'
import { render } from '@redwoodjs/testing/web'

import Topbar from 'src/components/Topbar/Topbar'
import TopbarLink from 'src/components/TopbarLink/TopbarLink'

jest.mock('src/components/TopbarLink/TopbarLink')

describe('Topbar', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should display a TopbarLink', () => {
    render(<Topbar />)
    expect(TopbarLink).toBeCalledTimes(1)
  })

  it('should call TopbarLink with good arguments', () => {
    jest.mocked(routes.trainingDetail).mockReturnValue('mock' as '/trainings')
    render(<Topbar />)
    expect(TopbarLink).toBeCalledWith(
      {
        to: 'mock',
        children: 'Entraînement',
      },
      {}
    )
  })
})
