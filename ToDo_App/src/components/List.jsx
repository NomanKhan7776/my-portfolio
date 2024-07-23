import { useContext } from "react";
import { InputContext } from "../store/InputContext";

function List() {
  const { inputs, delList } = useContext(InputContext);
  return (
    <div>
      {inputs.length === 0 && <div>there is no items</div>}
      {inputs.map((val, i) => (
        <div key={i}>
          <span style={{ margin: "0px 10px" }}>{val.input}</span>
          <span>{val.date}</span>
          <span>
            <button onClick={() => delList(i)}>Delete</button>
          </span>
        </div>
      ))}
    </div>
  );
}

export default List;
