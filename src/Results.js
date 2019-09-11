import React from 'react';
import './Results.css';


export default function Results(props){

  console.log(props.state.books.items);

 let resultsArray = props.state.books.items.map(item => 
      <div className='book'>
        <p>${item.volumeInfo.title}</p>
        <p>${item.volumeInfo.authors && item.volumeInfo.authors[0]}</p>
        <p>Price: ${item.saleInfo.listPrice && item.saleInfo.listPrice.amount && item.saleInfo.listPrice.amount }</p>
        <p>Description: ${item.volumeInfo.description}</p>
        <a href='{item.volumeInfo.previewLink}' >Preview Link</a>
        <img src='{item.volumeInfo.imageLinks.smallThumbnail}' alt='book cover' height='50' />
      </div>  );
  
  console.log(resultsArray);

  let resultsDisplay = resultsArray.join('');
    return (
      <section className='results'>
        {resultsDisplay}      
      </section>
    );
}