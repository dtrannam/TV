import { Link, useSearchParams} from 'react-router-dom'
import SearchBar from './Searchbar'
import Popular from './Popular'
import React, { useState, useEffect } from 'react';

const NavBar = ({auth, setAuth}) => {

    return (
        <nav className='navbar'>
            <Link to="/Home"><h1>Television Tracker</h1></Link>
            <Link to="/popular" element={<Popular/>}>Top Shows</Link>
            {auth.login ? <Link  to="/Login" onClick={() => setAuth({login: null, token: null})}>{auth.login} - Log Out</Link> : <Link to="/Login">Login</Link>}   
            <button onClick={() => console.log(auth)}/>         
            <SearchBar />
        </nav>
    )
}

export default NavBar