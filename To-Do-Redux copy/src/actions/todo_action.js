// actions/todo_action.js
export const addTodo = (item, date) => ({
  type: "ADD_ITEM",
  payLoad: { item, date },
});

export const delTodo = (index) => ({
  type: "DEL_ITEM",
  payLoad: index,
});

export const startEditTodo = (index) => ({
  type: "START_EDIT",
  payLoad: index,
});

export const completeTodo = (index, item, date) => ({
  type: "COMPLETE_EDIT_TODO",
  payLoad: { index, item, date },
});

export const isDarkMod = () => ({ type: "IS_DARK_MODE" });
