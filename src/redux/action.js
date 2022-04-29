import { ADD_TODOS,GET_TODOS, TOGGLE_TODOS} from "./actionType"; 

export const addTodos = (value) => {
	return {
		type: ADD_TODOS,
	    payload:value
	};
};
export const getTodos = (value) => {
	return {
		type: GET_TODOS,
		payload:value
}
}
export const toggleAction = (payload) => {
	return {
		type: TOGGLE_TODOS,
		payload,
	};
};
