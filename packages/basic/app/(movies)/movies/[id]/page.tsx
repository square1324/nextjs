interface Props {
    params: {id: string }
    searchParams: { [key in string]: string }
}

const MovieDetail = ({params: {id}, searchParams}: Props) => {
    return <h1>{`Movie:${id}`}</h1>
}

export default MovieDetail
