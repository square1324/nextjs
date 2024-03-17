import {movieUrl} from "../app/(home)/movieUrl";
import styles from "@styles/movie-info.module.css"

async function getMovie(id: string) {
    const response = await fetch(`${movieUrl}/${id}`).then(res => res.json())
    return response
}

export default async function MovieInfo({id}) {
    const movie  = await getMovie(id)
    return <div className={styles.container}>
        <img className={styles.poster} src={movie.poster_path} />
        <div className={styles.info}>
            <h1 className={styles.title}>{movie.title}</h1>
            <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
            <p>{movie.overview}</p>
            <a href={movie.homepage} target={"_blank"}>
                Homepage &rarr;
            </a>
        </div>
    </div>
}
