import {movieUrl} from "../../../(home)/movie";


interface Props {
    params: {id: string }
    searchParams: { [key in string]: string }
}

async function getMovie(id: string) {
    const response = await fetch(`${movieUrl}/${id}`).then(res => res.json())
    return response
}

async function getVideos(id: string) {
    const response = await fetch(`${movieUrl}/${id}/videos`).then(res => res.json())
    return response
}


const MovieDetail = async ({params: {id}, searchParams}: Props) => {
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)])
    return <h1>{movie.title}</h1>
}

export default MovieDetail
