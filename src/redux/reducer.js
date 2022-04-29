import { ADD_TODOS, GET_TODOS,TOGGLE_TODOS} from "./actionType";
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
             case GET_TODOS:
             return {
               ...state,
               todos : payload
             };
             case TOGGLE_TODOS:
              const toogle = (!payload.toogle)
              const index = state.todo.findIndex((elem) => elem.id === payload.id);
              state.todos[index].status = toogle;
              return {
                ...state,
                todos: [...state.todos],
              };
             default:
                 return state
            }   
};