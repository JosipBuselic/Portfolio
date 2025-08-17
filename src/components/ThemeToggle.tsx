import { useEffect, useState } from "react";
import {Sun} from "lucide-react";
import { Moon } from "lucide-react";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
    const [isDarkMode, SetIsDarkMode] = useState(true)

    useEffect(() => {
        const storedMode = localStorage.getItem("theme")
        if(storedMode === "dark"){
            document.documentElement.classList.add("dark")
            SetIsDarkMode(true)
        }
        else {
            document.documentElement.classList.remove("dark")
        }
    })

    const toggleDarkMode = () => {
        if(isDarkMode){
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            SetIsDarkMode(false)
        }
        else{
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
            SetIsDarkMode(true)
        }
    }

    return <button onClick={toggleDarkMode} className="cursor-pointer bottom-5 right-5 
    rounded-2xl transition-colors duration-300 z-50 fixed">
    {isDarkMode ? <Sun className="text-yellow-500"/> : <Moon className="text-primary"/>}
    </button>
}