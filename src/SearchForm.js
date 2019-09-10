import React from "react";



export default class SarchForm extends React.Component{

 constructor(){
     super();
     this.state= {
         searchTerm: " ",
         printType: "All",
         bookType: "ebooks"
     };

 }

 getInputValues = (e) => {
    e.preventDefault();
    let search = e.target.search.value;
    let printType = e.target.printType.value;
    let bookType = e.target.bookType.value;
    console.log(search, printType);
    this.setState({
         searchTerm: search,
         printType: printType,
         bookType: bookType
    },
    this.createQueryString);
};


 createQueryString(){

     let baseurl = `https://www.googleapis.com/books/v1/volumes?q=`;
     let searchterm = this.state.searchTerm;
     let printType = this.state.printType;
     let bookType = this.state.bookType;
     let fullString = `${baseurl}${searchterm}&filter=${bookType}&printType=${printType}`;
     this.getBooks(fullString);
 }


 getBooks = (queryString) =>{ 
     fetch(queryString)
     .then(res => res.ok ? res.json() : Promise.reject('Request did not succeed'))
     .then( res => { console.log(res) })
     .then(this.setState({
        searchTerm: " ",
        printType: "All",
        bookType: "ebooks"
    }))
    .catch(err => console.err('Error with your request'));
 }

  render(){
    return(
        <form onSubmit = {e => {this.getInputValues(e)}}>
            <label htmlFor="search">Search: </label>
            <input 
            type="text" 
            name='search' 
            id='search' 
            placeholder='Search for books'     
            required />
            <button 
            type='submit'>Search</button>
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
       

                
        

    );
  }
}