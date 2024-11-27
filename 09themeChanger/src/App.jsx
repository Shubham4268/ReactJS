import { useState,useEffect } from "react";
import "./App.css";
import Card from "./Components/Card";
import ThemeBtn from "./Components/ThemeBtn";
import { ThemeProvider } from "./Context/theme";

function App() {
  const [themeMode,setThemeMode] = useState("light")

  const lightTheme = ()=>{
    setThemeMode("light")
  }
  const darkTheme = ()=>{
    setThemeMode("dark")
  }

  useEffect(() => {           
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])                   //If dependancy is not given in the useEffect hook, the themeMode will not get added to 'html' classlist

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center ">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
        <ThemeBtn />
        <Card />
        <div className="w-full max-w-sm mx-auto"></div>
      </div>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
