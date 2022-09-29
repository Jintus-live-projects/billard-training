export const schema = gql`
  type TrainingTag {
    name: String!
  }

  type Query {
    trainingTags: [TrainingTag!]! @requireAuth
  }

  type Mutation {
    createTrainingTag(tag: String!): TrainingTag! @requireAuth
    updateTrainingTag(tag: String!, newName: String!): TrainingTag! @requireAuth
    deleteTrainingTag(tag: String!): TrainingTag! @requireAuth
  }
`
