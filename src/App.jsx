import "./App.css";
import { useState } from "react";
import UserPanel from "./components/user/UserPanel";

function App() {
  const [player, setPlayer] = useState("Player 1");

  console.log("app généré");
  return (
    <>
      <UserPanel />
    </>
  );
}

export default App;
