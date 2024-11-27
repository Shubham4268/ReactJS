import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center bg-white px-3 py-2 rounded-3xl shadow-lg gap-3">
          <button onClick={() => {setColor("Red")}}
            className="px-4 rounded-xl justify-center align-middle shadow-xl outline-none"
            style={{ color: "White", backgroundColor: "Red" }}
          >
            Red
          </button>
          <button onClick={() => {setColor("Yellow")}}
            className="px-4 rounded-xl justify-center align-middle shadow-xl outline-none"
            style={{ color: "Black", backgroundColor: "Yellow" }}
          >
            Yellow
          </button>
          <button onClick={() => {setColor("Green")}}
            className="px-4 rounded-xl justify-center align-middle shadow-xl outline-none"
            style={{ color: "White", backgroundColor: "Green" }}
          >
            Green
          </button>
          <button onClick={() => {setColor("Orange")}}
            className="px-4 rounded-xl justify-center align-middle shadow-xl outline-none"
            style={{ color: "White", backgroundColor: "Orange" }}
          >
            Orange
          </button>
          <button onClick={() => {setColor("Blue")}}
            className="px-4 rounded-xl justify-center align-middle shadow-xl outline-none"
            style={{ color: "White", backgroundColor: "Blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
