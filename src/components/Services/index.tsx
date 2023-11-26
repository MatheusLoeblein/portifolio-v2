import { motion } from "framer-motion";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { useSectionObserver } from "@/hooks/useSectionObsever";
import { useRef } from "react";

export function Services(){

    const sectionServices = useRef(null);
    useSectionObserver(sectionServices)

    return(
        <motion.section ref={sectionServices} className="flex flex-col gap-10 min-h-screen py-20" id='servicos'>

        <motion.div 
        initial={{ opacity: 0, y: 40}}
        whileInView={{opacity: 1, y:0}}
        transition={{ duration: 0.5 }}
        className='flex gap-3 w-max text-xs text-white py-2 px-5 rounded-full border border-gray-500'>
          
          <PiSuitcaseSimpleBold size={15}/>
          <span>
            SERVIÇOS
          </span>
        </motion.div>

        <motion.h1 
        initial={{ opacity: 0, y: 40}}
        whileInView={{opacity: 1, y:0}}
        transition={{ duration: 0.8 }}
        className="flex gap-3 text-white text-5xl ">
          <span>MEUS</span>
          <span className="text-[#319791]">SERVIÇOS</span>
        </motion.h1>


        <div className='flex flex-col gap-12'>

          <motion.div 
          initial={{ opacity: 0, y: 80}}
          whileInView={{opacity: 1, y:0}}
          transition={{ duration: 1.2 }}
          className='p-7 flex flex-col gap-3 border border-gray-500 rounded-xl text-md text-gray-400'>
            <h2 className='text-3xl text-[#319791]'>Back-End</h2>
            <p>
              Como desenvolvedor de back end, eu construo a espinha dorsal dos sistemas, 
              potencializada por APIs sólidas. Isso significa gerenciar dados, garantir 
              segurança, otimizar desempenho e criar integrações poderosas.
            </p>
          </motion.div>

          <motion.div 
          initial={{ opacity: 0, y: 80}}
          whileInView={{opacity: 1, y:0}}
          transition={{ duration: 1.4 }}
          className='p-7 flex flex-col gap-3 border border-gray-500 rounded-xl text-md text-gray-400'>
            <h2 className='text-3xl text-[#319791]'>Front-End</h2>
            <p>
              No front end, aproveito essas APIs para criar experiências envolventes para os usuários. 
              Isso significa interfaces intuitivas e dinâmicas, alimentadas por dados de back end por 
              meio de APIs bem projetadas.
            </p>
          </motion.div>

        </div>

      </motion.section >
    )
}