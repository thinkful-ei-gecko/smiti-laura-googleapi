import React from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import Results from './Results';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
        searchTerm: " ",
        printType: "All",
        bookType: "ebooks",
        books: { 
          items : [],
        }
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
  .then( res => { 
      console.log(res);
      this.setState({ books : res }); 
 })
 .catch(err => console.log('Error with your request'));
}

render () {
  return (
    <div className="App">
      <Header />
      <Search state={this.state} getInputValues={this.getInputValues} />
      <Results state={this.state} />
    </div>
  );
}

}

export default App;
