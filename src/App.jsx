import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Bar from "./components/Bar";
import AlgoInfo from "./components/AlgoInfo";

function App() {
  const [arrayBar, setArrayBar] = useState([]);
  const [totalElements, setTotalElements] = useState(5);
  const [speed, setSpeed] = useState(50);
  useEffect(() => {
    generateArrayBar();
  }, [totalElements]);

  const generateArrayBar = () => {
    const newArray = Array.from({ length: totalElements }, () =>
      randomInt(5, 500)
    );
    setArrayBar(newArray);
  };

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <div className="app-container w-full h-screen flex ">
      <AlgoInfo></AlgoInfo>
      <div className="sorting-part w-full h-screen">
        <Header
          generateArrayBar={generateArrayBar}
          totalElements={totalElements}
          setTotalElements={setTotalElements}
          speed={speed}
          setSpeed={setSpeed}
        ></Header>
        <Bar arrayBar={arrayBar} totalElements={totalElements}></Bar>
      </div>
    </div>
  );
}

export default App;
