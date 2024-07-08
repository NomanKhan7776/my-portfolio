import InputField from "./components/InputFile";
import styles from "./App.module.css";
import Btns from "./components/Buttons";
import { useState } from "react";
function App() {
  let btns = [
    "*",
    "/",
    "+",
    "-",
    "6",
    "7",
    "8",
    "9",
    "2",
    "3",
    "4",
    "5",
    "=",
    "00",
    "0",
    "1",
  ];
  let [addNum, setAddNum] = useState("");
  function inputNum(num) {
    if (num !== "=") {
      setAddNum((prev) => prev + num);
    } else if (num === "=") {
      try {
        let result = new Function("return " + addNum)();
        let strResult = String(result);
        if (strResult.includes(".")) {
          setAddNum(parseFloat(result).toFixed(2));
        } else {
          setAddNum(strResult);
        }
      } catch (Err) {
        setAddNum("Error");
      }
    }
  }
  return (
    <center>
      <div className={styles.div}>
        <InputField value={addNum}></InputField>
        <Btns btn={btns} inputNum={inputNum}></Btns>
      </div>
    </center>
  );
}

export default App;
