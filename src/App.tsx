import { useState } from "react";
import { CubicInput } from "./component/CubicInput";
import { CubicEquation } from "./component/CubicEquation";
import { CubicTable } from "./component/CubicTable";
import { CubicGraph } from "./component/CubicGraph";
import { CubicHistory } from "./component/CubicHistory";

interface HistoryEntry {
  a: number;
  b: number;
  c: number;
  d: number;
}

export const App = () => {
  const [coefficients, setCoefficients] = useState({ a: 0, b: 0, c: 0, d: 0 });
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const handleSave = (a: number, b: number, c: number, d: number) => {
    setCoefficients({ a, b, c, d });
    setHistory(prev => [...prev, { a, b, c, d }]);
  };

  const handleSelect = (a: number, b: number, c: number, d: number) => {
    setCoefficients({ a, b, c, d });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <CubicInput onSave={handleSave} />
      <CubicEquation {...coefficients} />
      <CubicTable {...coefficients} />
      <CubicGraph {...coefficients} />
      <CubicHistory history={history} onSelect={handleSelect} />
    </div>
  );
};