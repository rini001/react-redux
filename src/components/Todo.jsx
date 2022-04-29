import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodos, getTodos } from '../redux/action'

export const Todo = () => {
const [value,setValue]=useState("")
const handleChange=(e)=>{
  setValue(e.target.value)
}
const dispatch=useDispatch()
const fetchTodos =()=>{
  fetch("http://localhost:8000/posts")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        dispatch(getTodos(res));
      });
}
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
      fetchTodos()
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
