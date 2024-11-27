import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [char, setChar] = useState(false);
  const [num, setNumber] = useState(false);
  const [pass, setPassword] = useState("");

  // useRef
  const passref = useRef(null);

  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (char) {
      str += "!@#$%^&*()_-+=:;'?></|`~*";
    }
    if (num) {
      str += "1234567890";
    }
    for (let i = 1; i <= length; i++) {
      let strindex = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(strindex);
    }

    setPassword(password);
  }, [length, char, num, setPassword]);

  const coppytoClipboard = useCallback(() => {
    passref.current?.select();
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  useEffect(() => {
    passwordGenerator();
  }, [length, char, num, passwordGenerator]);

  return (
    <>
      <body className="h-screen w-screen bg-gray-700 text-white text-center">
        <h1 className="py-5 text-3xl">Password Generator</h1>
        <div className="flex justify-center center flex-wrap bg-gray-800 text-orange-400 max-w-lg h-36 p-10 mx-auto py-9 rounded-xl ">
          <div className="flex justify-center overflow-hidden rounded-xl min-w-80">
            <input
              type="text"
              placeholder="Password"
              value={pass}
              ref={passref}
              className="outline-none w-full py-1 px-3"
            />
            <button
              className="outline-none bg-blue-700 text-white px-5 py-0.5 shrink-0 hover:bg-blue-800 duration-200 shadow-lg active:bg-blue-900 active:font-light"
              onClick={coppytoClipboard}
            >
              Copy
            </button>
          </div>
          <div className="flex my-6 gap-x-2">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className="cursor-pointer"
            />
            <label htmlFor="length"> Length: ({length}) </label>
            <input
              type="checkbox"
              defaultChecked={num}
              onChange={() => {
                setNumber((prev) => !prev);
              }}
              className="cursor-pointer"
            />
            Number
            <input
              type="checkbox"
              defaultChecked={char}
              onChange={() => {
                setChar((prev) => !prev);
              }}
              className="cursor-pointer"
            />
            Character
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
