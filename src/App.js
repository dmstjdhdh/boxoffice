import React, {useState} from 'react';

const App = () => {
    const [movies, setMovies] = useState([])

    const inputMoviedata = () => {
        const data = [
            {
                title: "Movie1",
                desc: "너무재밌어",
                rate: 4.3,
            },
            {
                title: "Movie2",
                desc: "너무재미없음",
                rate: 2.1,
            },
            {
                title: "Movie3",
                desc: "그냥그럼",
                rate: 3.0,
            }
        ]

        setMovies(data);
    }

    return (
        <div>
            <button onClick={inputMoviedata}>데이터 불러오기!</button>
            {movies && movies.map(movie => (
                <div>
                    <h1>{movie.title}</h1>
                    <h3>{movie.desc}</h3>
                </div>
            ))}
        </div>
    );
};

export default App;