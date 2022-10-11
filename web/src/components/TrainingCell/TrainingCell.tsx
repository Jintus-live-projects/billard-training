import type {
  FindTrainingQuery,
  FindTrainingQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindTrainingQuery($id: Int!) {
    training: training(id: $id) {
      id
      tags {
        name
      }
      name
      blocs {
        id
        title
        ... on RichTextBloc {
          text
        }
        ... on TableLayoutBloc {
          layout {
            id
            gridColumnLevel
            gridRowLevel
            balls {
              id
              ball {
                id
                ... on ColoredBall {
                  color
                }
                ... on NumberedBall {
                  number
                }
              }
              column
              row
            }
          }
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Success = ({
  training,
}: CellSuccessProps<FindTrainingQuery, FindTrainingQueryVariables>) => {
  return (
    <div className="flex flex-col">
      {training.name}
      <span>{training.tags.map((tag) => tag.name).join(', ')}</span>
      <span>{training.blocs.length} bloc(s)</span>
    </div>
  )
}
