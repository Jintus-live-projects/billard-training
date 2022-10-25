import type { TrainingTagFiltersQuery } from 'types/graphql'

import type { CellSuccessProps } from '@redwoodjs/web'

import Chip from 'src/components/Chip/Chip'
import Loader from 'src/components/Loader/Loader'

interface TrainingFilterListsCellProps {
  selectedFilters: string[]
  onFilterClicked: (clickedFilter: string) => void
}

export const QUERY = gql`
  query TrainingTagFiltersQuery {
    trainingTags {
      name
    }
  }
`

export const beforeQuery: (
  unknown
) => GraphQLQueryHookOptions<unknown, unknown> = (props) => {
  return {
    variables: props,
    fetchPolicy: 'cache-first',
  }
}

export const Loading = () => (
  <div className="flex w-full gap-x-2">
    <Loader className="h-6 w-1/5 rounded-full" />
    <Loader className="h-6 w-2/5 rounded-full" />
  </div>
)

export const Success = ({
  trainingTags,
  selectedFilters,
  onFilterClicked,
}: CellSuccessProps<TrainingTagFiltersQuery> &
  TrainingFilterListsCellProps) => {
  const filterByActiveState = selectedFilters.reduce((agg, selectedFilter) => {
    agg.set(selectedFilter, true)
    return agg
  }, new Map<string, boolean>())

  return (
    <div className="flex gap-x-2 overflow-x-auto overflow-y-hidden">
      {trainingTags.map((item) => {
        return (
          <button key={item.name} onClick={() => onFilterClicked(item.name)}>
            <Chip isActive={filterByActiveState.get(item.name) ?? false}>
              {`#${item.name}`}
            </Chip>
          </button>
        )
      })}
    </div>
  )
}
