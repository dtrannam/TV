import {useState, useEffect} from "react"

const useFetch = (url) => {
    const abortConst = new AbortController();
    const [shows, setShows] = useState(null);
    const [errors, setErrors] = useState(null);
    const [status, setStatus] = useState(false)
    useEffect(() => {
        fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not get data')
                }
                return res.json()})
            .then(data => {
                setShows(data)
                setStatus(true)})
            .catch(errors => {
                setErrors(errors)
                console.log(errors)
            })

            return () => abortConst.abort();
    }, [url]);
    return {shows, errors, status}
}

export default useFetch
