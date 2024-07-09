import React from 'react'
import "../Components/SearchResultsList.css"
import SearchResults from './SearchResults';

    


const SearchResultsList = ({results}) => {
  
  return (
   <>
    <div className='results-list '>
      {
      results.map((result, id) => {
         return <div className='Search-results'> <SearchResults result={result} key={id}/></div>
      })}
    </div>
  
   </>
    
  )
}

export default SearchResultsList