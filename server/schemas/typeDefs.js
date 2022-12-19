const gql = require('graphql-tag');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    links: [Link]
  }

  type Link {
    _id: ID
    title: String
    url: String
  }

  type Query {
    me: User
    user(username: String!): User
    users: [User]
    links(username: String): [Link]
    link(_id: ID!): Link
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addLink(title: String!, url: String!): Link
    updateLink(_id: ID!, title: String, url: String): Link
    deleteLink(_id: ID!): Link
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;