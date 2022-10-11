import { TrainingBlocType } from '@prisma/client'
import type { MutationResolvers, QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const Training = {
  tags: (_args, { root }) =>
    db.trainingTag.findMany({
      where: {
        training: {
          some: {
            id: root.id,
          },
        },
      },
    }),
  blocs: (_args, { root }) =>
    db.trainingBloc.findMany({
      where: {
        trainingId: root.id,
      },
    }),
}

export const trainings: QueryResolvers['trainings'] = ({ tags, exclusive }) => {
  if (!tags?.length) {
    return db.training.findMany()
  }

  return db.training.findMany({
    where: {
      [exclusive ? 'AND' : 'OR']: tags.map((tag) => ({
        tags: {
          some: {
            name: {
              equals: tag,
            },
          },
        },
      })),
    },
  })
}

export const training: QueryResolvers['training'] = ({ id }) => {
  return db.training.findUnique({
    where: { id },
  })
}

export const createTraining: MutationResolvers['createTraining'] = ({
  training,
}) => {
  return db.training.create({
    data: {
      name: training.name,
      tags: {
        connect: training.tagNames.map((tagName) => ({
          name: tagName,
        })),
      },
    },
  })
}

export const addRichTextBloc: MutationResolvers['addRichTextBloc'] = ({
  trainingId,
  bloc,
}) => {
  return db.training.update({
    where: { id: trainingId },
    data: {
      blocs: {
        create: {
          ...bloc,
          type: TrainingBlocType.RICH_TEXT,
        },
      },
    },
  })
}

export const addTableLayoutBloc: MutationResolvers['addTableLayoutBloc'] = ({
  trainingId,
  bloc,
}) => {
  return db.training.update({
    where: { id: trainingId },
    data: {
      blocs: {
        create: {
          ...bloc,
          layout: {
            create: {
              gridRowLevel: bloc.layout.gridRowLevel,
              gridColumnLevel: bloc.layout.gridColumnLevel,
              balls: {
                create: bloc.layout.positionedBalls.map((positionedBall) => ({
                  row: positionedBall.row,
                  column: positionedBall.column,
                  ball: {
                    connect: {
                      id: positionedBall.ballId,
                    },
                  },
                })),
              },
            },
          },
          type: TrainingBlocType.TABLE_LAYOUT,
        },
      },
    },
  })
}

export const deleteTraining: MutationResolvers['deleteTraining'] = ({ id }) => {
  return db.training.delete({
    where: { id },
  })
}
