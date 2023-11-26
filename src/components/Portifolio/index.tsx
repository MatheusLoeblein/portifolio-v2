import { motion } from "framer-motion";
import { BsBoxes } from "react-icons/bs";
import Image from 'next/image'
import { useSectionObserver } from "@/hooks/useSectionObsever";
import { useRef } from "react";


export function Protifolio(){

    const sectionPortifolio = useRef(null);
    useSectionObserver(sectionPortifolio)
    
    return(
        <section ref={sectionPortifolio} className="flex flex-col gap-10 min-h-screen py-20" id='portifolio'>

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
        className='text-white'>
          <div className='-ml-1 overflow-hidden rounded-lg'>
            <Image src='assets/simposio/Group 1.svg' alt='teste' width={2000} height={2000} className='object-cover hover:scale-110 hover:rotate-2 transition-all duration-500 cursor-pointer'/>
          </div>

         <motion.h3 
          initial={{ opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{ duration: 1.2 }}
          className='text-xl sm:text-2xl mt-5'>LANDING PAGE - SIMPOSIO OBESIDADE MULTIFATORIAL</motion.h3>

        </motion.div>

        <motion.div 
        initial={{ opacity: 0, y: 70}}
        whileInView={{opacity: 1, y: 0}}
        transition={{ duration: 0.9 }}
        className='text-white'>
          <div className='-ml-1 overflow-hidden rounded-lg'>
            <Image src='assets/simposio/Group 1.svg' alt='teste' width={2000} height={2000} className='object-cover hover:scale-110 hover:rotate-2 transition-all duration-500 cursor-pointer'/>
          </div>

         <motion.h3 
          initial={{ opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{ duration: 1.2 }}
          className='text-xl sm:text-2xl mt-5'>LANDING PAGE - SIMPOSIO OBESIDADE MULTIFATORIAL</motion.h3>

        </motion.div>

  

      </section>
    )
}