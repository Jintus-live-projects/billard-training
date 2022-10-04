import { ReactNode } from 'react'

interface ChipProps {
  isActive?: boolean
  value: string
  children?: {
    prefix?: ReactNode
  }
}

const Chip = ({ isActive = false, children, value }: ChipProps) => {
  const ACTIVE_CLASSES = isActive
    ? 'bg-accent text-accent-light'
    : 'bg-accent-light text-accent'

  return (
    <span className={`rounded-full px-2 py-1 text-xs ${ACTIVE_CLASSES}`}>
      {children?.prefix}
      {value}
    </span>
  )
}

export default Chip
