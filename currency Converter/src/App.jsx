import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyLi = useCurrencyInfo(from);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convertedResult = () => {
    setConvertedAmount(amount * (currencyLi[to] || 0));
  };

  const options = Object.keys(currencyLi);

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://i.pinimg.com/564x/48/1b/df/481bdf018a14da41f4ab8f7a150881c5.jpg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur- bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertedResult();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                currencyLi={currencyLi}
                onCurrencyChange={(currency) => setFrom(currency)}
                currancyOptions={options}
                amount={amount}
                selectCurrancy={from}
                onAmountChange={(value) => setAmount(value)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                currencyLi={currencyLi}
                onCurrencyChange={(currency) => setTo(currency)}
                currancyOptions={options}
                amount={convertedAmount}
                selectCurrancy={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} To {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
