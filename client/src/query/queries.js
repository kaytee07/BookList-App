import { gql, useQuery } from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      name
      genre
      id
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const addBookMutation= gql `
mutation AddBook($name:String!, $genre:String!, $authorid:ID!){
    addBook(name:$name, genre:$genre, authorid:$authorid){
        name
        id
    }
}
`
const getBookQuery = gql`
query($id:ID){
  book(id:$id){
    id
    name
    genre
    author{
      id 
      name 
      age
      book{
        name
        id
      }
    }
  }
}
`

export {getBooksQuery, getAuthorsQuery, addBookMutation, getBookQuery };