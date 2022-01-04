// Used to show search result data as part of search page

const Searchresult = ({data}) => {
    // Sourced from G4G
    const pattern = new RegExp("\\<.*?\\>");
    let desc = data.show.summary.replace(pattern, "")
    return (
        <div className="result" id={data.show.id}>
            <div className="image">
            {data.show.image ?
                <img src={data.show.image.medium} alt={`${data.show.name}`} /> :
                <h3>Test Image here</h3>
            }
            </div>
            <div className="infomation">
            <ul>
                <h3>{data.show.name}</h3>
                <li key={"genres" + data.show.id}>Genres: {data.show.genres.toString()}</li>
                <li key={"id" + data.show.id}><a href= {`${data.show.url}`}>Link</a></li>
                {data.show.rating.average ? <li key={"rating" + data.show.id}>Average Rating: {data.show.rating.average}</li> : <li>No Ratings</li>}
                <li key={"summary" + data.show.id}>Summary: {desc}</li>
            </ul>
            </div>
        </div>
    )
}

export default Searchresult