import { Link, useMatch } from '@redwoodjs/router'

export interface TopbarLinkProps {
  to: string
  children: React.ReactNode
}

export const TopbarLink = ({ to, children }: TopbarLinkProps) => {
  const matchInfo = useMatch(to)
  return (
    <Link
      to={to}
      className="grid place-content-center border-b-4 border-transparent px-2 py-4 aria-selected:border-secondary"
      aria-selected={matchInfo.match}
    >
      {children}
    </Link>
  )
}

export default TopbarLink
