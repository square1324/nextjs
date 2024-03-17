import {movieUrl} from "@components/../app/(home)/movie";

async function getVideos(id: string) {
    const response = await fetch(`${movieUrl}/${id}/videos`).then(res => res.json())
    return response
}

export default async function MovieVideos({id}) {
    const videos  = await getVideos(id)
    return <h6>{JSON.stringify(videos)}</h6>
}
