import { ADD_TODOS,REMOVE_TODOS } from "./actionType"; 
import {v4 as uuid} from "uuid"
export const addTodos = (value) => {
	return {
		type: ADD_TODOS,
	    payload:{
            id:uuid(),
            value,
        },
	};
};
export const removeTodos = (payload) => {
	return {
		type: REMOVE_TODOS,
		payload
	};
}

