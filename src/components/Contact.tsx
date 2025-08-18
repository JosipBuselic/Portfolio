import { CircleCheck, CircleX, Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import emailjs from '@emailjs/browser'

export const Contact = () =>{
    const [isSubmiting, setIsSubmiting] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault()

        setIsSubmiting(true)

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then(
            () => {
                setEmail("")
                setName("")
                setMessage("")

                toast.success("Message sent successfully! 🎉", {
                    description: "Thanks for reaching out — I’ll get back to you soon.",
                    icon: <CircleCheck className="size-5" />,
                    duration: 4000,
                })
                setIsSubmiting(false)
            },
            () => {
                toast.success("Message FAILED", {
                    icon: <CircleX className="size-5" />,
                    duration: 4000,
                })
            },
        );


    }

    return <section className="py-24 px-4" id="Contact">
        <div className="container flex justify-center items-center flex-col">
            <h2 className="text-3xl md:text-4xl mb-20 font-bold text-center">
                Contact <span className="text-primary">Me</span>
            </h2>

            <p className="max-w-2xl mb-12">I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let’s connect and build something meaningful together.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-30 w-full md:w-3xl">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold">
                        Contact Information
                    </h3>
                    <div className="space-y-8 flex flex-col items-start justify-center">
                        <div className="flex justify-start items-center space-x-5">
                            <div className="p-3 rounded-full gradient-border">
                                <Mail className="text-primary"/>
                            </div>
                            <a className="text-foreground hover:text-primary cursor-pointer" href="mailto:josip.busilica@gmail.com">josip.busilica@gmail.com</a>
                        </div>
                        <div className="flex justify-start items-center space-x-5">
                            <div className="p-3 rounded-full gradient-border">
                                <Phone className="text-primary"/>
                            </div>
                            <a className="text-foreground hover:text-primary cursor-pointer">+385 91 3661 466</a>
                        </div>
                        <div className="flex justify-start items-center space-x-5">
                            <div className="p-3 rounded-full gradient-border">
                                <MapPin className="text-primary"/>
                            </div>
                            <a className="text-foreground hover:text-primary cursor-pointer">Zagreb, Croatia</a>
                        </div>
                    </div>
                    <div className="mt-15">
                        <h3 className="font-semibold text-lg mb-4">Contact with me</h3>
                        <div className="flex justify-center space-x-8">
                            <a className="group p-4 rounded-full gradient-border" href="https://github.com/JosipBuselic">
                                <Github className="text-foreground group-hover:text-primary" />
                            </a>
                            <a className="group p-4 rounded-full gradient-border" href="https://www.linkedin.com/in/josip-bu%C5%A1eli%C4%87-43514033a/">
                                <Linkedin className="text-foreground group-hover:text-primary" />
                            </a>
                            <a className="group p-4 rounded-full gradient-border" href="https://github.com/JosipBuselic">
                                <Instagram className="text-foreground group-hover:text-primary" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-8 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-semibold mb-5">Send a Message</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block text-sm mb-2" htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name"  
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Josip Bušelić..." 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm mb-2" htmlFor="email">Email</label>
                            <input type="email" id="email" name="email"  
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="josip.busilica@gmail.com..." 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm mb-2" htmlFor="name">Your Message</label>
                            <textarea id="text" name="text"  
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="I would like to hire you :D ..." 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required/>
                        </div>
                        <button className="cosmic-button w-full flex justify-center items-center gap-2 cursor-pointer" disabled = {isSubmiting}>
                            {isSubmiting ? "Sending..." : "Send Message"}
                            {isSubmiting ? null : <Send size={18}/>}
                        </button>
                    </form>
                </div>  
            </div>
        </div>
    </section>
}