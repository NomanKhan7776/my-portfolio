import "./App.css";
import InputField from "./components/InputField";
import List from "./components/List";
import InputProvider from "./store/InputContext";

function App() {
  return (
    <InputProvider>
      <InputField />
      <List />
    </InputProvider>
  );
}

export default App;
