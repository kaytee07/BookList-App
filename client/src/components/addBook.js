import React, {Component, useState} from "react";
import{ useQuery, useMutation} from '@apollo/client';
import { addBookMutation, getAuthorsQuery, getBooksQuery } from "../query/queries";



function AddBook(){
    let [name, setName] = useState("")
    let [genre, setGenre] = useState("")
    let [authorid, setAuthor] = useState("")


    const { data, loading, error, refetch } = useQuery(getAuthorsQuery);
    const [AddNewBook] = useMutation(addBookMutation,{
    refetchQueries:[getBooksQuery]
    });

    function submitForm(e) {
      e.preventDefault();
      AddNewBook({variables: {name:name, genre:genre, authorid:authorid}})
    }

    
    if(loading) return<p>loading...</p>
    if (error) return <p>error</p>;
   return (
     <div id="addbook-form">
       <form id="addBook" onSubmit={submitForm}>
         <div>
           <label htmlFor="name">Book Name:</label>
           <input
             type="text"
             id="name"
             onChange={(e) => setName((name = e.target.value))}
           ></input>
         </div>
         <div>
           <label htmlFor="genre">Genre:</label>
           <input
             type="text"
             id="genre"
             onChange={(e) => setGenre((genre = e.target.value))}
           ></input>
         </div>
         <div>
           <label htmlFor="author-select">Author:</label>
           <select
             id="author-select"
             onChange={(e) => setAuthor((authorid = e.target.value))}
           >
             <option>select author</option>
             {data.authors.map((author) => (
               <option key={author.id} value={author.id}>{author.name}</option>
             ))}
           </select>
         </div>
         <button type="submit" id="addbook">+</button>
       </form>
     </div>
   );
          
}

export default AddBook;