import React from 'react';
import { useState } from "react";


function CountA () { 
    const [count, setCount] = useState(0);

    const handleUpClick = () => {
        setCount(count + 1);
    }

    const handleDownClick = () => {
        setCount(count - 1);
    }
    console.log("나옵니다.");

    return (
        <div className="Count">
            {/* <Route path="/count" element={<Count />}/> */}

            <h1>Click botton</h1>
            <div 
            className="count__text"
            count={count}
            >count는 {count} 입니다.</div>
            
            <button
            className="count__up"
            onClick={handleUpClick}
            >UP</button>

            <button
            className="count__down"
            onClick={handleDownClick}
            >Down
            </button>

        </div>
    );
};

export default CountA;