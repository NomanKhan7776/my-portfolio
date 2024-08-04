import { useSelector } from "react-redux";
import InputField from "./components/InputField";
import ThemeMode from "./components/ThemeMode";
import TodoList from "./components/TodoList";
import { useEffect } from "react";
import "./App.css";

function App() {
  const isDarkMode = useSelector((store) => store.isDarkMode);
  useEffect(() => {
    const htmlElement = document.querySelector("html");

    htmlElement.classList.remove("dark", "light");
    if (isDarkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.add("light");
    }
  }, [isDarkMode]);
  return (
    <center>
      <div className="w-2/4 h-screen mx-auto flex flex-col items-center justify-center">
        <ThemeMode />
        <InputField />
        <TodoList />
      </div>
    </center>
  );
}

export default App;
