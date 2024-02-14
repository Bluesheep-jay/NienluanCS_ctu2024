import React, { useEffect, useState } from "react";
import "./Bar.css";

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
    <div className="bg-white justify-center items-center">
      {arrayBar.map((bar, idx) => (
        <div
          className="bar bg-[#417758]"
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
