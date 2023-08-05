import React, {useState} from 'react';

const App = () => {
    // 상수, 변수, 함수, 상태를 선언하는 부분입니다.
    //
    // string, number, object, array, boolean type지정이 가능합니다.
    const [value, setValue] = useState(0);

    var a = "d";
    const b = 10;

    // 함수 형태
    const changeAvalue = () => {

        setValue(b);

    }

    //html을 불러오는 곳, javascript를 불러올 때에는 중괄호를 사용합니다.
    return ( // 화면에 보여지는 부분입니다.
        <div>
          <h1>{value}</h1>
            <button onClick={changeAvalue}>a내용바꾸기</button>
        </div>
    );
};

export default App;