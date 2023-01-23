import React from "react";
import "../App.css";

function Button({ setValueOne, valueOne }) {
  let list = [7, 8, 9, "Del", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "x"];

  const handleClick = (e) => {
    setValueOne((preval) =>
      e.target.innerText === "x" ? preval + "*" : preval + e.target.innerText
    );
  };
  const handleReset = () => {
    setValueOne("");
  };

  const handleDel = () => {
    setValueOne((preval) => preval.substring(0, preval.length - 1));
  };
  const handleResult = () => {
    setValueOne((preval) => {
      try {
        const value = eval(preval);
        return value;
      } catch (error) {
        console.log(error);
        return "SyntaxError";
      }
    });
    console.log(valueOne);
  };
  return (
    <div className="keyBoard">
      {list.map((item) => {
        return (
          <button
            className="btn btn-1"
            onClick={item === "Del" ? handleDel : handleClick}
            disabled={valueOne === "SyntaxError"}
          >
            {item}
          </button>
        );
      })}
      <button className="btn btn-2" onClick={handleReset}>
        Reset
      </button>
      <button
        className="btn btn-3"
        onClick={handleResult}
        disabled={valueOne === "SyntaxError"}
      >
        =
      </button>
    </div>
  );
}

export default Button;
