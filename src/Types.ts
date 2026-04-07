export type HistoryEntry = {
  a: number;
  b: number;
  c: number;
  d: number;
}

export type CubicHistoryProps = {
  history: HistoryEntry[];
  onSelect: (a: number, b: number, c: number, d: number) => void;
}

export type CubicInputProps = {
  onChange: (a: number, b: number, c: number, d: number) => void;
  onSave: (a: number, b: number, c: number, d: number) => void;
}

export type CubicEquationProps = {
  a: number;
  b: number;
  c: number;
  d: number;
}