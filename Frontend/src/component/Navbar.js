import { Link, useSearchParams } from 'react-router-dom'
import SearchBar from './Searchbar'



const NavBar = () => {
    return (
        <nav className='navbar'>
            <h1>Television Tracker</h1>
            <Link to="/Login">Login</Link>
            <SearchBar />
        </nav>
    )
}

export default NavBar