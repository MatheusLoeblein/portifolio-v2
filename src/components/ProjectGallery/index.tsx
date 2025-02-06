import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'
import { useEffect, useState, Dispatch, SetStateAction } from "react"
import { IoClose } from "react-icons/io5"
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { AdaptedImage } from "../AdaptedImage";

interface images {
    images: string[];
    setImages: Dispatch<SetStateAction<any>>;

}

export function ProjectGallery({images, setImages}:images){

    const [open, setOpen] = useState(false)
    const [imageIndex, setImageIndex] = useState(0)
    const [direction, setDirection] = useState('open')
    const [ isLoading, setIsLoading ] = useState(true)
    const [ openedImages, setOpenedImages ] = useState<any[]>([])

    useEffect(() => {
        if(!isLoading && !openedImages.includes(images[imageIndex])){
            setIsLoading(true)
            setOpenedImages((previous) => [...previous, images[imageIndex]])
        }
    }, [imageIndex])

    
    function stopLoading(){
        const time = setInterval(() => {
            setIsLoading(false)
            clearInterval(time)
        }, 700)
    }

    const setOpenNew = () => {
        setOpen(true)
        setDirection('open')
    }

    useEffect(() => {
        images && images.length > 0 ? setOpenNew() : setOpen(false)
    },[images])

    const imageInitial = {
        leftToRight:{
            opacity: 0,
            x: 400
        },
        rightToLeft:{
            opacity: 0,
            x: -400
        },
        open:{
            opacity: 0,
            scale: 0.6

        }
    }

   return(

    <AnimatePresence>
       { open && (
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0, scale:0.6}}
            className='fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center z-50 bg-[#383838edf] backdrop-blur-[2px]'>

                    <motion.div className="relative max-w-[80vw] max-h-[80vh] xl:max-w-[65vw] bg-black ">
                        <span className="absolute text-white -top-7 -right-2 cursor-pointer hover:text-[#319791] transition-colors" onClick={() => {
                            setDirection('exit')
                            setOpen(false)
                            setImages([])
                            setImageIndex(0)
                            }}> 
                            <IoClose size={22}/>
                        </span>
                            <AnimatePresence key={imageIndex}>

                                {<motion.div
                                    variants={imageInitial}
                                    initial={direction}
                                    animate={{opacity:1, x: 0, scale: 1}}
                                    transition={{type: "spring", stiffness: 400, damping: 30}}
                                    key={imageIndex}
                                    className="w-full h-full relative">
                                        <AdaptedImage image={images[imageIndex]} isLoading={isLoading} stopLoading={stopLoading}/>
                                </motion.div>}

                            </AnimatePresence>

                        {imageIndex - 1 >= 0 && 
                            <IoIosArrowDropleftCircle 
                            size={35} 
                            className="absolute top-1/2 translate-y-1/2 -left-10 text-white cursor-pointer hover:text-[#319791] transition-colors"
                            onClick={() => {
                                setImageIndex(imageIndex - 1)
                                setDirection('rightToLeft')
                            }}
                        />}
                        
                        {imageIndex + 1 < images.length &&
                            <IoIosArrowDroprightCircle 
                            size={35} 
                            className="absolute top-1/2 translate-y-1/2 -right-10 text-white cursor-pointer hover:text-[#319791] transition-colors"
                            onClick={() => {
                                setImageIndex(imageIndex + 1)
                                setDirection('leftToRight')
                                
                            }}
                        />}

                    </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
    )
}
