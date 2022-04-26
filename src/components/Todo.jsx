import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodos } from '../redux/action'

export const Todo = () => {
const [value,setValue]=useState("")
const handleChange=(e)=>{
  setValue(e.target.value)
}
const dispatch=useDispatch()

const handleSubmit = () => {
let _data=dispatch(addTodos(value))
// console.log(_data.payload.value)
  fetch("http://localhost:8000/posts", {
    method: "POST",
    body: JSON.stringify(_data),
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((forJson) => {
      console.log("forJson", forJson);
    })
    .catch((err) => {
      console.log(err);
    });
}
  return (
    <div>
        <input type="text" value={value} onChange={handleChange}/>
        {/* <button onClick={()=>{ dispatch(addTodos(value))}}>ADD</button> */}
        <button onClick={handleSubmit}>ADD</button>

    </div>
  )
}
