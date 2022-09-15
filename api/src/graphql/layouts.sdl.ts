export const schema = gql`
  type Layout {
    id: Int!
    gridRowLevel: Int!
    gridColumnLevel: Int!
    balls: [PositionedBall!]!
  }

  input CreateLayoutInput {
    gridRowLevel: Int!
    gridColumnLevel: Int!
    positionedBalls: [CreatePositionedBall!]!
  }
`
