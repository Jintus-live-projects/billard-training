import React, { ReactNode } from 'react'

interface ChipProps {
  isActive?: boolean
  children: ReactNode
}

const Chip = ({ isActive = false, children }: ChipProps) => {
  return (
    <span
      className="rounded-full bg-purple-light px-2 py-1 text-xs text-purple aria-selected:bg-purple aria-selected:text-purple-light"
      aria-selected={isActive}
    >
      {children}
    </span>
  )
}

export default Chip
