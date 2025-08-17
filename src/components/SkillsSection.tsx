import { Database, Monitor, Terminal } from "lucide-react"
import { useState } from "react"
import { cn } from "../lib/utils"
import { motion } from "framer-motion"

const categories = ["all", "frontend", "backend", "tools"]
const skills = [
    //FRONTEND
  {"name": "HTML/CSS", "category": "frontend"},
  {"name": "Tailwind CSS", "category": "frontend"},
  {"name": "JavaScript", "category": "frontend"},
  {"name": "TypeScript", "category": "frontend"},
  {"name": "React.js", "category": "frontend"},
  {"name": "Next.js", "category": "frontend"},
    //BACKEND
  {"name": "Node.js", "category": "backend"},
  {"name": "Python", "category": "backend"},
  {"name": "Java", "category": "backend"},
  {"name": "Express.js", "category": "backend"},
  {"name": "Flask", "category": "backend"},
  {"name": "REST APIs", "category": "backend"},
  {"name": "PostgreSQL", "category": "backend"},
  {"name": "Modelling databases", "category": "backend"},
    // TOOLS
  {"name": "Git", "category": "tools"},
  {"name": "GitHub", "category": "tools"},
  {"name": "VsCode", "category": "tools"},
  {"name": "Postman", "category": "tools"}
]

export const SkillSection = () =>{
    const [activeCategory, setActiveCategory] = useState("all")

    return <section className="py-24 px-4" id="skills">
        <div className="container">
            <h2 className="text-3xl md:text-4xl mb-20 font-bold text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex space-x-2 justify-center mb-12">
                {categories.map((category) => (
                    <button className={cn("cursor-pointer px-3 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : ""
                    )} onClick={() => setActiveCategory(category)}>{category}</button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.filter(skill => skill.category === activeCategory || activeCategory === "all").map((skill, key) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 0}}     // start above & invisible
                        whileInView={{ opacity: 1, y: -20}}   // fade + drop into place
                        transition={{
                            duration: 0.8,
                            ease: [0.25, 0.1, 0.25, 1],        // smooth easing
                        }}
                        viewport={{ once: true, amount: 0.3 }}     
                        key={key} className=" gradient-border flex flex-col bg-card p-6 rounded-lg shadow-sm justify-center items-center card-hover card">
                        {skill.category === "frontend" ? <Monitor/>: null}
                        {skill.category === "backend" ? <Database/> : null}
                        {skill.category === "tools" ? <Terminal/> : null}
                        <h3 className="text-semibold text-2xl mt-5">{skill.name}</h3>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
}