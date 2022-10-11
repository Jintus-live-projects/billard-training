import { render } from '@redwoodjs/testing/web'

import TrainingsSidebar from 'src/components/Trainings/Sidebar/TrainingsSidebar/TrainingsSidebar'

import TrainingsLayout from './TrainingsLayout'

jest.mock('src/components/Trainings/Sidebar/TrainingsSidebar/TrainingsSidebar')

describe('TrainingsLayout', () => {
  it('should render a TrainingSidebar', () => {
    render(<TrainingsLayout />)
    expect(TrainingsSidebar).toBeCalled()
  })

  it('should render children', () => {
    const { getByText } = render(<TrainingsLayout>mock</TrainingsLayout>)
    expect(getByText('mock')).toBeInTheDocument()
  })
})
