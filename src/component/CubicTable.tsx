interface CubicEquationProps {
  a: number;
  b: number;
  c: number;
  d: number;
}

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

  return (
    <div style={{
      width: "400px",
      padding: "20px",
      background: "rgb(255, 189, 226)",
      borderRadius: "8px",
      fontFamily: "'Courier New', Courier, monospace",
    }}>
    <h1 style={{
      color: "rgb(255, 0, 144)",
        marginBottom: "16px",
        fontSize: "28px",
        fontWeight: "bold",
        borderBottom: "2px solid rgb(245, 140, 199)",
        paddingBottom: "10px",
      }}>
        Results
      </h1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "8px" }}>
        <tbody>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid rgb(245, 140, 199)", color: "rgb(255, 0, 144)" }}>p</td>
            <td style={{ padding: "8px", borderBottom: "1px solid rgb(245, 140, 199)", color: "rgb(255, 0, 144)" }}>{p}</td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid rgb(245, 140, 199)", color: "rgb(255, 0, 144)" }}>q</td>
            <td style={{ padding: "8px", borderBottom: "1px solid rgb(245, 140, 199)", color: "rgb(255, 0, 144)" }}>{q}</td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid rgb(245, 140, 199)", color: "rgb(255, 0, 144)" }}>Discriminant</td>
            <td style={{ padding: "8px", borderBottom: "1px solid rgb(245, 140, 199)", color: "rgb(255, 0, 144)" }}>{discriminant}</td>
          </tr>
          <tr style={{ background: "rgb(245, 140, 199)", color: "rgb(255, 0, 144)", fontWeight: "bold" }}>
            <td style={{ padding: "8px" }}>Value</td>
            <td style={{ padding: "8px" }}>x</td>
            <td style={{ padding: "8px" }}>y</td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid rgb(245, 140, 199)", color: "rgb(255, 0, 144)" }}>Root 1</td>
            <td style={{ padding: "8px", borderBottom: "1px solid rgb(245, 140, 199)", color: "rgb(255, 0, 144)" }}>{x1}</td>
            <td style={{ padding: "8px", borderBottom: "1px solid rgb(245, 140, 199)", color: "rgb(255, 0, 144)" }}>0</td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid rgb(245, 140, 199)", color: "rgb(255, 0, 144)" }}>Root 2</td>
            <td style={{ padding: "8px", borderBottom: "1px solid rgb(245, 140, 199)", color: "rgb(255, 0, 144)" }}>{x2}</td>
            <td style={{ padding: "8px", borderBottom: "1px solid rgb(245, 140, 199)", color: "rgb(255, 0, 144)" }}>0</td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid rgb(245, 140, 199)", color: "rgb(255, 0, 144)" }}>Root 3</td>
            <td style={{ padding: "8px", borderBottom: "1px solid rgb(245, 140, 199)", color: "rgb(255, 0, 144)" }}>{x3}</td>
            <td style={{ padding: "8px", borderBottom: "1px solid rgb(245, 140, 199)", color: "rgb(255, 0, 144)" }}>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}