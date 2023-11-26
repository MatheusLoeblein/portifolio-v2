import { motion } from "framer-motion";
import { useContext, useRef } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { VscArrowDown } from "react-icons/vsc";
import { useNavigationFromSection } from "@/hooks/useNavigateFromSection";
import { useSectionObserver } from "@/hooks/useSectionObsever";
import Image from 'next/image'


export function Intro(){

    const sectionHome = useRef(null);

    const { handleScroll } = useNavigationFromSection();

    useSectionObserver(sectionHome)

     return(
        <motion.section ref={sectionHome} className="flex flex-col gap-10 min-h-screen py-20" id='introducao'
        >

            <motion.div 
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: .5}}
            className='flex gap-3 w-max text-xs text-white py-2 px-5 rounded-full border border-gray-500'>
              
              <AiOutlineHome size={15}/>
              <span>
                INTRODUÇÃO
              </span>
            </motion.div >

            <motion.h1 
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: .7}}
              className="flex text-4xl   sm:text-5xl flex-col text-white md:text-6xl">
              <span>OLÁ, ME CHAMO</span>
              <span className="text-[#319791]">MATHEUS LOEBLEIN,</span>
              <span>DESENVOLVEDOR <br /> FULL-STACK</span>
            </motion.h1>


            <motion.p  
              initial={{opacity: 0, y: 70}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 1}}
              className="text-gray-400 text-sm w-full md:text-md md:w-[400px] xl:w-[500px] ">
            Apaixonado por criar soluções poderosas que transformam dados em resultados. 
            Com experiência em diversas tecnologias e linguagens de programação, estou 
            sempre em busca de novos desafios que me permitam expandir minhas habilidades 
            e conhecimentos.
            </motion.p>


            <motion.div className='flex  sm:justify-end px-18'
              initial={{opacity: 0, y: 90}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 1.2}}
              >

              <a 
              href='#portifolio'
              onClick={handleScroll}
              className='flex relative rounded-full border border-gray-500 w-48 h-48 p-2 cursor-pointer '>

                <Image src="assets/meus_projetos.svg" className='animate-spin-low ' alt="Projects link" width={500} height={500} />  

                <span className='text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                 <VscArrowDown size={40}/>
                </span>

              </a>

            </motion.div>


            <div className='flex gap-14'>
                <motion.div className='flex flex-col gap-2'
                initial={{opacity: 0, x: -50}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 1.2}}
                >
                  <span className='text-4xl sm:text-5xl md:text-6xl font-medium text-primary'>2+ </span>
                  <span className='text-md font-thin text-white'>Anos de Experiência</span>
                </motion.div>
                <motion.div 
                  initial={{opacity: 0, x: 50}}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{duration: 1.2}}
                  className='flex flex-col gap-2'>
                  <span className='text-4xl sm:text-5xl md:text-6xl font-medium text-primary'>10+</span>
                  <span className='text-md font-thin text-white'>Tecnologias</span>
                </motion.div>
            </div>


        </motion.section>
     )
}