import { createStore } from "redux";
import todoReducer from "../reducers/todo_reducer";

const toDoStore = createStore(todoReducer);

export default toDoStore;
