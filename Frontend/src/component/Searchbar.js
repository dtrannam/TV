const SearchBar = () => {
    return (
        <form action="/search" method="get" className="searchbar">
            <input type='text' name="series" placeholder="Search TV series" />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar