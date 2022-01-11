import { Link, useSearchParams} from 'react-router-dom'
import SearchBar from './Searchbar'
import Popular from './Popular'
import React, { useState, useEffect } from 'react';

const NavBar = () => {

    useEffect(() => {
        function checkUserData() {
            console.log('testing')
          }
        
      
        window.addEventListener('storage', checkUserData)
      
        return () => {
          window.removeEventListener('storage', checkUserData)
        }
    }, [])


    return (
        <nav className='navbar'>
            <Link to="/Home"><h1>Television Tracker</h1></Link>
            <Link to="/popular" element={<Popular/>}>Top Shows</Link>
            {window.localStorage.login ? <Link to="/Login">Log Out</Link> : <Link to="/Login">Login</Link>}            
            <SearchBar />
        </nav>
    )
}

export default NavBar