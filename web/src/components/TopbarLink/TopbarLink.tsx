import { Link, useMatch } from '@redwoodjs/router'

export interface TopbarLinkProps {
  to: string
  children: React.ReactNode
}

export const TopbarLink = ({ to, children }: TopbarLinkProps) => {
  const matchInfo = useMatch(to)
  const borderColor = matchInfo.match
    ? 'border-secondary'
    : 'border-transparent'
  return (
    <Link
      to={to}
      className={`grid place-content-center border-b-4 px-2 py-4 ${borderColor}`}
    >
      {children}
    </Link>
  )
}

export default TopbarLink
