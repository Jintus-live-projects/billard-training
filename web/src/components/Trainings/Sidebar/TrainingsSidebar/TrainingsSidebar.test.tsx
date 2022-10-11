import { act } from 'react-dom/test-utils'

import { render } from '@redwoodjs/testing/web'

import TrainingsCell from 'src/components/Trainings/Sidebar/TrainingsCell'
import TrainingTagFiltersCell from 'src/components/Trainings/Sidebar/TrainingTagFiltersCell'

import TrainingsSidebar from './TrainingsSidebar'

jest.mock(
  'src/components/Trainings/Sidebar/TrainingTagFiltersCell/TrainingTagFiltersCell'
)
jest.mock('src/components/Trainings/Sidebar/TrainingsCell/TrainingsCell')

describe('TrainingsSidebar', () => {
  it('should render TrainingTagFiltersCell', () => {
    render(<TrainingsSidebar />)
    expect(TrainingTagFiltersCell).toBeCalledWith(
      {
        selectedFilters: [],
        onFilterClicked: expect.any(Function),
      },
      {}
    )
  })

  it('should render TrainingsCell', () => {
    render(<TrainingsSidebar />)
    expect(TrainingsCell).toBeCalledWith(
      {
        selectedTags: [],
      },
      {}
    )
  })

  it('should filter on clicked tag', () => {
    let onFilterClickedMock
    jest
      .mocked(TrainingTagFiltersCell)
      .mockImplementationOnce(({ onFilterClicked }) => {
        onFilterClickedMock = onFilterClicked
        return <></>
      })

    render(<TrainingsSidebar />)

    act(() => {
      onFilterClickedMock('mock')
    })

    expect(TrainingsCell).toHaveBeenLastCalledWith(
      {
        selectedTags: ['mock'],
      },
      {}
    )
  })

  it('should unfilter on clicked tag', () => {
    let onFilterClickedMock
    jest
      .mocked(TrainingTagFiltersCell)
      .mockImplementation(({ onFilterClicked }) => {
        onFilterClickedMock = onFilterClicked
        return <></>
      })

    render(<TrainingsSidebar />)

    act(() => {
      onFilterClickedMock('mock1')
    })

    act(() => {
      onFilterClickedMock('mock2')
    })

    act(() => {
      onFilterClickedMock('mock2')
    })

    expect(TrainingsCell).toHaveBeenLastCalledWith(
      {
        selectedTags: ['mock1'],
      },
      {}
    )
  })
})
