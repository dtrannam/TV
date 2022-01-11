// Used to show popular shows pulled from IMDB

const Popularresults = ({data}) => {
    return (
        <div className="popularResult" id={data.id}>
            <div className="popularImage">
            {data.image ?
                <img className="popularImage" src={data.image} alt={`image for ${data.title}`} /> :
                <h3>Test Image here</h3>
            }
            </div>
            <div className="popularInfo">
                <h3 className="popularTitle">{data.title}</h3>
                <div>Current Rank: {data.rank}</div>
                <div>Release Year: {data.year}</div>
                {data.imDbRating ? <div>Average Rating: {data.imDbRating}</div> : <div>No Ratings</div>}
            </div>
        </div>
    )
}

export default Popularresults