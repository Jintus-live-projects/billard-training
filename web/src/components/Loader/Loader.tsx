interface LoaderProps {
  className?: string
}

const Loader = ({ className }: LoaderProps) => {
  return <div className={`animate-pulse bg-gray ${className}`}></div>
}

export default Loader
