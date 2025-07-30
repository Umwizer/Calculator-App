import { useState } from "react";
import "./Calculators.css";
function Calculator(): React.JSX.Element {
  const [value, SetValue] = useState<string>("");
  const [previousValue, setPrevious] = useState<string>("");
  const [operator, setOperator] = useState<string>("");

  const handleNumberClick = (num: string): void => {
    SetValue(value + num);
  };

  const calculatorResults = (): string => {
    const prev = parseFloat(previousValue);
    const curr = parseFloat(value);
    if (isNaN(prev) || isNaN(curr)) return "";
    switch (operator) {
      case "+":
        return (prev + curr).toString();
      case "-":
        return (prev - curr).toString();
      case "*":
        return (prev * curr).toString();
      case "/":
        return curr === 0 ? "Error" : (prev / curr).toString();
      default:
        return "";
    }
  };

  const handleOperator = (op: string): void => {
    if (previousValue && operator && value) {
      const result = calculatorResults();
      setPrevious(result);
      SetValue("");
      setOperator(op);
    } else if (value) {
      setPrevious(value);
      SetValue("");
      setOperator(op);
    }
  };

  const handleEqualClick = (): void => {
    if (previousValue && operator && value) {
      const result = calculatorResults();
      SetValue(result);
      setPrevious("");
      setOperator("");
    }
  };

  const handleClearClick = (): void => {
    setPrevious("");
    SetValue("");
    setOperator("");
  };

  return (
    <>
      <div className="calculator-container">
        <div className="display">{value || previousValue || "0"}</div>
      </div>

      <div className="buttons-grid">
        {/* Number buttons */}
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((num) => (
          <button key={num} onClick={() => handleNumberClick(num)}>
            {num}
          </button>
        ))}

        {/* Operator buttons */}
        {["+", "-", "*", "/"].map((op) => (
          <button key={op} onClick={() => handleOperator(op)}>
            {op}
          </button>
        ))}

        <button onClick={handleEqualClick}>=</button>
        <button onClick={handleClearClick}>AC</button>
      </div>
    </>
  );
}

export default Calculator;
