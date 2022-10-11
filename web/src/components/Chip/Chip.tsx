import React, { ReactNode } from 'react'

interface ChipProps {
  isActive?: boolean
  children: ReactNode
}

const Chip = ({ isActive = false, children }: ChipProps) => {
  return (
    <span
      className="rounded-full bg-accent-light px-2 py-1 text-xs text-accent aria-selected:bg-accent aria-selected:text-accent-light"
      aria-selected={isActive}
    >
      {children}
    </span>
  )
}

export default Chip
