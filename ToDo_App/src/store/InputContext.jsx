import { createContext, useState } from "react";

export const InputContext = createContext({
  inputValues: () => {},
  inputs: [],
  delList: () => {},
});

const InputContextProvider = InputContext.Provider;

const InputProvider = ({ children }) => {
  const [inputs, setInputs] = useState([]);

  const inputValues = (input, date) => {
    setInputs([...inputs, { input, date }]);
  };

  const delList = (index) => {
    const deletedItem = inputs.filter((_, i) => i !== index);
    setInputs(deletedItem);
  };

  return (
    <InputContextProvider value={{ inputValues, inputs, delList }}>
      {children}
    </InputContextProvider>
  );
};

export default InputProvider;
