
import { useState } from 'react'
import './App.css'
import Searchbar from './Components/Searchbar'
import SearchResultsList from './Components/SearchResultsList';

function App() {
  const [results,setresult]=useState([]);


  return (
    
      <div className='App'>

        <div className='searchbar-container'>
          <h1>Search Bar🔍</h1>
         <Searchbar setresult={setresult}/>
          <SearchResultsList results={results}/>

        </div>
       
      </div>
      
    
  )
}

export default App
