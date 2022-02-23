import { gql } from "@apollo/client";

// route to get logged in user's info (needs the token)
export const GET_USERS = gql`
  query getUsers {
    getUsers {
      username
      savedBooks {
        title
        description
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// save book data for a logged in user
export const SAVE_BOOK = gql`
  mutation saveBook($user: String!, $book: newBook) {
    saveBook(user: $user, book: $book) {
      username
      savedBooks {
        title
      }
    }
  }
`;

// remove saved book data for a logged in user
export const deleteBook = (bookId, token) => {
  return fetch(`/api/users/books/${bookId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};
