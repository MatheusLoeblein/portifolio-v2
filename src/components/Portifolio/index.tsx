import { motion } from "framer-motion";
import { BsBoxes } from "react-icons/bs";
import Image from 'next/image'
import { useSectionObserver } from "@/hooks/useSectionObsever";
import { useRef, useState } from "react";
import { ProjectGallery } from "../ProjectGallery";
import { simposioImages, helpdeskImages, ImageArray } from "./images";



export function Protifolio(){

    const sectionPortifolio = useRef(null);
    useSectionObserver(sectionPortifolio)

    const [images, setImages] = useState<ImageArray>();
    
    return(
        <section ref={sectionPortifolio} className="flex flex-col gap-10 min-h-screen py-20 md:px-10" id='portifolio'>


          {
            images &&
            <ProjectGallery images={images} setImages={setImages}/>
          }

        <motion.div 
        initial={{ opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{ duration: 0.5 }}
        className='flex gap-3 w-max text-xs text-white py-2 px-5 rounded-full border border-gray-500'>        
          <BsBoxes size={15}/>
          <span>
            PORTIFOLIO
          </span>
        </motion.div>

        <motion.h1 
        initial={{ opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{ duration: 0.7 }}
        className="flex flex-col sm:flex-row gap-3 text-white text-4xl sm:text-5xl ">
          <span>PROJETOS </span>
          <span className="text-[#319791]">EM DESTAQUE</span>
        </motion.h1>

        <motion.div 
        initial={{ opacity: 0, y: 70}}
        whileInView={{opacity: 1, y: 0}}
        transition={{ duration: 0.9 }}
        className='text-white group cursor-pointer'
        onClick={() => setImages(simposioImages)}
        >
          <div className='-ml-1 overflow-hidden rounded-lg relative' 
          >
            <Image src='assets/simposio/Group 1.svg' alt='teste' width={2000} height={2000} className='object-cover hover:scale-110 hover:rotate-2 transition-all duration-500 cursor-pointer'/>
            <div className="absolute bottom-3 left-3 flex gap-3 font-medium text-sm group cursor-pointer">
              <span className="bg-white text-gray-700 group-hover:text-white group-hover:bg-black px-4 py-2 rounded-full transition-all">React</span>
              <span className="bg-white text-gray-700 group-hover:text-white group-hover:bg-black px-4 py-2 rounded-full transition-all" >Styled Components</span>
            </div>
          </div>

        <motion.h3
          initial={{ opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{ duration: 1.2 }}
          className='text-xl sm:text-2xl mt-5 group-hover:underline transition-all'>LANDING PAGE - SIMPOSIO OBESIDADE MULTIFATORIAL</motion.h3>
        </motion.div> 

        <motion.div 
        initial={{ opacity: 0, y: 70}}
        whileInView={{opacity: 1, y: 0}}
        transition={{ duration: 0.9 }}
        className='text-white group cursor-pointer'

        
        onClick={() => setImages(helpdeskImages)}
        >
          <div className='-ml-1 overflow-hidden rounded-lg relative' 
          >
            <Image src='assets/helpdesk/card.svg' alt='teste' width={2000} height={2000} className='object-cover hover:scale-110 hover:rotate-2 transition-all duration-500 cursor-pointer'/>
            <div className="absolute bottom-3 left-3 flex gap-3 font-medium text-sm group cursor-pointer">
              <span className="bg-white text-gray-700 group-hover:text-white group-hover:bg-black px-4 py-2 rounded-full transition-all">React</span>
              <span className="bg-white text-gray-700 group-hover:text-white group-hover:bg-black px-4 py-2 rounded-full transition-all" >Tailwind</span>
              <span className="bg-white text-gray-700 group-hover:text-white group-hover:bg-black px-4 py-2 rounded-full transition-all" >Django Rest</span>
              <span className="bg-white text-gray-700 group-hover:text-white group-hover:bg-black px-4 py-2 rounded-full transition-all" >Docker</span>
            </div>
          </div>

        <motion.h3
          initial={{ opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{ duration: 1.2 }}
          className='text-xl sm:text-2xl mt-5 group-hover:underline transition-all'>HELPDESK - SUPORTE E UTILITARIOS FORMÉDICA</motion.h3>
        </motion.div>  

      </section>
    )
}