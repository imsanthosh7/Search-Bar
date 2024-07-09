import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import '../Components/Searchbar.css'
import axios from 'axios'

const Searchbar = ({setresult}) => {
    const [input, setinput] = useState("");
    const fetchData = (value) => {
       fetch("https://jsonplaceholder.typicode.com/users")
       .then((res)=> res.json())
       .then((json)=> {
         const results = json.filter((user)=>{
            return(
                value && user && user.name && user.name.toLowerCase().includes(value)
            );
         });
         setresult(results)
       })
    };

    const handleChange = (value) => {
        setinput(value);
        fetchData(value);
    }

    return (
        <div className='Searchbar-Wrapper'>
            <FaSearch id='search-icon' />
            <input
                type="text" placeholder='Type to search...'
                value={input}
                onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}

export default Searchbar