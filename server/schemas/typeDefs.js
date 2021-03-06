const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]!
  }

  input newBook {
    authors: [String]
    description: String
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Book {
    _id: ID!
    authors: [String]
    description: String!
    bookId: String
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getUsers: [User]
    getSingleUser(_id: ID): User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(user: String!, book: newBook): User
    deleteBook(user: String!, bookId: ID!): [User]
  }
`;

module.exports = typeDefs;
