import { db } from 'src/lib/db'

export const Layout = {
  balls: (_args, { root }) =>
    db.positionedBall.findMany({
      where: {
        layout: {
          id: root.id,
        },
      },
    }),
}
