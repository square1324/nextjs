import {movieUrl} from "../app/(home)/movieUrl";
import styles from "@styles/movie-videos.module.css"

async function getVideos(id: string) {
    const response = await fetch(`${movieUrl}/${id}/videos`).then(res => res.json())
    return response
}

export default async function MovieVideos({id}) {
    const videos  = await getVideos(id)
    return <div className={styles.container}>
        {videos.map((video) => (
            <iframe
                key={video.id}
                src={`https://youtube.com/embed/${video.key}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.name}
            />
        ))}
    </div>
}
