export const schema = gql`
  type Training {
    id: Int!
    name: String!
    tags: [TrainingTag!]!
    blocs: [TrainingBloc!]!
  }

  type Query {
    trainings: [Training!]! @requireAuth
    training(id: Int!): Training @requireAuth
  }

  input CreateTrainingInput {
    name: String!
    tagNames: [String!]!
  }

  type Mutation {
    createTraining(training: CreateTrainingInput!): Training! @requireAuth
    addRichTextBloc(trainingId: Int!, bloc: CreateRichTextBloc): Training! @requireAuth
    addTableLayoutBloc(trainingId: Int!, bloc: CreateTableLayoutBloc): Training! @requireAuth
    deleteTraining(id: Int!): Training! @requireAuth
  }
`
