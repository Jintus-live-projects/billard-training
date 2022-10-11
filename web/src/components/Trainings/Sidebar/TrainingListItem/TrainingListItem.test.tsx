import { useMatch } from '@redwoodjs/router'
import { render } from '@redwoodjs/testing/web'

import SidebarListItem from 'src/components/Trainings/Sidebar/SidebarListItem/SidebarListItem'

import TrainingListItem from './TrainingListItem'

jest.mock('src/components/Trainings/Sidebar/SidebarListItem/SidebarListItem')

describe('TrainingListItem', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render SidebarListItem', () => {
    jest.mocked(useMatch).mockReturnValue({ match: false })

    render(<TrainingListItem training={{ id: 0, name: 'test' }} />)
    expect(SidebarListItem).toBeCalledWith(
      expect.objectContaining({ value: 'test' }),
      expect.anything()
    )
  })

  it('should render active SidebarListItem', () => {
    jest.mocked(useMatch).mockReturnValue({ match: true })

    render(<TrainingListItem training={{ id: 0, name: 'test' }} />)
    expect(SidebarListItem).toBeCalledWith(
      expect.objectContaining({ isActive: true }),
      expect.anything()
    )
  })

  it('should render inactive SidebarListItem', () => {
    jest.mocked(useMatch).mockReturnValue({ match: false })

    render(<TrainingListItem training={{ id: 0, name: 'test' }} />)
    expect(SidebarListItem).toBeCalledWith(
      expect.objectContaining({ isActive: false }),
      expect.anything()
    )
  })
})
