// import * as React from "react";
// import { useState } from "react";
// function App(): React.JSX.Element {
//   let [number, setNumber] = useState<string>("");
//   const handleCalc = (num: string): void => {
//     setNumber(number + num);
//   };
//   return (
//     <div>
//       <div>{number || "0"}</div>
//       <button onClick={() => handleCalc("1")}>1</button>
//       <button onClick={() => handleCalc("2")}>2</button>
//       <button onClick={() => handleCalc("3")}>3</button>
//     </div>
//   );
// }
// export default App;
import Calculator from "./components/Calculator";
function App() {
  return (
    <div>
      {" "}
      <Calculator />{" "}
    </div>
  );
}
export default App;
