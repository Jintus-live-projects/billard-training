import { Layout } from 'types/graphql'

import { render } from '@redwoodjs/testing/web'

import Billard from 'src/components/Trainings/Details/Billard/Billard'
import TableLayoutGrid from 'src/components/Trainings/Details/TableLayoutGrid/TableLayoutGrid'

import TableLayout from './TableLayout'

jest.mock('src/components/Trainings/Details/Billard/Billard')
jest.mock('src/components/Trainings/Details/TableLayoutGrid/TableLayoutGrid')

describe('TableLayout', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders successfully', () => {
    expect(() => {
      render(
        <TableLayout
          layout={{ gridRowLevel: 1, gridColumnLevel: 1 } as Layout}
        />
      )
    }).not.toThrow()
  })

  it('should render Billard component', () => {
    render(
      <TableLayout layout={{ gridRowLevel: 1, gridColumnLevel: 1 } as Layout} />
    )

    expect(Billard).toBeCalledWith(
      {
        children: expect.anything(),
      },
      expect.anything()
    )
  })

  it('should render TableLayoutGrid component', () => {
    jest
      .mocked(Billard)
      .mockImplementationOnce(({ children }) => <>{children}</>)

    render(
      <TableLayout layout={{ gridRowLevel: 1, gridColumnLevel: 2 } as Layout} />
    )

    expect(TableLayoutGrid).toBeCalledWith(
      {
        columnLevel: 2,
        rowLevel: 1,
      },
      expect.anything()
    )
  })
})
