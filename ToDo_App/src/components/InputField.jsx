import { useContext, useRef, useState } from "react";
import { InputContext } from "../store/InputContext";

function InputField() {
  const inputRef = useRef("");
  const dateRef = useRef("");
  const [error, setError] = useState("");
  const { inputValues } = useContext(InputContext);
  const handleBtn = () => {
    if (!inputRef.current.value || !dateRef.current.value) {
      setError("please enter a item and date");
      return;
    }
    inputValues(inputRef.current.value, dateRef.current.value);
    inputRef.current.value = "";
    dateRef.current.value = "";
    setError("");
  };
  return (
    <div>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <input ref={inputRef} type="text" />
      <input ref={dateRef} type="date" />
      <button onClick={handleBtn}>create</button>
    </div>
  );
}

export default InputField;
