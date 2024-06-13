import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    keanuImage(width: Int!, height: Int!, young: Boolean!, grayscale: Boolean!): String!
  }
`;

export default typeDefs;
