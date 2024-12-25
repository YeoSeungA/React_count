import React from "react";
import {useState} from "react";

function CountB () {
    const [count, setCount] = useState(0);

    const handleUpClick = () => {
        setCount (count + 1);
    }

    const handleDownClick = () => {
        if (count > 0) {
        setCount (count - 1)}
        else {setCount(count)};
    }

    return (
        <div>
            <h1>Click botton2</h1>
            <div 
            className="click__botton2"
            >count는 {count} 입니다.</div>
            <button
            className="count__up2"
            onClick={handleUpClick}
            > Up </button>
            <button
            className="count__down2"
            onClick={handleDownClick}
            > Down </button>
        </div>        
    );
}

export default CountB;