import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {  removeTodos } from '../redux/action'

export const TodoList = () => {
  const todos=useSelector((state)=>state.todos)
  const [toggle,setToggle] = useState(false);
  const handleToggle = (e) => {
	setToggle(!toggle)
	}
  // console.log(todos)
  // const [data, setData] = useState([]);
  const dispatch=useDispatch()
  // useEffect(() => {
	// 	fetch(`http://localhost:8000/posts`, {
	// 		method: "GET",
	// 		headers: {
	// 			"content-type": "application/json; charset=utf-8",
	// 		},
	// 	})
	// 		.then((response) => {
	// 			return response.json();
	// 		})
	// 		.then((res) => {
	// 	console.log(res)
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// }, []);
  return (
    <div>
      {todos.map((todos,i)=>(
            <div key={i} style={{display:"flex", justifyContent:"center",alignItems:"center",columnGap:"20px"}} >
                {/* <h1>{todos.value}</h1> */}
                <Link to={`/newpage/${todos.value}`}><h1>{todos.value}</h1></Link>
                <h3>{toggle.toString()}</h3>
                <button onClick={()=>dispatch(removeTodos(todos.id))}>DELETE</button>
                <button onClick={handleToggle}>TOOGLE STATUS</button>
                </div>
        ))}
    </div>
  )
}
