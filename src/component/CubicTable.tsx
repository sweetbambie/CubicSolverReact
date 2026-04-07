import type { CubicEquationProps } from "../Types"; 

export const CubicTable = ({ a, b, c, d }: CubicEquationProps) => {
  const p = (3 * a * c - (b**2)) / (3 * a ** 2);
  const q = ((27 * (a**2) * d - 9 * a * b * c + 2 * (b**3))) / (27 * (a**3))
  const discriminant = ((q / 2)** 2) + ((p / 3)** 3);

  let x1: number, x2: string | number, x3: string | number;

  if (discriminant < 0) {
    const angle = (1 / 3) * Math.acos(-q / (2 * (Math.sqrt(-Math.pow(p / 3, 3)))));
    x1 = (2 * (Math.sqrt(-p / 3)) * Math.cos(angle)) - (b / (3 * a));
    x2 = (2 * (Math.sqrt(-p / 3)) * Math.cos(angle + (2 * Math.PI) / 3)) - (b / (3 * a));
    x3 = (2 * (Math.sqrt(-p / 3)) * Math.cos(angle + (4 * Math.PI) / 3)) - (b / (3 * a));
  } else if (discriminant > 0) {
    const u = Math.cbrt((-q / 2) + Math.sqrt(discriminant));
    const v = Math.cbrt((-q / 2) - Math.sqrt(discriminant));
    x1 = u + v - (b / (3 * a))
    x2 = "Complex";
    x3 = "Complex"
  } else {
    const r1 = Math.cbrt(-q / 2);
    const shift = b / (3 * a);

    x1 = 2 * r1 - shift;
    x2 = -r1 - shift;
    x3 = -r1 - shift;
  }

  const minX = ((-b - Math.sqrt(b**2 - 3*a*c)) / (3*a))
  const maxX = ((-b + Math.sqrt(b**2 - 3*a*c)) / (3*a))
  const minY = (a*(minX**3) + b*(minX**2) + c*minX + d)
  const maxY = (a*(maxX**3) + b*(maxX**2) + c*maxX + d)

  return (
    <div className="flex flex-col p-[20px] bg-[rgb(255,189,226)] rounded-[8px] font-['Courier_New',Courier,monospace] text-[rgb(255,0,144)]">
      <h1 className="text-[rgb(255,0,144)] mb-4 text-[28px] font-bold border-b-2 border-[rgb(245,140,199)] pb-[10px]">
        Results
      </h1>
      <table className="w-full border-collapse mt-2">
        <tbody>
          <tr>
            <td className="p-2 border-b border-[rgb(255,140,200)] text-[rgb(255,0,144)]">p</td>
            <td className="p-2 border-b border-[rgb(255,140,200)] text-[rgb(255,0,144)]">{p}</td>
          </tr>
          <tr>
            <td className="p-2 border-b border-[rgb(255,140,200)] text-[rgb(255,0,144)]">q</td>
            <td className="p-2 border-b border-[rgb(255,140,200)] text-[rgb(255,0,144)]">{q}</td>
          </tr>
          <tr>
            <td className="p-2 border-b border-[rgb(255,140,200)] text-[rgb(255,0,144)]">Discriminant</td>
            <td className="p-2 border-b border-[rgb(255,140,200)] text-[rgb(255,0,144)]">{discriminant}</td>
          </tr>
          <tr className="bg-[rgb(245,140,199)] text-[rgb(255,0,144)] font-bold">
            <td className="p-2 text-[rgb(255,0,144)]">Value</td>
            <td className="p-2 text-[rgb(255,0,144)]">x</td>
            <td className="p-2 text-[rgb(255,0,144)]">y</td>
          </tr>
          <tr>
            <td className="p-2 border-b border-[rgb(255,140,200)] text-[rgb(255,0,144)]">Root 1</td>
            <td className="p-2 border-b border-[rgb(255,140,200)] text-[rgb(255,0,144)]">{x1.toFixed(2)}</td>
            <td className="p-2 border-b border-[rgb(255,140,200)] text-[rgb(255,0,144)]">0</td>
          </tr>
          <tr>
            <td className="p-2 border-b border-[rgb(255,140,200)] text-[rgb(255,0,144)]">Root 2</td>
            <td className="p-2 border-b border-[rgb(255,140,200)] text-[rgb(255,0,144)]">{typeof x2 === "number" ? x2.toFixed(2) : x2}</td>
            <td className="p-2 border-b border-[rgb(255,140,200)] text-[rgb(255,0,144)]">0</td>
          </tr>
          <tr>
            <td className="p-2 border-b border-[rgb(255,140,200)] text-[rgb(255,0,144)]">Root 3</td>
            <td className="p-2 border-b border-[rgb(255,140,200)] text-[rgb(255,0,144)]">{typeof x3 === "number" ? x3.toFixed(2) : x3}</td>
            <td className="p-2 border-b border-[rgb(255,140,200)] text-[rgb(255,0,144)]">0</td>
          </tr>
          <tr>
            <td className="p-2 border-b border-[rgb(255,140,200)] text-[rgb(255,0,144)]">Minimum</td>
            <td className="p-2 border-b border-[rgb(255,140,200)] text-[rgb(255,0,144)]">{minX.toFixed(2)}</td>
            <td className="p-2 border-b border-[rgb(255,140,200)] text-[rgb(255,0,144)]">{minY.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="p-2 border-b border-[rgb(255,140,200)] text-[rgb(255,0,144)]">Maximum</td>
            <td className="p-2 border-b border-[rgb(255,140,200)] text-[rgb(255,0,144)]">{maxX.toFixed(2)}</td>
            <td className="p-2 border-b border-[rgb(255,140,200)] text-[rgb(255,0,144)]">{maxY.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}