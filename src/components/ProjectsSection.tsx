import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Prepko", 
        description: "I am the instructor at Prepko, teaching first-year FER students, and contributed to developing key parts of the website, ensuring a smooth user experience and functional design.",
        Image: "/projects/Prepko.png",
        tags: ["Instructor", "WordPress", "WebDevelopment"],
        Url: "https://prepko.com.hr/",
        githubUrl: null
    },
    {
        id: 2,
        title: "Authentitacion system with roles and permissions", 
        description: "Developed a robust authentication system with role-based access and permissions, ensuring secure and controlled access to different parts of the application.",
        Image: "/projects/Authsystem.png",
        tags: ["NextJS", "Python", "Flask", "Rest API", "Supabase", "PostgreSQL"],
        Url: null,
        githubUrl: "https://github.com/JosipBuselic/Authentitacion-system-with-roles-and-permissions/tree/main"
    },
    {
        id: 3,
        title: "Webshop J&B", 
        description: "Developed the Webshop J&B using Express.js, EJS, Node.js, and JavaScript, featuring a fully functional e-commerce platform with dynamic product pages and a shopping cart that allows users to add and manage items.",
        Image: "/projects/WebshopJ&B.png",
        tags: ["Express.js", "Node.js", "EJS", "JavaScript", "Rest API"],
        Url: "https://webshopjandb.onrender.com/home",
        githubUrl: "https://github.com/JosipBuselic/WebshopJB"
    },
    {
        id: 4,
        title: "Buselic Apartments", 
        description: "Designed and developed a professional website for my apartments using WordPress, creating a user-friendly interface to showcase properties and provide essential information to visitors.",
        Image: "/projects/Buselic.png",
        tags: ["WordPress", "WebDevelopment"],
        Url: "https://buselic-tucepi.com.hr/",
        githubUrl: null
    }
]
export const ProjectsSection = () =>{
    return <section className="py-24 px-4" id="projects">
        <div className="container flex flex-col justify-center items-center">
            <h2 className="text-3xl md:text-4xl mb-12 font-bold">Featured <span className="text-primary"> Projects</span></h2>

            <p className=" text-foreground mb-12 max-w-2xl ">
                A collection of projects showcasing my skills in building dynamic, functional, and user-friendly solutions, combining both front-end and back-end technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <motion.div 
                    initial={{ opacity: 0, y: 0}}     // start above & invisible
                    whileInView={{ opacity: 1, y: -20}}   // fade + drop into place
                    transition={{
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1],        // smooth easing
                    }}
                    viewport={{ once: true, amount: 0.3 }} 
                    className="gradient-border card-hover bg-card p-6">
                        <img src={project.Image} alt="" />
                        <h3 className="my-4 text-2xl">{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="flex flex-wrap mt-3 justify-center space-x-2">
                            {project.tags.map((tag) => (
                                <div className="bg-primary p-2 rounded-full mt-4">
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <h4 className="text-xl mt-5">Links:</h4>
                        <div className="flex justify-center space-x-4 cursor-pointer mt-3">
                            {project.Url ? <ExternalLink onClick={() => window.location.replace(project.Url)} className="text-foreground hover:text-primary"/> : null}
                            {project.githubUrl ? <Github onClick={() => window.location.replace(project.githubUrl)} className="text-foreground hover:text-primary"/> : null}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
}