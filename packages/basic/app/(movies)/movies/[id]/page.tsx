import {Suspense} from "react"
import MovieVideos from "@components/movie-videos"
import MovieInfo from "@components/movie-info"


interface Props {
    params: {id: string }
    searchParams: { [key in string]: string }
}

const MovieDetail = async ({params: {id}, searchParams}: Props) => {
    return <div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
            <MovieVideos id={id} />
        </Suspense>
    </div>
}

export default MovieDetail
