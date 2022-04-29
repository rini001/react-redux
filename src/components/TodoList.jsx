import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTodos, toggleAction} from "../redux/action";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const [toggle, setToggle] = useState(false);
  const handleToggle = (e) => {
		let id = e.currentTarget.parentNode.id;
		setToggle(!toggle);

		const action = toggleAction({toggle,id})
		dispatch(action)
		// console.log(!toogle);
	}
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTodos()
  }, []);
  const fetchTodos =()=>{
    fetch("http://localhost:8000/posts")
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          dispatch(getTodos(res));
        });
  }
  const deleteTodos=(id)=>{
    fetch(`http://localhost:8000/posts/${id}`, {
      method: "DELETE",
    })
    .then((response) => {
      return response.json();
    })
    .then((forJson) => {
      fetchTodos()
    })
  }
  return (
    <div>
      {todos.map((todos, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            columnGap: "20px",
          }}
        >
          {/* <h1>{todos.value}</h1> */}
          <Link to={`/newpage/${todos.payload}`}>
            <h1>{todos.payload}</h1>
          </Link>
          <h3>{toggle.toString()}</h3>
          <button onClick={()=>deleteTodos(todos.id)}>
            DELETE
          </button>
          <button  onClick={handleToggle}>TOOGLE STATUS</button>
        </div>
      ))}
    </div>
  );
};
