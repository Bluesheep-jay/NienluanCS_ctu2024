import React, { useState, useEffect } from "react";
import "./Header.css";
import Algorithms from "../scripts/algorithms.js";
import Animate from "../scripts/animation.js";
import { stopAnimation, toggleAnimation } from "../scripts/animation.js";
import $ from "jquery";
import { resetPositionCss, generateArrayBar, disabledStopBtn,disabledResetBtn} from "../scripts/headerBtn.js";
import { clearAnimation } from "../scripts/animation.js";

function Header({
  arrayBar,
  setArrayBar,
  totalElements,
  setTotalElements,
  speed,
  setSpeed,
}) {
  const [selectedAlgo, setSelectedAlgo] = useState("Selection Sort");

  useEffect(() => {
    generateArrayBar(totalElements, setArrayBar);
  }, [totalElements]);


  function resetFunction() {
    clearAnimation();
    disabledResetBtn();
    generateArrayBar(totalElements, setArrayBar);
  }

  function restartFunction() {
    clearAnimation();
    disabledResetBtn();
    resetPositionCss();
  }
  /// RUNNNNNNN_BTN
  const runAlgo = () => {
    disabledStopBtn();
    const algo = selectedAlgo;
    const tmpArrayBar = arrayBar.slice();
    const solution = solve(algo, tmpArrayBar);
    if (solution) {
      Animate(solution, speed, 0); // animation.js
    }
  };
  const solve = (algo, tmpArrayBar) => {
    switch (algo) {
      case "Selection Sort": {
        return Algorithms.selection(tmpArrayBar);
      }
      // case "Insertion Sort": {
      //   return Algorithms.comb(elements, order);
      // }
      case "Bubble Sort": {
        return Algorithms.bubble(tmpArrayBar);
      }
      // case "Merge Sort": {
      //   return Algorithms.insertion(elements, order);
      // }
      // case "Quick Sort": {
      //   return Algorithms.selection(elements, order);
      // }

      default: {
        return false;
      }
    }
  };

  return (
    <div id="menu" className="flex justify-around bg-[#498562] h-24 py-3 ">
      <div className="w-72" id="sliders">
        <div className="slider">
          <span className="mr-3">Speed</span>
          <input
            className="form-range "
            type="range"
            step={1}
            min={1}
            max={5}
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
          <span className="text-white font-bold ">x{speed}</span>
        </div>
        <div className="slider mt-3">
          <span>Element</span>
          <input
            className="form-range"
            type="range"
            min={5}
            max={50}
            value={totalElements}
            onChange={(e) => setTotalElements(e.target.value)}
          />
          <span className="text-white font-bold">{totalElements}</span>
        </div>
      </div>
      <div className="selectAlgo">
        <select
          value={selectedAlgo}
          onChange={(e) => setSelectedAlgo(e.target.value)}
          className="selectSort selectSortHover mx-1 rounded-lg"
        >
          <option value="Selection Sort">Selection Sort</option>
          <option value="Insertion Sort">Insertion Sort</option>
          <option value="Bubble Sort">Bubble Sort</option>
          <option value="Merge Sort">Merge Sort</option>
          <option value="Quick Sort">Quick Sort</option>
        </select>
      </div>
      <div id="buttons">
        <button
          id="sort-btn"
          onClick={runAlgo}
          className="btn"
        >
          Sort
        </button>
        <button
          id="stop-btn"
          className="btn disabled"
          onClick={toggleAnimation}
        >
          Stop
        </button>
        <button className="btn btn-hover" onClick={resetFunction}>Reset</button>
        <button className="btn btn-hover" onClick={restartFunction}>Restart</button>
      </div>
    </div>
  );
}

export default Header;
