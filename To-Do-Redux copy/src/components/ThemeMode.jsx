import { useDispatch, useSelector } from "react-redux";
import { isDarkMod } from "../actions/todo_action";
import "../App.css";

function ThemeMode() {
  const dispatch = useDispatch();
  const isDarkModes = useSelector((store) => store.isDarkMode);
  const handleChekBox = () => {
    dispatch(isDarkMod());
  };
  return (
    <div className="relative inline-block w-12 mr-2 align-middle select-none my-6">
      <input
        onChange={handleChekBox}
        type="checkbox"
        checked={isDarkModes}
        name="toggle"
        id="toggle"
        className="toggle-checkbox"
      />
      <label
        htmlFor="toggle"
        className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
      ></label>
    </div>
  );
}

export default ThemeMode;
