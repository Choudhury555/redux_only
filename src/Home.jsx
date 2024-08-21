import React from 'react'
import {useDispatch,useSelector} from "react-redux"

const Home = () => {
    const dispatch = useDispatch();
    const {counter} = useSelector(state=>state.custom);

    const addBtn = () =>{
        dispatch({
            type:"increment"
        })
    };

    const subBtn = () =>{
        dispatch({
            type:"decrement"
        })
    };

    const addBtnByValue = () =>{
        dispatch({
            type:"incrementByValue",
            payload:25
        })
    };

    return (
        <div>
            <h2>{counter}</h2>

            <button onClick={addBtn}>Increment</button>
            <button onClick={subBtn}>Decrement</button>
            <button onClick={addBtnByValue}>Increment By Value</button>
        </div>
    )
}

export default Home