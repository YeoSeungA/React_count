import React from "react";
import { useState } from "react";

// 2배 증가, 2배 감소

function CountC () {
    const [calculate, setCalculate] = useState(0);

    const handlePlus = () => {
        setCalculate(calculate +1)
    }

    const handleMinus = () => {
        setCalculate(calculate -1)
    }

    const handleMultiply = () => {
        setCalculate(calculate * 2)
    }

    const handleDivide = () => {
        setCalculate(calculate / 2)
    }

    return (
        <div>
            <h1>CountC</h1>
            <div
            className="calculate__mini">계산 값은 {calculate} 입니다.</div>

            <button
            className="calculate__plus"
            onClick={handlePlus}>+</button>

            <button
            className="calculate__minus"
            onClick={handleMinus}>-</button>

            <button
            className="calculate__multiply"
            onClick={handleMultiply}>*2</button>

            <button
            className="calculate__divide"
            onClick={handleDivide}>/2</button>

        
        </div>
    );
};

export default CountC;