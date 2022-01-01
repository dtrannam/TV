import useFetch from "../hooks/useFetch";

const Popular = () => {

    // Pull the data from IMDb - edit out API key later
    const {shows, errors, status} = useFetch(`https://imdb-api.com/en/API/MostPopularTVs/k_h16i7gt0`)
    console.log(shows)
    console.log(typeof(shows))
    // Return Data 
    if (!status) {
        return (
            <div className="popular">
                <h2>Data is pending</h2>
            </div>
        ) 
    } else if (errors || shows == null) {
        return (
            <div className="popular">
                <h2>An error has occured - please try again</h2>
            </div>
        )
    } else {
        console.log(shows)
        return (
            <div className="popular">
                    {shows.items.map((show) => {
                    return <Popular data={show} />
                     })}
            </div>

        )
    }
}

export default Popular