import { useState } from "react";

interface CubicInputProps {
  onChange: (a: number, b: number, c: number, d: number) => void;
  onSave: (a: number, b: number, c: number, d: number) => void;
}

export const CubicInput = ({ onChange, onSave }: CubicInputProps) => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  const [d, setD] = useState<number>(0);

  const handleSave = () => {
    onSave(a, b, c, d);
  };
  return (
  <div className="w-[400px] p-[20px] bg-[rgb(255,189,226)] rounded-[8px] text-[rgb(255,0,144)]">
    <h1 className="mb-4 text-[28px] font-bold border-b-2 border-[rgb(245,140,199)] pb-[10px]">
      Cubic Solver
    </h1>
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col gap-1">
        <label>a value:</label>
        <input type="number" value={a} onChange={e => { setA(Number(e.target.value)); onChange(Number(e.target.value), b, c, d); }}
          className="border-0 outline-none p-[5px] rounded" />
      </div>
      <div className="flex flex-col gap-1">
        <label>b value:</label>
        <input type="number" value={b} onChange={e => { setB(Number(e.target.value)); onChange(Number(e.target.value), b, c, d); }}
          className="border-0 outline-none p-[5px] rounded" />
      </div>
      <div className="flex flex-col gap-1">
        <label>c value:</label>
        <input type="number" value={c} onChange={e => { setC(Number(e.target.value)); onChange(Number(e.target.value), b, c, d); }}
          className="border-0 outline-none p-[5px] rounded" />
      </div>
      <div className="flex flex-col gap-1">
        <label>d value:</label>
        <input type="number" value={d} onChange={e => { setD(Number(e.target.value)); onChange(Number(e.target.value), b, c, d); }}
          className="border-0 outline-none p-[5px] rounded" />
      </div>
      <button onClick={handleSave}
        className="bg-[rgb(245,140,199)] text-[rgb(255,0,144)] text-[16px] p-[10px] cursor-pointer mt-[10px] border-0 rounded">
        Save
      </button>
    </div>
  </div>
);
};