interface HistoryEntry {
  a: number;
  b: number;
  c: number;
  d: number;
}

interface CubicHistoryProps {
  history: HistoryEntry[];
  onSelect: (a: number, b: number, c: number, d: number) => void;
}

export const CubicHistory = ({ history, onSelect }: CubicHistoryProps) => {
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
        History
      </h1>

      {history.length === 0 ? (
        <p style={{ color: "rgb(255, 0, 144)" }}>No saved equations yet.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "rgb(245, 140, 199)", color: "rgb(255, 0, 144)", fontWeight: "bold" }}>
              <td style={{ padding: "8px" }}>#</td>
              <td style={{ padding: "8px" }}>a</td>
              <td style={{ padding: "8px" }}>b</td>
              <td style={{ padding: "8px" }}>c</td>
              <td style={{ padding: "8px" }}>d</td>
            </tr>
          </thead>
          <tbody>
            {history.map((entry, index) => (
              <tr
                key={index}
                onClick={() => onSelect(entry.a, entry.b, entry.c, entry.d)}
                style={{ cursor: "pointer", color: "rgb(255, 0, 144)", borderBottom: "1px solid rgb(245, 140, 199)" }}
              >
                <td style={{ padding: "8px" }}>{index + 1}</td>
                <td style={{ padding: "8px" }}>{entry.a}</td>
                <td style={{ padding: "8px" }}>{entry.b}</td>
                <td style={{ padding: "8px" }}>{entry.c}</td>
                <td style={{ padding: "8px" }}>{entry.d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};