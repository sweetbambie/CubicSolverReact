import { useState } from "react";
import { CubicInput } from "./component/CubicInput";
import { CubicEquation } from "./component/CubicEquation";
import { CubicTable } from "./component/CubicTable";

export const App = () => {
  const [coefficients, setCoefficients] = useState({ a: 0, b: 0, c: 0, d: 0 });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px"}}>
      <CubicInput onSave={(a, b, c, d) => setCoefficients({ a, b, c, d })} />
      <CubicEquation {...coefficients} />
      <CubicTable {...coefficients} />
    </div>
  );
};