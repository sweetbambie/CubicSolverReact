import type { CubicHistoryProps } from "../types";

export const CubicHistory = ({ history, onSelect }: CubicHistoryProps) => {
  return (
    <div className="w-[400px] p-[20px] bg-[rgb(255,189,226)] rounded-[8px] text-[rgb(255,0,144)] font-['Courier_New',Courier,monospace]">
      <h1 className="mb-4 text-[28px] font-bold border-b-2 border-[rgb(245,140,199)] pb-[10px]">
        History
      </h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[rgb(245,140,199)] font-bold">
            <td className="p-2">#</td>
            <td className="p-2">a</td>
            <td className="p-2">b</td>
            <td className="p-2">c</td>
            <td className="p-2">d</td>
          </tr>
        </thead>
        <tbody>
          {history.map((entry, index) => (
            <tr
              key={index}
              onClick={() => onSelect(entry.a, entry.b, entry.c, entry.d)}
              className="cursor-pointer border-b border-[rgb(245,140,199)]"
            >
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{entry.a}</td>
              <td className="p-2">{entry.b}</td>
              <td className="p-2">{entry.c}</td>
              <td className="p-2">{entry.d}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};