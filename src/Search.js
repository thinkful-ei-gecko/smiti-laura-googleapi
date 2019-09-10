import React from 'react';
import './Search.css';
import SearchForm from './SearchForm';


export default function Search(props){
    
    return (    
    <section className='search'>
      <h2>Search for books!</h2>
      <SearchForm state={props.state} getInputValues={props.getInputValues} />
    </section>
    );
}