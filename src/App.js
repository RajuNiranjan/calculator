import React, { useState } from "react";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [expression, setExpression] = useState("");

  const handleNumberClick = (number) => {
    if (displayValue === "0") {
      setDisplayValue(number);
    } else {
      setDisplayValue(displayValue + number);
    }
  };

  const handleOperatorClick = (operator) => {
    setExpression(expression + displayValue + operator);
    setDisplayValue("0");
  };

  const handleDecimalClick = () => {
    if (!displayValue.includes(".")) {
      setDisplayValue(displayValue + ".");
    }
  };

  const handleClearClick = () => {
    setDisplayValue("0");
    setExpression("");
  };

  const handleEqualsClick = () => {
    const result = eval(expression + displayValue);
    setDisplayValue(result.toString());
    setExpression("");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-200 p-4 rounded-lg">
        <div id="display" className="text-4xl font-bold mb-4">
          {displayValue}
        </div>
        <div className="grid grid-cols-4 gap-4">
          <button id="seven" onClick={() => handleNumberClick("7")}>
            7
          </button>
          <button id="eight" onClick={() => handleNumberClick("8")}>
            8
          </button>
          <button id="nine" onClick={() => handleNumberClick("9")}>
            9
          </button>
          <button id="divide" onClick={() => handleOperatorClick("/")}>
            /
          </button>
          <button id="four" onClick={() => handleNumberClick("4")}>
            4
          </button>
          <button id="five" onClick={() => handleNumberClick("5")}>
            5
          </button>
          <button id="six" onClick={() => handleNumberClick("6")}>
            6
          </button>
          <button id="multiply" onClick={() => handleOperatorClick("*")}>
            *
          </button>
          <button id="one" onClick={() => handleNumberClick("1")}>
            1
          </button>
          <button id="two" onClick={() => handleNumberClick("2")}>
            2
          </button>
          <button id="three" onClick={() => handleNumberClick("3")}>
            3
          </button>
          <button id="subtract" onClick={() => handleOperatorClick("-")}>
            -
          </button>
          <button id="zero" onClick={() => handleNumberClick("0")}>
            0
          </button>
          <button id="decimal" onClick={handleDecimalClick}>
            .
          </button>
          <button id="equals" onClick={handleEqualsClick}>
            =
          </button>
          <button id="add" onClick={() => handleOperatorClick("+")}>
            +
          </button>
        </div>
        <button id="clear" onClick={handleClearClick}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
