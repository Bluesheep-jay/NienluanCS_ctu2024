import React, { useState } from "react";
import "./Header.css";
function Header({ generateArrayBar, totalElements, setTotalElements, speed, setSpeed}) {
  const [selectedAlgo, setSelectedAlgo] = useState("Selection Sort");

  return (
    <div id="menu" className="flex justify-around bg-[#498562] h-24 py-3 ">
      <div className="w-72" id="sliders">
        <div className="slider">
          <span className="mr-3">Speed</span>
          <input
            className="form-range "
            type="range"
            min={1}
            max={100}
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
          <span className="text-white font-bold ">{speed}</span>
        </div>
        <div className="slider w-full mt-3">
          <span>Element</span>
          <input
            className="form-range"
            type="range"
            min={5}
            max={100}
            value={totalElements}
            onChange={(e) => setTotalElements(e.target.value)}
          />
          <span className="text-white font-bold">{totalElements}</span>
        </div>
      </div>
      <div>
        <select
          value={selectedAlgo}
          onChange={(e) => setSelectedAlgo(e.target.value)}
          className="selectSort mx-1 rounded-lg"
        >
          <option value="Selection Sort">Selection Sort</option>
          <option value="Insertion Sort">Insertion Sort</option>
          <option value="Bubble Sort">Bubble Sort</option>
          <option value="Merge Sort">Merge Sort</option>
          <option value="Quick Sort">Quick Sort</option>
        </select>
      </div>
      <div id="buttons">
        <button className="btn mx-1 w-20">Sort</button>
        <button className="btn mx-1 w-20">Stop</button>
        <button className="btn mx-1 w-20">Reset</button>
      </div>
    </div>
  );
}

export default Header;
