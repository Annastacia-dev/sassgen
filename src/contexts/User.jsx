/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [user,setUser] = useState({
      image: '',
      name: 'Blair',
      gender: 'female'
    })
    const [loggedIn, setLoggedIn] = useState(true)

    useEffect(() => {

        if(user){
        localStorage.setItem("user", "true")
        window.document.documentElement.classList.add("User")

        } else if(user === false){
        localStorage.setItem("user", "false")
        window.document.documentElement.classList.remove("User")
        } else {
        setUser(localStorage.getItem("user") === "true")
        }


  },[user])



    return (
        <UserContext.Provider
        value={{user, setUser, loggedIn, setLoggedIn }}
        >
        {children}
        </UserContext.Provider>
    );
    };

export { UserContext, UserProvider };