import react, { Component, useState } from "react";
import { useQuery} from '@apollo/client';
import { getBooksQuery, addBookMutation} from "../query/queries";
import Bookdetails from './bookDetails'



function BookList() { 
  let [ id, setID ] = useState(null);
  const {loading, error, data} =  useQuery(getBooksQuery)
   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error :(</p>;
    return (
      <div id="main">
        <ul id="book-list">
           {data.books.map(book=>(
             <li key={book.id} onClick={(e)=> setID((id = book.id))}>{book.name}</li>
           )) 
           }
        </ul>
        <Bookdetails bookId = {id}/>
      </div>
    );
  
}

export default BookList;
