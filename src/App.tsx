import { CubicInput } from "./component/CubicInput";

export const App = () => {
  return <CubicInput onSave={(a, b, c, d) => console.log(a, b, c, d)} />;
};