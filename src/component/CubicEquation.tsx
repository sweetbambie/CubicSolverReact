interface CubicEquationProps {
  a: number;
  b: number;
  c: number;
  d: number;
}

export const CubicEquation = ({ a, b, c, d }: CubicEquationProps) => {
  return (
    <div style={{ width: "400px", padding: "20px", background: "rgb(255, 189, 226)", borderRadius: "8px", fontFamily: "'Courier New', Courier, monospace",}}>
      <h1 style={{ color: "rgb(255, 0, 144)", marginBottom: "16px", fontSize: "28px",fontWeight: "bold", borderBottom: "2px solid rgb(245, 140, 199)", paddingBottom: "10px",}}>
        Equation
      </h1>
      <p style={{ color: "rgb(255, 0, 144)", fontSize: "18px" }}>
        y = {a}x³ + {b}x² + {c}x + {d}
      </p>
    </div>
  );
};