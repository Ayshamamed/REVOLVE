import { useEffect, useState } from "react";
import { createContext } from "react";

export const ModeContext =createContext();
 export const ModeProvider=({children})=>{
   const [darkMode, setDarkMode]=useState(localStorage.getItem("darkMode")? JSON.parse(localStorage.getItem("darkMode")) : false);
   const toggleBtn=()=>{
    setDarkMode(!darkMode)
   }
   useEffect(()=>{
    localStorage.setItem("darkMode", darkMode)
  },[darkMode])

   return <ModeContext.Provider value={{ darkMode, setDarkMode, toggleBtn}} >
      {children}
    </ModeContext.Provider>
}
