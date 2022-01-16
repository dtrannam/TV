import { Link } from 'react-router-dom'
import SearchBar from './Searchbar'
import Popular from './Popular'

const NavBar = ({auth, setAuth}) => {

    const Logout = () => {
        setAuth({login: null})
        fetch('http://localhost:8000/api/auth', {
            method: 'Delete'
        })
        // Adjust in prod 
        .then(data => console.log(data.status))
    }

    return (
        <nav className='navbar'>
            <Link to="/Home"><h1>Television Tracker</h1></Link>
            <Link to="/popular" element={<Popular/>}>Top Shows</Link>
            {auth.login ? <Link  to="/Login" onClick={Logout}>{auth.login} - Log Out</Link> : <Link to="/Login">Login</Link>}   
            <button onClick={() => console.log(auth)}/>         
            <SearchBar />
        </nav>
    )
}

export default NavBar