import { render } from '@redwoodjs/testing/web'

import Chip from 'src/components/Chip/Chip'
import Loader from 'src/components/Loader/Loader'

import { beforeQuery, Loading, Success } from './TrainingTagFiltersCell'
import { standard } from './TrainingTagFiltersCell.mock'

export const unitTestProps = {
  unselected: {
    ...standard(),
    selectedFilters: [],
    onFilterClicked: jest.fn(),
  },
  oneUnselected: {
    trainingTags: [{ name: 'Filter 1' }],
    selectedFilters: [],
    onFilterClicked: jest.fn(),
  },
  oneSelected: {
    trainingTags: [{ name: 'Filter 1' }],
    selectedFilters: ['Filter 1'],
    onFilterClicked: jest.fn(),
  },
}

jest.mock('src/components/Loader/Loader')
jest.mock('src/components/Chip/Chip')

describe('TrainingTagFiltersCell', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('beforeQuery', () => {
    it('should setup cache policy to cache-first', () => {
      const queryOptions = beforeQuery({})
      expect(queryOptions).toMatchObject({
        variables: {},
        fetchPolicy: 'cache-first',
      })
    })
  })

  describe('Loading', () => {
    it('should render two Loader component', () => {
      render(<Loading />)
      expect(Loader).toBeCalledTimes(2)
    })
  })

  describe('Success', () => {
    it('should render one Chip by trainingTag', () => {
      render(<Success {...unitTestProps.unselected} />)
      expect(Chip).toBeCalledTimes(unitTestProps.unselected.trainingTags.length)
    })

    it('should render tag name', () => {
      render(<Success {...unitTestProps.oneUnselected} />)
      expect(Chip).toBeCalledWith(
        {
          isActive: false,
          children: `#${unitTestProps.oneUnselected.trainingTags.at(0).name}`,
        },
        expect.anything()
      )
    })

    it('should render Chip with active state', () => {
      render(<Success {...unitTestProps.oneSelected} />)
      expect(Chip).toBeCalledWith(
        expect.objectContaining({
          isActive: true,
        }),
        expect.anything()
      )
    })

    it('should call filter selection change callback on click', () => {
      const container = render(
        <Success {...unitTestProps.unselected} />
      ).container
      container.querySelector('button').click()
      expect(unitTestProps.unselected.onFilterClicked).toBeCalledWith(
        'Filter 1'
      )
    })
  })
})
