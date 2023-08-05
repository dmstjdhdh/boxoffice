import React, {useState} from 'react';
import axios from "axios";

const App = () => {
    //1. 데이터 담을 그릇 선언.
    const [newsList, setNewsList] = useState([]);

    //2. 데이터를 가져오는 함수 선언.
    const getNewsList = async () => {
        //5.네트워크 로직.
        try {

            const address = "https://newsapi.org/v2/everything?q=tesla&from=2023-07-05&sortBy=publishedAt&apiKey=879f9f6b8c7e4c16939ccefca8aac63e"
            const result = await axios.get(address)
            console.log("++++++++++++++++++++++++++", result.data.articles)
            setNewsList(result.data.articles);
        } catch (err) {
            console.log("======================", err.message);
        }
    }

    //3. 데이터를 가져오는 버튼 선언.(버튼)
    //4. 데이터의 갯수 display
    //6. 데이터 매핑.
    return (
        <div>

            <button onClick={getNewsList}>뉴스리스트 가져오기</button>
            {newsList && newsList.map((news, index) => (
                <div key={index}>
                    <h1>
                        {news.title}
                    </h1>
                    <h3>
                        {news.description}
                    </h3>
                </div>
            ))}
        </div>
    );
};

export default App;