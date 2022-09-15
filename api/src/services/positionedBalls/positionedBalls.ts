import {db} from "src/lib/db";

export const PositionedBall = {
  ball: (_args, {root}) => db.ball.findUnique({
    where: {
      id: root.ballId
    }
  })
}
