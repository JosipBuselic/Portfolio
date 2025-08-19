import { useEffect, useState } from "react";
import {Sun} from "lucide-react";
import { Moon } from "lucide-react";


export const ThemeToggle = () => {
    const [isLightMode, SetIsLightMode] = useState(false) 

    useEffect(() => {
        const storedMode = localStorage.getItem("theme")
        if(storedMode === "light"){
            document.documentElement.classList.add("light")
            SetIsLightMode(true)
        }
        else {
            document.documentElement.classList.remove("light")
        }
    }, [])

    const toggleDarkMode = () => {
        if(isLightMode){
            document.documentElement.classList.remove("light")
            localStorage.setItem("theme", "dark")
            SetIsLightMode(false)
        }
        else{
            document.documentElement.classList.add("light")
            localStorage.setItem("theme", "light")
            SetIsLightMode(true)
        }
    }

    return <button onClick={toggleDarkMode} className="cursor-pointer bottom-5 right-5 
    rounded-2xl transition-colors duration-300 z-50 fixed">
    {isLightMode ?  <Moon className="text-primary"/> : <Sun className="text-yellow-500"/>}
    </button>
}