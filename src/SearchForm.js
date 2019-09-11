import React from "react";



export default class SearchForm extends React.Component{

  render(){
    return(
        <form onSubmit = {e => {this.props.getInputValues(e)}}>
            <label htmlFor='printType'>Print&nbsp;type:&nbsp;</label>
            <select className='inputs'  name='printType'>
                <option>All</option>
                <option>Books</option>
                <option>Magazines</option>
            </select>
            <label htmlFor='bookType'>Book&nbsp;type:&nbsp;</label>
            <select className='inputs'  name='bookType'>
                <option>ebooks</option>
                <option>free-books</option>
                <option>full</option>
                <option>paid-ebooks</option>
                <option>partial</option>
            </select>
            <label htmlFor="search">Search:&nbsp;</label>
            <input  className='inputs'  
            type="text" 
            name='search' 
            id='search' 
            placeholder='enter a search topic'     
            required />
            <button type='submit'>Search</button>

        </form> 
       

                
        

    );
  }
}