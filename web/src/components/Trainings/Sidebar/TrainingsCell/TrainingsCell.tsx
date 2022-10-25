import type { TrainingsQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps } from '@redwoodjs/web'

import Loader from 'src/components/Loader/Loader'
import TrainingListItem from 'src/components/Trainings/Sidebar/TrainingListItem/TrainingListItem'

export const QUERY = gql`
  query TrainingsQuery($selectedTags: [String!]) {
    trainings: trainings(tags: $selectedTags, exclusive: true) {
      id
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
  <div className="flex flex-col gap-y-2">
    <Loader className="h-10 w-2/3 rounded" />
    <Loader className="h-10 w-1/3 rounded" />
    <Loader className="h-10 w-3/5 rounded" />
  </div>
)

export const Empty = () => <div>Pas d&apos;entraînement configuré</div>

export const Success = ({ trainings }: CellSuccessProps<TrainingsQuery>) => {
  return (
    <div className="flex flex-col gap-y-2">
      {trainings.map((item) => {
        return (
          <Link key={item.id} to={routes.trainingDetail({ id: item.id })}>
            <TrainingListItem training={item} />
          </Link>
        )
      })}
    </div>
  )
}
