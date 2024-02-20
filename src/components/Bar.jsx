import React, { useRef, useEffect, useState, useContext } from "react";
import "./Bar.css";
import "../index.css";


function Bar({ arrayBar, totalElements }) {
  const [widthBar, setWidthBar] = useState(4);
  const WIDTH_FRAME_BARS = 600;

  useEffect(() => {
    getWidth();
  }, [totalElements]);

 
  const getWidth = () => {
    const width = WIDTH_FRAME_BARS / totalElements;
    setWidthBar(width);
  };

  return (
    <div id="bar-container" className=" bg-white justify-center items-center">
      {arrayBar.map((bar, idx) => (
        <div
          className="bar "
          key={idx}
          style={{
            width: `${widthBar}px`,
            height: `${bar}px`,
          }}
        ></div>
      ))}
    </div>
  );
}

export default Bar;
