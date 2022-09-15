export const schema = gql`
  type PositionedBall {
    id: Int!
    row: Int!
    column: Int!
    ball: Ball!
  }

  input CreatePositionedBall {
    row: Int!
    column: Int!
    ballId: Int!
  }
`
