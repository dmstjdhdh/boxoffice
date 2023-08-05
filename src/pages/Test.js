import React, {useState} from 'react';
import axios, {post} from "axios";

const Test = () => {

    //1. 데이터를 담을 그릇 선언
    const [posts, setPostsList] = useState([])

    //2. 데이터를 가져오는 함수 선언.
    const getPostsList = async () => {
        //5.네트워크 로직.
        try{
            const address = "https://jsonplaceholder.typicode.com/posts";
            const result = await axios.get(address);
            console.log("%%%%%%%%%%%%%%%%", result.data);
            setPostsList(result.data);
        } catch (err) {
            console.log("################", err.message);
        }
    }

    //3. 데이터를 가져오는 버튼 선언 (버튼)
    //4. 데이터의 갯수 display.
    return (
        <div>
            <button onClick={getPostsList}>포스트리스트 가져오기.</button>
            <h1>
                {posts.length}개의 데이터가 있습니다.
            </h1>
            {posts && posts.map((post, index) => (
                <div key={index}>
                    <h1>
                        {post.title}
                    </h1>
                    <h3>
                        {post.body}
                    </h3>
                </div>
            ))}
        </div>
    );
};

export default Test;