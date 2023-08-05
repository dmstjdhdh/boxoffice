import React, {useState} from 'react';

const Test = () => {
    // "", 0, {}, [], t/f
    const [age, setAge] = useState(0)

    const myage = () => {
        setAge(23);
    }

    return (
        <div>
            <h1>{age}</h1>
            <button onClick={myage}>나이바꾸기</button>
        </div>
    );
};

export default Test;