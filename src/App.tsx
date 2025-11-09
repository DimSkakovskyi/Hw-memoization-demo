import SquareCalculator from "./components/SquareCalculator";
import Counter from "./components/Counter";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: 30 }}>
      <h1>React Memoization Demo</h1>
      <SquareCalculator />
      <hr style={{ margin: "20px 0" }} />
      <Counter />
    </div>
  );
}
