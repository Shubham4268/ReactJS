import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);    
  // The setUser method is passed as a prop to the context in UserContextProvider.jsx file. Using this method we can pass user values from this login.jsx.

  const btnHandler = (e)=>{
    e.preventDefault()
    setUser({username,password})
  }
  return (
    <div>
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="text"
        value={password}
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="button" onClick={btnHandler}>
        Login
      </button>
    </div>
  );
}

export default Login;
