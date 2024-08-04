// components/TodoList.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { delTodo, startEditTodo } from "../actions/todo_action";

function TodoList() {
  const todoItems = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  const handleDel = (index) => {
    dispatch(delTodo(index));
  };

  const handleEdit = (index) => {
    dispatch(startEditTodo(index));
  };

  return (
    <>
      {todoItems.length === 0 && <h1>There is no item</h1>}
      {todoItems.map((items, i) => (
        <div key={i} className="w-full flex justify-evenly items-center">
          <span>{items.item}</span>
          <span>{items.date}</span>
          <span>
            <button className="btn btn-success" onClick={() => handleEdit(i)}>
              EDIT
            </button>
            <button className="btn btn-danger" onClick={() => handleDel(i)}>
              DELETE
            </button>
          </span>
        </div>
      ))}
    </>
  );
}

export default TodoList;
