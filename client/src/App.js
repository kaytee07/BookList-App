import react, {Component} from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

//component
import BookList from "./components/BookList";
import AddBook from "./components/addBook"

//apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});


class App extends Component {

  render(){
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>My Reading List</h1>
          <BookList />
          <AddBook/>
        </div>
      </ApolloProvider>
    );
  }
}
 
export default App;
