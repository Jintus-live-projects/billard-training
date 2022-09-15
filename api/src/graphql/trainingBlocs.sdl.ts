export const schema = gql`
  interface TrainingBloc {
    id: Int!
    title: String!
  }

  type TableLayoutBloc implements TrainingBloc {
    id: Int!
    title: String!
    layout: Layout!
  }

  type RichTextBloc implements TrainingBloc {
    id: Int!
    title: String!
    text: String!
  }

  input CreateTableLayoutBloc {
    title: String!
    layout: CreateLayoutInput!
  }

  input CreateRichTextBloc {
    title: String!
    text: String!
  }
`
