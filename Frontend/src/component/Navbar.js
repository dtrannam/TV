import { Link, useSearchParams } from 'react-router-dom'
import SearchBar from './Searchbar'
import Popular from './Popular'


const NavBar = () => {
    return (
        <nav className='navbar'>
            <Link to="/Home"><h1>Television Tracker</h1></Link>
            <Link to="/popular" element={<Popular/>}>Top Shows</Link>
            <Link to="/Login">Login</Link>
            <SearchBar />
        </nav>
    )
}

export default NavBar