interface SidebarListItemProps {
  value: string
  isActive?: boolean
}

const SidebarListItem = ({ value, isActive }: SidebarListItemProps) => {
  return (
    <div
      className="rounded border-blue p-2 hover:bg-blue-light hover:text-blue aria-selected:border-l-4 aria-selected:bg-blue-light aria-selected:text-blue"
      aria-selected={isActive}
    >
      {value}
    </div>
  )
}

export default SidebarListItem
