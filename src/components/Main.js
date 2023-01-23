import React from "react";
import { useState } from "react";
import "../App.css";
import Button from "./Button";

function Main() {
  const [valueOne, setValueOne] = useState("");

  const handleTimes = (e) => {
    setValueOne((preval) => preval + "*");
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
    <div className="container">
      <div className="main">
        <div className="header">
          <span>Calc</span>
          <span></span>
        </div>
        <div className="display">
          <span>{valueOne}</span>
        </div>
        <div>
          <Button valueOne={valueOne} setValueOne={setValueOne} />
        </div>
        {/* <div className="keyBoard">
          <button className="btn btn-1" onClick={handleClick}>
            7
          </button>
          <button className="btn btn-1" onClick={handleClick}>
            8
          </button>
          <button className="btn btn-1" onClick={handleClick}>
            9
          </button>
          <button className="btn btn-1" onClick={handleDel}>
            Del
          </button>
          <button
            className="btn btn-1"
            onClick={handleClick}
            disabled={valueOne === "SyntaxError"}
          >
            4
          </button>
          <button
            className="btn btn-1"
            onClick={handleClick}
            disabled={valueOne === "SyntaxError"}
          >
            5
          </button>
          <button
            className="btn btn-1"
            onClick={handleClick}
            disabled={valueOne === "SyntaxError"}
          >
            6
          </button>
          <button
            className="btn btn-1"
            onClick={handleClick}
            disabled={valueOne === "SyntaxError"}
          >
            +
          </button>
          <button
            className="btn btn-1"
            onClick={handleClick}
            disabled={valueOne === "SyntaxError"}
          >
            1
          </button>
          <button
            className="btn btn-1"
            onClick={handleClick}
            disabled={valueOne === "SyntaxError"}
          >
            2
          </button>
          <button
            className="btn btn-1"
            onClick={handleClick}
            disabled={valueOne === "SyntaxError"}
          >
            3
          </button>
          <button
            className="btn btn-1"
            onClick={handleClick}
            disabled={valueOne === "SyntaxError"}
          >
            .
          </button>
          <button
            className="btn btn-1"
            onClick={handleClick}
            disabled={valueOne === "SyntaxError"}
          >
            -
          </button>
          <button
            className="btn btn-1"
            onClick={handleClick}
            disabled={valueOne === "SyntaxError"}
          >
            0
          </button>

          <button
            className="btn btn-1"
            onClick={handleClick}
            disabled={valueOne === "SyntaxError"}
          >
            /
          </button>
          <button className="btn btn-1" onClick={handleTimes}>
            x
          </button>
          <button className="btn btn-2" onClick={handleReset}>
            RESET
          </button>
          <button className="btn btn-3" onClick={handleResult}>
            =
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Main;
