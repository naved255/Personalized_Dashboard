import { createContext } from "react";
import { useState, useEffect } from "react";

export const ThemeContext = createContext();

export const Completed = createContext();

export const Work = createContext();

export const WorkProvide = ({children}) => {
    const [works, setwork] = useState([]);

    return (
        <Work.Provider value={{works, setwork}}>
            {children}
        </Work.Provider>
    )
}

export const CompleteProvide = ({children}) => {
    const [completed, setcompleted] = useState([]);

    return(
        <Completed.Provider value={{completed, setcompleted}}>
            {children}
        </Completed.Provider>
    )
}

export const ThemeProvide = ({ children }) => {
    const [theme, settheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    })

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, settheme }}>
            {children}
        </ThemeContext.Provider>
    )
}