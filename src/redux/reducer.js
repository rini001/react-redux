import { ADD_TODOS, REMOVE_TODOS } from "./actionType";
const initState = {
    todos: []
};

export const reducer = (state = initState, { type, payload }) => {
	switch(type){
        case ADD_TODOS:
             return {
               ...state,
               todos : [...state.todos,payload]
             };
             case REMOVE_TODOS:
             return {
               ...state,
               todos: [...state.todos.filter((e) => e.id !== payload)],
             };
             default:
                 return state
            }   
};