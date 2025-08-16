import { useEffect, useState } from "react";

type Star = {
    id: number;
    size: number;
    x: number;
    y: number;
    opacity: number;
    animationDuration: number;
};

type Meteor = {
    id: number;
    size: number;
    x: number;
    y: number;
    opacity: number;
    delay: number;
    animationDuration: number;
}

export const StarBackground = () => {
    const [stars, setStars] = useState<Star[]>([])
    const [meteor, setMeteor] = useState<Meteor[]>([])

    useEffect(() =>{
        generateStars()
        generateMeteors()

        const handleResize = () => {
         generateStars();
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [])

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerHeight * window.innerWidth / 10000)

        const newStars = []

        for(let i = 0; i < numberOfStars; ++i){
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2
            })
        }

        setStars(newStars)
    }

     const generateMeteors = () => {
        const numberOfMeteors = 6

        const newMeteors = []

        for(let i = 0; i < numberOfMeteors; ++i){
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                opacity: Math.random() * 0.5 + 0.5,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            })
        }

        setMeteor(newMeteors)
    }

    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse-subtle"
            style={{
                left: star.x + "px",
                top: star.y + "px",
                width: star.size + "px",
                height: star.size + "px",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
            }}>

            </div>
        ))}
        {meteor.map((meteor) => (
            <div key={meteor.id} className="meteor animate-meteor"
            style={{
                left: meteor.x + "%",
                top: meteor.y + "%",
                width: meteor.size * 20 + "px",
                height: meteor.size+ "px",
                opacity: meteor.opacity,
                animationDelay: meteor.delay + "ms",
                animationDuration: meteor.animationDuration + "s",
            }}>

            </div>
        ))}
    </div>
}