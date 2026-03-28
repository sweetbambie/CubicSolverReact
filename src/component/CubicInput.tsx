import { useState } from "react";

interface CubicInputProps {
  onSave: (a: number, b: number, c: number, d: number) => void;
}

export const CubicInput = ({ onSave }: CubicInputProps) => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  const [d, setD] = useState<number>(0);

  const handleSave = () => {
    onSave(a, b, c, d);
  };

  return (
    <div style={{ width: "400px", padding: "20px", background: "rgb(255, 189, 226)", borderRadius: "8px", fontFamily: "'Courier New', Courier, monospace", }}>
      <h1 style={{ color: "rgb(255, 0, 144)", marginBottom: "16px", fontSize: "28px", fontWeight: "bold", borderBottom: "2px solid rgb(245, 140, 199)", paddingBottom: "10px",}}>
        Cubic Solver
      </h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <label style={{ color: "rgb(255, 0, 144)" }}>a value:</label>
          <input type="number" value={a} onChange={e => setA(Number(e.target.value))}
            style={{ border: 0, outline: 0, padding: "5px", borderRadius: "4px" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <label style={{ color: "rgb(255, 0, 144)" }}>b value:</label>
          <input type="number" value={b} onChange={e => setB(Number(e.target.value))}
            style={{ border: 0, outline: 0, padding: "5px", borderRadius: "4px" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <label style={{ color: "rgb(255, 0, 144)" }}>c value:</label>
          <input type="number" value={c} onChange={e => setC(Number(e.target.value))}
            style={{ border: 0, outline: 0, padding: "5px", borderRadius: "4px" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <label style={{ color: "rgb(255, 0, 144)" }}>d value:</label>
          <input type="number" value={d} onChange={e => setD(Number(e.target.value))}
            style={{ border: 0, outline: 0, padding: "5px", borderRadius: "4px" }} />
        </div>
        <button onClick={handleSave} style={{ background: "rgb(245, 140, 199)", color: "rgb(255, 0, 144)", fontSize: "16px", padding: "10px", cursor: "pointer", marginTop: "10px", border: 0, borderRadius: "4px", fontFamily: "'Courier New', Courier, monospace",}}>
          Save
        </button>
      </div>
    </div>
  );
};