import { useEffect, useState } from "react"
import Image
 from "next/image"
import { AnimatePresence, motion } from "framer-motion"
export function AdaptedImage({ image }:{ image:string }){
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        if(!isLoading){
            setIsLoading(true)
        }
    }, [image])

    function stopLoading(){
        const time = setInterval(() => {
            setIsLoading(false)
            clearInterval(time)
        }, 700)
    }
    
    return(
        <div className="relative">

            <AnimatePresence>
                {isLoading &&
                    <motion.div 
                    initial={{opacity:1}}
                    animate={{opacity: 1}}
                    exit={{opacity:0}}
                    className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-sm">
                        <motion.span
                            animate={{
                                height: ['1.25rem', "0.45rem", "1.75rem", "1.25rem"],
                                width: ['1.25rem', "1.75rem", "1rem", "1.25rem"],
                                y: [-80, 5, 2, 0, -80]
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "easeInOut",
                                times: [0, 0.5, 0.7, 1] // Sobe mais rápido (30% do tempo), desce mais devagar (70% do tempo)
                            }}
                            className="rounded-full bg-black"
                        />

                    </motion.div>
                }
            </AnimatePresence>

            <Image
                src={image}
                alt="image"
                className="w-full h-full rounded-sm"
                width={1000}
                height={1000}
                onLoadingComplete={stopLoading}
            />
        </div>
    )
}