import TrainingsSidebar from 'src/components/Trainings/Sidebar/TrainingsSidebar/TrainingsSidebar'

type TrainingLayoutProps = {
  children?: React.ReactNode
}

const TrainingLayout = ({ children }: TrainingLayoutProps) => {
  return (
    <div className="flex h-full">
      <div className="w-64 shrink-0">
        <TrainingsSidebar></TrainingsSidebar>
      </div>
      {children}
    </div>
  )
}

export default TrainingLayout
