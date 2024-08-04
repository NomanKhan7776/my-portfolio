// components/InputField.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, completeTodo } from "../actions/todo_action";

function InputField() {
  const itemRef = useRef(null);
  const dateRef = useRef(null);
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const editIndex = useSelector((store) => store.editIndex);
  const todos = useSelector((store) => store.todos);


  useEffect(() => {
    if (editIndex !== null) {
      itemRef.current.value = todos[editIndex].item;
      dateRef.current.value = todos[editIndex].date;
    } else {
      itemRef.current.value = "";
      dateRef.current.value = "";
    }
  }, [editIndex, todos]);

  const handleAdd = () => {
    const itemVal = itemRef.current.value.trim();
    const dateVal = dateRef.current.value.trim();

    if (!itemVal && !dateVal) {
      setError("please provide item and date");
      return;
    }
    if (!itemVal) {
      setError("please enter item");
      return;
    }
    if (!dateVal) {
      setError("please enter date");
      return;
    }
    if (editIndex !== null) {
      dispatch(completeTodo(editIndex, itemVal, dateVal));
    } else {
      dispatch(addTodo(itemVal, dateVal));
    }
    itemRef.current.value = "";
    dateRef.current.value = "";
    setError("");
  };

  return (
    <div className="w-full flex justify-evenly items-center">
      <input
        ref={itemRef}
        type="text"
        className="border-2 border-blue-400 rounded "
        placeholder="Enter item"
      />
      <input
        ref={dateRef}
        type="date"
        className="border-2 border-blue-400 rounded "
      />
      <button className="btn btn-primary" onClick={handleAdd}>
        {editIndex !== null ? "Update" : "Add"}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default InputField;
