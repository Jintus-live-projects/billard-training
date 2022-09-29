import type { QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const balls: QueryResolvers['balls'] = () => {
  return db.ball.findMany()
}

export const ball: QueryResolvers['ball'] = ({ id }) => {
  return db.ball.findUnique({
    where: { id },
  })
}
