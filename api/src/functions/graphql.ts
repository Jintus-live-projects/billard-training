import { createGraphQLHandler } from '@redwoodjs/graphql-server'

import directives from 'src/directives/**/*.{js,ts}'
import sdls from 'src/graphql/**/*.sdl.{js,ts}'
import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'
import services from 'src/services/**/*.{js,ts}'

export const handler = createGraphQLHandler({
  loggerConfig: { logger, options: {} },
  directives,
  sdls,
  services,
  schemaOptions: {
    resolvers: {
      TrainingBloc: {
        __resolveType: (bloc) => {
          const typeMapping = {
            RICH_TEXT: 'RichTextBloc',
            TABLE_LAYOUT: 'TableLayoutBloc',
          }
          return typeMapping[bloc.type]
        },
      },
      Ball: {
        __resolveType: (ball) => {
          const typeMapping = {
            CUE_BALL: 'CueBall',
            COLORED_BALL: 'ColoredBall',
            NUMBERED_BALL: 'NumberedBall',
          }
          return typeMapping[ball.type]
        },
      },
    },
  },
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
})
