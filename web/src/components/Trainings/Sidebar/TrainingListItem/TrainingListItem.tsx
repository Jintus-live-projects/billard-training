import { Training } from 'types/graphql'

import { routes, useMatch } from '@redwoodjs/router'

import SidebarListItem from 'src/components/Trainings/Sidebar/SidebarListItem/SidebarListItem'

interface TrainingListItemProps {
  training: Pick<Training, 'id' | 'name'>
}

const TrainingListItem = ({ training }: TrainingListItemProps) => {
  const matchInfo = useMatch(routes.trainingDetail(), {
    searchParams: [{ id: training.id }],
  })
  return <SidebarListItem value={training.name} isActive={matchInfo.match} />
}

export default TrainingListItem
