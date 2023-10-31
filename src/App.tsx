import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";

function App(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
