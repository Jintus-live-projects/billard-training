import { useState } from 'react'

import TrainingsCell from 'src/components/Trainings/Sidebar/TrainingsCell'
import TrainingTagFiltersCell from 'src/components/Trainings/Sidebar/TrainingTagFiltersCell'

const TrainingsSidebar = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const onFilterClicked = (filter: string) => {
    const updatedSelectedFilters = new Set(selectedFilters)

    if (updatedSelectedFilters.has(filter)) {
      updatedSelectedFilters.delete(filter)
    } else {
      updatedSelectedFilters.add(filter)
    }
    setSelectedFilters([...updatedSelectedFilters])
  }

  return (
    <nav className="h-full bg-light-secondary p-2">
      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between">
          <span className="text-lg font-semibold text-gray-light">
            Exercices
          </span>
          {/*Fixme: Add create button here*/}
        </div>
        <TrainingTagFiltersCell
          selectedFilters={selectedFilters}
          onFilterClicked={onFilterClicked}
        />
        <TrainingsCell selectedTags={selectedFilters} />
      </div>
    </nav>
  )
}

export default TrainingsSidebar
