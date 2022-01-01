import useFetch from "../hooks/useFetch";
import Searchresult from "./Searchresult";

const Searchpage = () => {

    // Get the TV series search term
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('series')

    // Pull the data from TV Maze
    const {shows, errors, status} = useFetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)

    // Return Data 
    if (!status) {
        return (
            <div className="searchpage">
                <h2>Data is pending - Searching for {searchTerm}</h2>
            </div>
        ) 
    } else if (shows == null) {
        return (
            <div className="searchpage">
                <h2>Nothing found for {searchTerm} - please try again</h2>
            </div>
        ) 
    } else if (errors) {
        return (
            <div className="searchpage">
                <h2>An error has occured - please try again</h2>
            </div>
        )
    } else {
        console.log(shows)
        return (
            <div className="searchpage">
                <h2>Search Results for: {searchTerm}</h2>
                {shows.map((show) => {
                    return <Searchresult data={show} />
                })}
            </div>

        )
    }
}

export default Searchpage