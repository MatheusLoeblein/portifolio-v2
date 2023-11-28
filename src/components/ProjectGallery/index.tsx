import { AnimatePresence, motion } from "framer-motion"
import Image from 'next/image'
import { useState } from "react"
import { IoClose } from "react-icons/io5"
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export function ProjectGallery(){

    const [open, setOpen] = useState(true)
    const [imageIndex, setImageIndex] = useState(0)
    const images = ['/assets/simposio/page1.svg', '/assets/simposio/page2.svg', '/assets/simposio/page3.svg']



   return(
        open && (
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className='fixed flex top-0 bottom-0 right-0 left-0 justify-center items-center z-50 bg-[#383838edf] backdrop-blur-[2px]'>

                    <motion.div className="h-[80%] relative border-4 border-white bg-black">
                        <span className="absolute text-white -top-7 -right-2 cursor-pointer hover:text-[#319791] transition-colors" onClick={() => setOpen(false)}> 
                            <IoClose size={22}/>
                        </span>
                        <AnimatePresence>
                            {   
                                <motion.div
                                key={imageIndex}
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{type: "tween", ease: "easeInOut"}}
                                className="w-full h-full"
                                >
                                    <Image
                                    src={images[imageIndex]}
                                    width={2000}
                                    height={2000}
                                    alt="image"
                                    className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                }
                        </AnimatePresence>

                        <IoIosArrowDropleftCircle 
                        size={35} 
                        className="absolute top-1/2 translate-y-1/2 -left-10 text-white cursor-pointer hover:text-[#319791] transition-colors"
                        onClick={() => {
                            imageIndex - 1 >= 0 && setImageIndex(imageIndex - 1)
                        }}
                        />
                        
                        <IoIosArrowDroprightCircle 
                        size={35} 
                        className="absolute top-1/2 translate-y-1/2 -right-10 text-white cursor-pointer hover:text-[#319791] transition-colors"
                        onClick={() => {
                            imageIndex + 1 < images.length && setImageIndex(imageIndex + 1)
                        }}
                        />

                    </motion.div>
            </motion.div>
        )
    )
}