import React, { useState, useCallback } from "react";

function Button({ onClick, label }: { onClick: () => void; label: string }) {
  console.log("Render:", label);
  return <button onClick={onClick}>{label}</button>;
}

const MemoButton = React.memo(Button);

export default function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <h2>useCallback + React.memo Example</h2>
      <p>Count: {count}</p>
      <MemoButton onClick={increment} label="Increment" />

      <div style={{ marginTop: 10 }}>
        <input
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
}
