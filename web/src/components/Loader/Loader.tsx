interface LoaderProps {
  className?: string
}

const Loader = ({ className }: LoaderProps) => {
  return <div className={`animate-pulse bg-gray-light ${className}`}></div>
}

export default Loader
