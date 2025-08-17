import { useEffect, useState } from "react";
import { cn } from "../lib/utils";  
import { X, Menu } from "lucide-react";


const navitems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#Contact"}
]

export const Navbar = () =>{
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleOpen = () =>{
        if (isOpen){
            setIsOpen(false)
        }
        else{
            setIsOpen(true)
        }
    }

    
    return <div className={cn("fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5")}>

            <div className="container flex items-center justify-between">
                <a href="" className="text-2xl font-bold text-primary">
                    <span className="z-10">
                        <span className="text-glow text-foreground">Josip</span> Bušelić
                    </span>
                </a>

                <div className="hidden md:flex space-x-8">
                    {navitems.map((item) => (
                        <a key={item.name} href={item.href} className="text-foreground/90 hover:text-primary">{item.name}</a>
                    ))}
                </div>

                <button onClick={handleOpen} className="md:hidden text-foreground z-70"> {isOpen ? <X/> : <Menu/>}</button>
            </div>
            <div className={cn("min-h-screen fixed flex items-center justify-center inset-0 bg-background backdrop-blur-md z-60 transition-all duration-150",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                <div className="flex flex-col space-y-8">
                    {navitems.map((item) => (
                        <a href={item.href} onClick={() => setIsOpen(false)} className="text-glow text-xl text-foreground/90 hover:text-primary">{item.name}</a>
                    ))}
                </div>
            </div>


    </div>
}