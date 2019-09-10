import React from 'react';
import './Search.css';

export default function Search(){
    
    return (<section className='search'>
            <h2>Search for books!</h2>
            <form>
              <label htmlFor="search">Search: </label>
              <input type="text" name='search' id='search' placeholder='Search for books' required />
              <button type='submit'>Search</button>
              <label htmlFor='printType'>Print type: </label>
              <select name='printType'>
                <option>All</option>
                <option>Books</option>
                <option>Magazines</option>
              </select>
              <label htmlFor='bookType'>Book type: </label>
              <select name='bookType'>
                <option>ebooks</option>
                <option>free-books</option>
                <option>full</option>
                <option>paid-ebooks</option>
                <option>partial</option>
              </select>
            </form>
            </section>);

}