import { motion } from "framer-motion"
import { Code, Lightbulb, BarChart } from "lucide-react"


export const AboutSection = () =>{
    return <section id="about" className="py-24 px-4">
        <div className="container">
            <h2 className="text-3xl md:text-4xl mb-20 font-bold text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold">Curious Mind. Relentless Learner. Ready for Anything.</h3>

                    <p className="my-8">I’m a 21-year-old student from Croatia, currently studying at FER. I’m passionate about data science but open to learning anything that broadens my skills. <br /> <br /> Always eager to grow, I enjoy tackling challenges, experimenting with new ideas, and turning curiosity into practical results. I bring enthusiasm, dedication, and a strong willingness to learn into everything I do.</p>
                    <div className="flex pt-5 justify-center space-x-8">
                        <a href="#Contact" className="cosmic-button">Get in Touch</a>
                        <a href="/CV.pdf" className="other-button">Download CV</a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <motion.div 
                    initial={{ opacity: 0, x: 300}}     // start above & invisible
                    whileInView={{ opacity: 1, x:0}}   // fade + drop into place
                    transition={{
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1],        // smooth easing
                    }}
                    viewport={{ once: true}} 
                    className="gradient-border p-6 card-hover">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-primary/10">
                                <BarChart  className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="ml-3 md:mx-5">
                                <h4 className="font-semibold text-lg">Data Science Enthusiast</h4>
                                <p>Passionate about uncovering insights from data and turning them into actionable solutions.</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, x: 300}}     // start above & invisible
                    whileInView={{ opacity: 1, x:0}}   // fade + drop into place
                    transition={{
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1],        // smooth easing
                    }}
                    viewport={{ once: true}}
                     className="gradient-border p-6 card-hover">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Lightbulb  className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="ml-3 md:mx-5">
                                <h4 className="font-semibold text-lg">Problem Solver</h4>
                                <p>Enjoys breaking down complex problems and finding efficient solutions.</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial={{ opacity: 0, x: 300}}     // start above & invisible
                    whileInView={{ opacity: 1, x:0}}   // fade + drop into place
                    transition={{
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1],        // smooth easing
                    }}
                    viewport={{ once: true}}
                    className="gradient-border p-6 card-hover">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code  className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="ml-3 md:mx-5">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p>I enjoy creating responsive, user-friendly web applications that combine functionality with beautiful design.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
    </section>
}