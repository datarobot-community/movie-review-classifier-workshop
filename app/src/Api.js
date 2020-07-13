import getRandomMovie from './utils/getRandomMovie'

async function getNextMovie() {

    let movieId = getRandomMovie()

    let response = await fetch(
        `api/movie?id=${movieId}`,
        {
            method: 'GET'
        }
    )

    let movie = await response.json()


    let out = {
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }

    return out
}

async function predictMovieScore(review) {

    let response = await fetch(
        `/api/predict`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ review })
        }
    )
    
    return response.json()
}

export { getNextMovie, predictMovieScore }