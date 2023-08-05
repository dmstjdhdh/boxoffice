import React, {useState} from 'react';

const App = () => {
<<<<<<< HEAD
    const [movies, setMovies] = useState({})

    const inputMoviedata = () => {
        const data = {
                title: "Movie1",
                desc: [0, 3, 4, 10],
                rate: 4.3,
            }
        // const data = [
        //     {
        //         title: "Movie1",
        //         desc: "너무재밌어",
        //         rate: 4.3,
        //     },
        //     {
        //         title: "Movie2",
        //         desc: "너무재미없음",
        //         rate: 2.1,
        //     },
        //     {
        //         title: "Movie3",
        //         desc: "그냥그럼",
        //         rate: 3.0,
        //     }
        // ]
=======
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
>>>>>>> main

        setMovies(data);
    }

    return (
        <div>
            <button onClick={inputMoviedata}>데이터 불러오기!</button>
<<<<<<< HEAD
            <h1>
                {movies.title}
            </h1>
            <h1>
                {/*{movies.desc && movies.desc.map(i => (*/}
                {/*    <h3>{i},</h3>*/}
                {/*))}*/}
                {movies.desc[1]}
            </h1>
            {/*{movies && movies.map(movie => (*/}
            {/*    <div>*/}
            {/*        <h1>{movie.title}</h1>*/}
            {/*        <h3>{movie.desc}</h3>*/}
            {/*    </div>*/}
            {/*))}*/}
=======
            {movies && movies.map(movie => (
                <div>
                    <h1>{movie.title}</h1>
                    <h3>{movie.desc}</h3>
                </div>
            ))}
>>>>>>> main
        </div>
    );
};

export default App;

//코드 빈도 순서.
//1. 위에서 아래 순서로 빌드한다.
//2. =를 기준으로, 우측에서 좌측으로 치환.
//3. .은 하위 메서드를 호출하는 명령어.
//4. ,는 '그리고'로 해석한다.
//5. ()는 함수들의 모음.