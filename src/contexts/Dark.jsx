/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {

    const [darkMode,setDarkMode] = useState(false)

    useEffect(() => {

        if(darkMode){
        localStorage.setItem("darkMode", "true")
        window.document.documentElement.classList.add("dark")

        } else if(darkMode === false){
        localStorage.setItem("darkMode", "false")
        window.document.documentElement.classList.remove("dark")
        } else {
        setDarkMode(localStorage.getItem("darkMode") === "true")
        }


  },[darkMode])



    return (
        <DarkModeContext.Provider
        value={{darkMode, setDarkMode }}
        >
        {children}
        </DarkModeContext.Provider>
    );
    };

export { DarkModeContext, DarkModeProvider };