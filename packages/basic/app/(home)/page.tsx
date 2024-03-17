'use client'
import {useEffect, useState} from "react";

const Page = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [movies, setMovies] = useState([])
    const getMovies = async () => {
        const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies")
        const json  = await response.json()
        setMovies(json)
        setIsLoading(false)
    }
    useEffect(() => {
        getMovies()
    }, [])


    return <div>
        <h1>{isLoading ? "Loading.." : JSON.stringify(movies)}</h1>
    </div>
}

export default Page
