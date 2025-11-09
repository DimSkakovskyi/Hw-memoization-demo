import { useMemo, useState } from "react";

export default function SquareCalculator() {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState("light");

  const squared = useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]);

  const styles = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "10px",
    borderRadius: "8px",
  };

  return (
    <div style={styles}>
      <h2>useMemo Example</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Result: {squared}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}
