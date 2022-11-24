interface TableLayoutGridProps {
  columnLevel: number
  rowLevel: number
}

const TableLayoutGrid = ({ columnLevel, rowLevel }: TableLayoutGridProps) => {
  const gridBorderDivs = Array.from({ length: 9 }, (_, i) => {
    const className =
      i === 4
        ? 'border-2 border-billard-grid bg-transparent'
        : 'bg-billard-cloth'
    return <div key={'border-cell' + i} className={className}></div>
  })

  const rowCells = Array.from({ length: columnLevel * 8 }, (_, i) => (
    <td key={'column' + i} className="border-2 border-billard-grid"></td>
  ))

  const tableRows = Array.from({ length: rowLevel * 4 }, (_, i) => (
    <tr key={'row' + i}>{rowCells}</tr>
  ))

  return (
    <div className="relative h-full w-full">
      <table className="absolute h-full w-full">
        <tbody>{tableRows}</tbody>
      </table>
      <div className="absolute grid h-full w-full grid-cols-border grid-rows-border">
        {gridBorderDivs}
      </div>
    </div>
  )
}

export default TableLayoutGrid
