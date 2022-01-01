// Used to show popular shows pulled from IMDB

const Popularresults = ({data}) => {
    return (
        <div className="result" id={data.id}>
            <div className="image">
            {dataimage ?
                <img src={data.image} alt={`image for ${data.title}`} /> :
                <h3>Test Image here</h3>
            }
            </div>
            <div className="infomation">
            <ul>
                <h3>{data.title}</h3>
                <li>Rank: {data.rank}</li>
                <li><a href= {`${data.show.url}`}>Link</a></li>
                {data.imDbRating ? <li>Average Rating: {data.imDbRating}</li> : <li>No Ratings</li>}
            </ul>
            </div>
        </div>
    )
}

export default Popularresults