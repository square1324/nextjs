import {movieUrl} from "@components/../app/(home)/movie";

async function getMovie(id: string) {
    const response = await fetch(`${movieUrl}/${id}`).then(res => res.json())
    return response
}

export default async function MovieInfo({id}) {
    const movie  = await getMovie(id)
    return <h6>{JSON.stringify(movie)}</h6>
}
