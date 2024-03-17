import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Home"
}

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    await new Promise(resolve => setTimeout(() => resolve(null), 10000))
    return fetch(URL).then(res => res.json())
}

const Page = async () => {
    const movies = await getMovies()
    return <div>{JSON.stringify(movies)}</div>
}
export default Page
