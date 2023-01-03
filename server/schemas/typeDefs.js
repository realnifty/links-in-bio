const gql = require('graphql-tag');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    displayName: String
    biography: String
    profilePicture: String
    buttonStyle: String
    buttonColor: String
    backgroundColor: String
    fontColor: String
    profileFontColor: String
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
    updateProfile(displayName: String, biography: String): User
    customizeProfile(buttonStyle: String, buttonColor: String, backgroundColor: String, fontColor: String, profileFontColor: String, profilePicture: String): User
    deleteMe: User
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;