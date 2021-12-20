import React, {Component} from "react";
import {getBookQuery} from '../query/queries'
import {useQuery} from '@apollo/client'

function BookDetails(props){
    const {loading, error, data} = useQuery(getBookQuery, {
        variables:{id:props.bookId}
    });
    
    if(loading) return <p>loading...</p>
    if(error) return <p>error :</p>
    console.log(data.book);
    if(data.book === null){
         return (
           <div>
             <h3></h3>
           </div>
         );
    }else{
         return (
           <div>
             <h3>{data.book.name}</h3>
             <p>{data.book.genre}</p>
             <p>{data.book.author.name}</p>
             <ul>
                 {data.book.author.book.map(book=>
                     <li>{book.name}</li>
                 )}
             </ul>
           </div>
         );
    }
    
   
   
}

export default BookDetails;