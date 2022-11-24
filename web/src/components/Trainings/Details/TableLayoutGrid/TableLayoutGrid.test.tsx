import { render } from '@redwoodjs/testing/web'

import TableLayoutGrid from './TableLayoutGrid'

describe('TableLayoutGrid', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TableLayoutGrid rowLevel={1} columnLevel={2} />)
    }).not.toThrow()
  })

  it.each([
    {
      rowLevel: 1,
      columnLevel: 1,
      nbrCells: 32,
    },
    {
      rowLevel: 2,
      columnLevel: 1,
      nbrCells: 64,
    },
    {
      rowLevel: 1,
      columnLevel: 2,
      nbrCells: 64,
    },
    {
      rowLevel: 2,
      columnLevel: 2,
      nbrCells: 128,
    },
  ])(
    'should have $nbrCells cells for row level $rowLevel and column level $columnLevel',
    (data) => {
      const { container } = render(<TableLayoutGrid {...data} />)

      expect(container.querySelectorAll('td')).toHaveLength(data.nbrCells)
    }
  )
})
