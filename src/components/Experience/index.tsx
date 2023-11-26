import { motion } from "framer-motion";
import { useRef } from "react";
import { BsColumnsGap } from "react-icons/bs";
import { useSectionObserver } from "@/hooks/useSectionObsever";

export function Experience(){
    const sectionExperiencias = useRef(null);
    useSectionObserver(sectionExperiencias)

    return(
        <section  ref={sectionExperiencias} className="flex flex-col gap-10 min-h-screen py-20" id='experiencias'>

        <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{opacity: 1, y: 0}}
        transition={{ duration: 0.5 }}
        className='flex gap-3 w-max text-xs text-white py-2 px-5 rounded-full border border-gray-500'>
          
          <BsColumnsGap size={15}/>
          <span>
          EXPERIÊNCIAS
          </span>
        </motion.div>

        <motion.h1 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{opacity: 1, y: 0}}
        transition={{ duration: 0.7 }}
        className="flex gap-3 text-white flex-col sm:flex-row text-4xl md:text-5xl ">
          <span>FORMAÇÕES &</span>
          <span className="text-[#319791]">EXPERIENCIAS</span>
        </motion.h1>


        <div className='flex flex-col'>

          <motion.div 
          initial={{ opacity: 0, x: 200 }}
          whileInView={{opacity: 1, x: 0}}
          transition={{ duration: 1 }}
          
          className='border-l border-l-gray-500 relative ml-3 pb-10 group'> 
            <span className='w-3 h-3 bg-gray-400 rounded-full absolute -left-[7px] top-0 group-hover:bg-primary transition-colors duration-500'></span>

            <div className='flex flex-col px-10 space-y-10 -mt-1'>
              <span className='text-sm sm:text-lg text-gray-400 group-hover:text-primary transition-colors duration-500 font-medium'>2022 - Presente</span>

              <div className='flex flex-col gap-1'>
                <span className='text-xl sm:text-2xl text-white'>Analise e Desenvolvimento de Sistemas</span>
                <span className='text-xs sm:text-sm text-gray-400'>Faculdade Anhanguera</span>
              </div>

              <div className='flex flex-col gap-1'>
                <span className='text-xl sm:text-2xl text-white'>Python 3( PySide6, Django, Selenium, Regexp, Testes, TDD, POO, Design Patterns GoF)</span>
                <span className='text-xs sm:text-sm text-gray-400'>Udemy</span>
              </div>

              <div className='flex flex-col gap-1'>
                <span className='text-xl sm:text-2xl text-white'>Assistente de TI</span>
                <span className='text-xs sm:text-sm text-gray-400'>Formedica Farmacia de Manipulação</span>
              </div>
              
            </div>

          </motion.div>

          
          <motion.div 
          initial={{ opacity: 0, x: 200}}
          whileInView={{opacity: 1, x:0}}
          transition={{ duration: 1.3 }}
          className='border-l border-l-gray-500 relative ml-3 group'> 
          <span className='w-3 h-3 bg-gray-400 rounded-full absolute -left-[7px] top-0 group-hover:bg-primary transition-colors duration-500'></span>

            <div className='flex flex-col px-10 space-y-10 -mt-1'>
              <span className='text-sm sm:text-lg text-gray-400 group-hover:text-primary transition-colors duration-500 font-medium'>2019 - 2022</span>

              <div className='flex flex-col gap-1'>
                <span className='text-xl sm:text-2xl text-white'>Monitor de Operações</span>
                <span className='text-xs sm:text-sm text-gray-400'>Spacecom Monitoramento</span>
              </div>

            </div>

          </motion.div>

        </div>

      </section>
    )
}