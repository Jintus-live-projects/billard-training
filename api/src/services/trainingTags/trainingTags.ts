import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const trainingTags: QueryResolvers['trainingTags'] = () => {
  return db.trainingTag.findMany()
}

export const trainingTag: QueryResolvers['trainingTag'] = ({ id }) => {
  return db.trainingTag.findUnique({
    where: { id },
  })
}

export const createTrainingTag: MutationResolvers['createTrainingTag'] = ({
  input,
}) => {
  return db.trainingTag.create({
    data: input,
  })
}

export const updateTrainingTag: MutationResolvers['updateTrainingTag'] = ({
  id,
  input,
}) => {
  return db.trainingTag.update({
    data: input,
    where: { id },
  })
}

export const deleteTrainingTag: MutationResolvers['deleteTrainingTag'] = ({
  id,
}) => {
  return db.trainingTag.delete({
    where: { id },
  })
}
