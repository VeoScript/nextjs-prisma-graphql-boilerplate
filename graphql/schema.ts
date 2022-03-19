import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  # Your Database Tables Here...
  type DatabaseModel {
    # Prisma tables and column types
  }
  # Your Queries Here...
  type Query {
    # GraphQL query action and arguments
  }
  
  # Your Mutations Here...
  type Mutation {
    # GraphQL mutation action and arguments
  }
`