interface CubicEquationProps {
  a: number;
  b: number;
  c: number;
  d: number;
}

export const CubicEquation = ({ a, b, c, d }: CubicEquationProps) => {
  return (
  <div className="w-[400px] p-[20px] bg-[rgb(255,189,226)] rounded-[8px] text-[rgb(255,0,144)]">
    <h1 className="mb-4 text-[28px] font-bold border-b-2 border-[rgb(245,140,199)] pb-[10px]">
      Equation
    </h1>
    <p className="text-[18px]">
      y = {a}x³ + {b}x² + {c}x + {d}
    </p>
  </div>
);
};