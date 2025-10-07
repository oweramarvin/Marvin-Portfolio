import { useState } from "react";
import "./App.css";
import MySpace from "./pages/MySpace/MySpace";

function App() {
  const [count, setCount] = useState(0);

  return <MySpace></MySpace>;
}

export default App;
