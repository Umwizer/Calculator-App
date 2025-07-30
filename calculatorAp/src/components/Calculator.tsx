import { useState } from "react";

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
    }
  };
}
export default Calculator;
