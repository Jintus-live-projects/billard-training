export const schema = gql`
  interface Ball {
    id: Int!
  }

  type CueBall implements Ball {
    id: Int!
  }

  type ColoredBall implements Ball {
    id: Int!
    color: String!
  }

  type NumberedBall implements Ball {
    id: Int!
    number: Int!
  }

  type Query {
    balls: [Ball!]! @requireAuth
    ball(id: Int!): Ball @requireAuth
  }
`
