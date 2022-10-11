interface SidebarListItemProps {
  value: string
  isActive?: boolean
}

const SidebarListItem = ({ value, isActive }: SidebarListItemProps) => {
  return (
    <div
      className="rounded border-secondary p-2 hover:bg-secondary-light hover:text-secondary aria-selected:border-l-4 aria-selected:bg-secondary-light aria-selected:text-secondary"
      aria-selected={isActive}
    >
      {value}
    </div>
  )
}

export default SidebarListItem
