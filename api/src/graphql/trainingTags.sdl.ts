export const schema = gql`
  type TrainingTag {
    name: String!
  }

  type Query {
    trainingTags: [TrainingTag!]! @requireAuth
    trainingTag(id: String!): TrainingTag @requireAuth
  }

  input CreateTrainingTagInput {
    name: String!
  }

  input UpdateTrainingTagInput {
    name: String
  }

  type Mutation {
    createTrainingTag(input: CreateTrainingTagInput!): TrainingTag! @requireAuth
    updateTrainingTag(
      id: String!
      input: UpdateTrainingTagInput!
    ): TrainingTag! @requireAuth
    deleteTrainingTag(id: String!): TrainingTag! @requireAuth
  }
`
