import { Link, routes } from '@redwoodjs/router'
import { render } from '@redwoodjs/testing/web'

import Loader from 'src/components/Loader/Loader'
import TrainingListItem from 'src/components/Trainings/Sidebar/TrainingListItem/TrainingListItem'

import { beforeQuery, Empty, Loading, Success } from './TrainingsCell'
import { oneTraining, standard } from './TrainingsCell.mock'

jest.mock('src/components/Loader/Loader')
jest.mock('src/components/Trainings/Sidebar/TrainingListItem/TrainingListItem')

describe('TrainingsCell', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should setup cache policy to cache-first', () => {
    const queryOptions = beforeQuery({})
    expect(queryOptions).toMatchObject({
      variables: {},
      fetchPolicy: 'cache-first',
    })
  })

  describe('Loading', () => {
    it('should render 2 Loader components', () => {
      render(<Loading />)
      expect(Loader).toBeCalledTimes(3)
    })
  })

  describe('Empty', () => {
    it('should display no training', () => {
      const component = render(<Empty />)
      expect(
        component.getByText(`Pas d'entraînement configuré`)
      ).toBeInTheDocument()
    })
  })

  describe('Success', () => {
    it('should render a TrainingListItem component for each training', () => {
      render(<Success {...standard()} />)
      expect(TrainingListItem).toBeCalledTimes(standard().trainings.length)
    })

    it('should render a Link component for each training', () => {
      render(<Success {...standard()} />)
      expect(Link).toBeCalledTimes(standard().trainings.length)
    })

    it('should render TrainingListItem with training info', () => {
      render(<Success {...oneTraining()} />)
      expect(TrainingListItem).toBeCalledWith(
        {
          training: oneTraining().trainings.at(0),
        },
        expect.anything()
      )
    })

    it('should render Link with processed url', () => {
      jest
        .mocked(routes.trainingDetail)
        .mockReturnValue('mockedUrl' as '/trainings')

      render(<Success {...oneTraining()} />)

      expect(routes.trainingDetail).toBeCalledWith({
        id: oneTraining().trainings.at(0).id,
      })
      expect(Link).toBeCalledWith(
        expect.objectContaining({
          to: 'mockedUrl',
        }),
        expect.anything()
      )
    })
  })
})
