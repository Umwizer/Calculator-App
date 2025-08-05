import { useState } from "react";
import "./Calculators.css";

function Calculator(): React.JSX.Element {
  const [value, setValue] = useState<string>("");
  const [previousValue, setPrevious] = useState<string>("");
  const [operator, setOperator] = useState<string>("");

  const handleNumberClick = (num: string): void => {
    setValue(value + num);
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
    const realOp = op === "×" ? "*" : op === "÷" ? "/" : op;
    if (previousValue && operator && value) {
      const result = calculatorResults();
      setPrevious(result);
      setValue("");
      setOperator(realOp);
    } else if (value) {
      setPrevious(value);
      setValue("");
      setOperator(realOp);
    }
  };

  const handleEqualClick = (): void => {
    if (previousValue && operator && value) {
      const result = calculatorResults();
      setValue(result);
      setPrevious("");
      setOperator("");
    }
  };

  const handleClearClick = (): void => {
    setPrevious("");
    setValue("");
    setOperator("");
  };

  const handlePlusMinus = (): void => {
    if (value) {
      setValue((parseFloat(value) * -1).toString());
    }
  };

  const handlePercentage = (): void => {
    if (value) {
      setValue((parseFloat(value) / 100).toString());
    }
  };

  return (
    <div className="calculator-container">
      <div className="display">{value || previousValue || "0"}</div>

      <div className="buttons">
        <button className="secondary" onClick={handleClearClick}>
          AC
        </button>
        <button className="secondary" onClick={handlePlusMinus}>
          +/-
        </button>
        <button className="secondary" onClick={handlePercentage}>
          %
        </button>
        <button className="orange" onClick={() => handleOperator("÷")}>
          ÷
        </button>

        <button className="secondary" onClick={() => handleNumberClick("7")}>
          7
        </button>
        <button className="secondary" onClick={() => handleNumberClick("8")}>
          8
        </button>
        <button className="secondary" onClick={() => handleNumberClick("9")}>
          9
        </button>
        <button className="orange" onClick={() => handleOperator("×")}>
          ×
        </button>

        <button className="secondary" onClick={() => handleNumberClick("4")}>
          4
        </button>
        <button className="secondary" onClick={() => handleNumberClick("5")}>
          5
        </button>
        <button className="secondary" onClick={() => handleNumberClick("6")}>
          6
        </button>
        <button className="orange" onClick={() => handleOperator("-")}>
          -
        </button>

        <button className="secondary" onClick={() => handleNumberClick("1")}>
          1
        </button>
        <button className="secondary" onClick={() => handleNumberClick("2")}>
          2
        </button>
        <button className="secondary" onClick={() => handleNumberClick("3")}>
          3
        </button>
        <button className="orange" onClick={() => handleOperator("+")}>
          +
        </button>

        <button className="zero-button" onClick={() => handleNumberClick("0")}>
          0
        </button>
        <button onClick={() => handleNumberClick(".")}>.</button>
        <button className="orange" onClick={handleEqualClick}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
