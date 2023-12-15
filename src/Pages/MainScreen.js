import { useState } from "react";
import React from 'react'
import DisplayResult from './Components/Result.js'

const MainScreen = () => {
    var [id, setId] = useState(0);
    const [results, setResults] = useState([])

       const handleSubmit = () => {
            fetch("https://fakestoreapi.com/products/"+id)
            .then(response => response.json())
            .then(json => setResults(json))
            .catch(error => console.error(error))
        }

        console.log(results)

        const onChange = (e) => {
            setId(e.target.value)
        }

        return <div>
        <label>
            Search Product ID:
            <input type="Number" onChange={onChange}></input>
        </label>
        <button onClick={handleSubmit} >Submit</button>
        <DisplayResult id={results.id} name={results.title} cost={results.price} ></DisplayResult>
    </div>
}

export default MainScreen