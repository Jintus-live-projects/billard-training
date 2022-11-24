import { Layout } from 'types/graphql'

import Billard from 'src/components/Trainings/Details/Billard/Billard'
import TableLayoutGrid from 'src/components/Trainings/Details/TableLayoutGrid/TableLayoutGrid'

interface TableLayoutProps {
  layout: Layout
}

const TableLayout = ({ layout }: TableLayoutProps) => {
  return (
    <Billard>
      <TableLayoutGrid
        columnLevel={layout.gridColumnLevel}
        rowLevel={layout.gridRowLevel}
      ></TableLayoutGrid>
    </Billard>
  )
}

export default TableLayout
