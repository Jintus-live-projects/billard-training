import { useParams } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import TrainingCell from 'src/components/Trainings/Details/TrainingCell'

const TrainingDetailPage = () => {
  const { id: trainingId } = useParams()
  let content
  if (trainingId !== undefined) {
    content = <TrainingCell id={Number.parseInt(trainingId, 10)}></TrainingCell>
  } else {
    content = <>No training selected</>
  }
  return (
    <div>
      <MetaTags title="TrainingDetail" description="TrainingDetail page" />
      {content}
    </div>
  )
}

export default TrainingDetailPage
