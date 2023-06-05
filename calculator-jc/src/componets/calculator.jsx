import { useState } from "react"
import React from 'react'

const Calculator = () => {
    const [val, setVal] = useState('')

    const delLast = () => {
        try {
            setVal(val.slice(0, -1))
        } catch (error) {
            setVal('')
        }
    }

    const calculate = () => {
        try {
            setVal(eval(val))
        } catch (error) {
            setVal('error')
        }
    }

    return (

        <div className='container-calculator text-center'>
            <h1>Calculadora</h1>
            <div className="row">
                <div className="col">
                    <input type="text" value={val} onChange={(e) => setVal(e.target.value)}/>
                </div>
                <div className="col">
                    <button value='C' onClick={() => delLast()}>C/E</button>
                </div>
            </div>
            <div className=" row">
                <div className="col">
                    <button value='1' onClick={(e) => setVal(val + e.target.value)}>1</button>
                </div>
                <div className="col">
                    <button value='2' onClick={(e) => setVal(val + e.target.value)}>2</button>
                </div>
                <div className="col">
                    <button value='3' onClick={(e) => setVal(val + e.target.value)}>3</button>
                </div>
                <div className="col">
                    <button value='/' onClick={(e) => setVal(val + e.target.value)}>/</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button value='4' onClick={(e) => setVal(val + e.target.value)}>4</button>
                </div>
                <div className="col">
                    <button value='5' onClick={(e) => setVal(val + e.target.value)}>5</button>
                </div>
                <div className="col">
                    <button value='6' onClick={(e) => setVal(val + e.target.value)}>6</button>
                </div>
                <div className="col">
                    <button value='+' onClick={(e) => setVal(val + e.target.value)}>+</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button value='7' onClick={(e) => setVal(val + e.target.value)}>7</button>
                </div>
                <div className="col">
                    <button value='8' onClick={(e) => setVal(val + e.target.value)}>8</button>
                </div>
                <div className="col">
                    <button value='9' onClick={(e) => setVal(val + e.target.value)}>9</button>
                </div>
                <div className="col">
                    <button value='-' onClick={(e) => setVal(val + e.target.value)}>-</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button value='0' onClick={(e) => setVal(val + e.target.value)}>0</button>
                </div>
                <div className="col">
                    <button value='.' onClick={(e) => setVal(val + e.target.value)}>.</button>
                </div>
                <div className="col">
                    <button value='=' onClick={() => calculate()}>=</button>
                </div>
                <div className="col">
                    <button value='*' onClick={(e) => setVal(val + e.target.value)}>x</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator;