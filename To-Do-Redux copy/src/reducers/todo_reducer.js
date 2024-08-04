// reducers/todo_reducer.js
const INITIAL_VALUE = {
  todos: [],
  editIndex: null,
  isDarkMode: false,
};

const todoReducer = (store = INITIAL_VALUE, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...store, todos: [...store.todos, action.payLoad] };
    case "DEL_ITEM":
      return {
        ...store,
        todos: store.todos.filter((_, i) => i !== action.payLoad),
      };
    case "START_EDIT":
      return { ...store, editIndex: action.payLoad };
    case "COMPLETE_EDIT_TODO": {
      const updatedTodos = store.todos.map((todos, i) =>
        i === action.payLoad.index
          ? { item: action.payLoad.item, date: action.payLoad.date }
          : todos
      );
      return { ...store, todos: updatedTodos, editIndex: null };
    }
    case "IS_DARK_MODE":
      return { ...store, isDarkMode: !store.isDarkMode };

    default:
      return store;
  }
};

export default todoReducer;
