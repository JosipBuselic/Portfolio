import { ArrowDown } from "lucide-react"

export const HeroSection = () =>{
    return <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
            <span>Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Josip</span>
            <span className="animate-fade-in-delay-2 opacity-0"> Bušelić</span>
        </h1>
        <p className="mt-5 animate-fade-in-delay-3 opacity-0 mx-6 md:mx-25" >Always eager to learn and expand my skills, I am ready to take on new challenges, collaborate with others, and passionately turn ideas into meaningful projects and real-world solutions.</p>

        <a href="#projects" className="animate-fade-in-delay-3 cosmic-button mt-5 opacity-0">View my Work</a>

        <div className="bottom-5 absolute left-1/2 transform -translate-x-1/2 flex flex-col animate-bounce items-center">
            <span>Scroll</span>
            <ArrowDown className="text-primary"/>
        </div>
    </section>
}