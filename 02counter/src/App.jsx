import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };
  const subValue = () => {
    if (counter != 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Counter value:{counter}</h1>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={subValue}>Sub value</button>
    </>
  );
}

export default App;
