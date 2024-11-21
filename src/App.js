import { useSelector } from "@xstate/react";
import "./styles.css";
import { toggleActor } from "./toggle";

export default function App() {
  const state = useSelector(toggleActor, (snapshot) => snapshot.value);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <p>The current value of the actor is {state}</p>
      <button onClick={() => toggleActor.send({ type: "toggle" })}>
        Toggle
      </button>
    </div>
  );
}
