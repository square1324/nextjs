import {Metadata} from "next";
import {movieUrl} from "./movieUrl"
import styles from "@styles/home.module.css"
import Movie from "./movie";

export const metadata: Metadata = {
    title: "Home"
}

async function getMovies() {
    return fetch(movieUrl).then(res => res.json())
}

const Page = async () => {
    const movies = await getMovies()
    return <div className={styles.container}>
        {movies.map(movie =>
            <Movie
                key={movie.id}
                id={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
            />
        )}
    </div>
}
export default Page
