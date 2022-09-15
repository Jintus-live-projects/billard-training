import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const trainingTags: QueryResolvers['trainingTags'] = () => {
  return db.trainingTag.findMany()
}

export const createTrainingTag: MutationResolvers['createTrainingTag'] = ({
  tag,
}) => {
  return db.trainingTag.create({
    data: {
      name: tag
    },
  })
}

export const updateTrainingTag: MutationResolvers['updateTrainingTag'] = ({
  tag,
  newName,
}) => {
  return db.trainingTag.update({
    data: {
      name: newName
    },
    where: { name: tag },
  })
}

export const deleteTrainingTag: MutationResolvers['deleteTrainingTag'] = ({
  tag,
}) => {
  return db.trainingTag.delete({
    where: { name: tag },
  })
}
