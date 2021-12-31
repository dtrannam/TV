
const Searchpage = () => {

    // Get the TV series search term
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('series')

    // Pull the data from TV Maze

    return (
        <div>
            {searchTerm}
        </div>
    )
}

export default Searchpage