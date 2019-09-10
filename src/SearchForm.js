import React from "react";



export default class SearchForm extends React.Component{

  render(){
    return(
        <form onSubmit = {e => {this.props.getInputValues(e)}}>
            <label htmlFor="search">Search: </label>
            <input 
            type="text" 
            name='search' 
            id='search' 
            placeholder='Search for books'     
            required />
            <br />
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
            <br />
            <button type='submit'>Search</button>

        </form> 
       

                
        

    );
  }
}