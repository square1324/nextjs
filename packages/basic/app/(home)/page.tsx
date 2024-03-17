import {Metadata} from "next";
import Link from "next/link";
import {movieUrl} from "./movie"

export const metadata: Metadata = {
    title: "Home"
}

async function getMovies() {
    return fetch(movieUrl).then(res => res.json())
}

const Page = async () => {
    const movies = await getMovies()
    return <div>{movies.map(movie => <li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>)}</div>
}
export default Page
