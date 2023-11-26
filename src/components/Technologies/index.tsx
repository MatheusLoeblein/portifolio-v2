import { motion } from "framer-motion";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoDjango, BiLogoFigma, BiLogoJavascript, BiLogoPostgresql, BiLogoPython, BiLogoReact, BiLogoTailwindCss, BiServer } from "react-icons/bi";
import { BsGit } from "react-icons/bs";
import { FaNode } from "react-icons/fa";
import { SiNginx } from "react-icons/si";
import { useSectionObserver } from "@/hooks/useSectionObsever";
import { useRef } from "react";

export function Tecnologies(){

    const sectionTecnologies= useRef(null);
    useSectionObserver(sectionTecnologies)
    
    return(
        <section ref={sectionTecnologies} className="flex flex-col gap-10 min-h-screen py-20" id='tecnologias'>

        <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{opacity: 1, y: 0}}
        transition={{ duration: .5 }}
        
        className='flex gap-3 w-max text-xs text-white py-2 px-5 rounded-full border border-gray-500'>
          
          <BiServer size={15}/>
          <span>
            TECNOLOGIAS
          </span>
        </motion.div>

        <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{opacity: 1, y: 0}}
        transition={{ duration: .7 }}
        className="flex flex-col sm:flex-row gap-3 text-white text-4xl md:text-5xl ">
          <span>PRINCIPAIS</span>
          <span className="text-[#319791]">TECNOLOGIAS</span>
        </motion.h1>


        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 text-white'>

          <motion.div 
          initial={{ opacity: 0, y: -30, x: -100}}
          whileInView={{opacity: 1, y: 0, x: 0}}
          transition={{ duration: 1 }}
          className='flex flex-col gap-4 items-center font-medium text-sm'>
            <div className='border-2 border-gray-500 rounded-[5rem] h-52 w-36 flex items-center justify-center hover:border-[#319791] transition-colors'>
              <BiLogoPython size={75}/>
            </div>
            <span>Python</span>
          </motion.div>

        <motion.div 
        initial={{ opacity: 0, y: 70}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='flex flex-col items-center font-medium text-sm gap-4'>   
          <div className='border-2 border-gray-500 rounded-[5rem] h-52 w-36 flex items-center justify-center hover:border-[#319791] transition-colors'>
            <BiLogoJavascript  size={75}/>
          </div>
            <span>Javascript</span>
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, y: 80, x:20}}
        whileInView={{ opacity: 1, y: 0, x:0 }}
        transition={{ duration: 1.1 }}
        className='flex flex-col items-center font-medium text-sm gap-4'>  
          <div className='border-2 border-gray-500 rounded-[5rem] h-52 w-36 flex items-center justify-center hover:border-[#319791] transition-colors'>
            <BiLogoDjango  size={75}/>
          </div>
            <span>Django</span>
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, x:50}}
        whileInView={{ opacity: 1, x:0 }}
        transition={{ duration: 1.1 }}
        className='flex flex-col items-center font-medium text-sm gap-4'>  
          <div className='border-2 border-gray-500 rounded-[5rem] h-52 w-36 flex items-center justify-center hover:border-[#319791] transition-colors'>
            <BiLogoReact  size={75}/>
          </div>
            <span>React</span>
          </motion.div>

          <motion.div 
        initial={{ opacity: 0, x:50}}
        whileInView={{ opacity: 1, x:0 }}
        transition={{ duration: 1.1 }}
        className='flex flex-col items-center font-medium text-sm gap-4'>  
          <div className='border-2 border-gray-500 rounded-[5rem] h-52 w-36 flex items-center justify-center hover:border-[#319791] transition-colors'>
            <BiLogoPostgresql  size={75}/>
          </div>
            <span>Postgre</span>
          </motion.div>

        <motion.div 
        initial={{ opacity: 0, y: 80, x:20}}
        whileInView={{ opacity: 1, y: 0, x:0 }}
        transition={{ duration: 1.1 }}
        className='flex flex-col items-center font-medium text-sm gap-4'>  
          <div className='border-2 border-gray-500 rounded-[5rem] h-52 w-36 flex items-center justify-center hover:border-[#319791] transition-colors'>
            <AiFillHtml5  size={75}/>
          </div>
            <span>Html</span>
          </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 70}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='flex flex-col items-center font-medium text-sm gap-4'>  
          <div className='border-2 border-gray-500 rounded-[5rem] h-52 w-36 flex items-center justify-center hover:border-[#319791] transition-colors'>
            <BiLogoCss3  size={75}/>
          </div>
            <span>Css</span>
          </motion.div>

        <motion.div 
        initial={{ opacity: 0, y: -30, x: -100}}
        whileInView={{opacity: 1, y: 0, x: 0}}
        transition={{ duration: 1 }}
        className='flex flex-col items-center font-medium text-sm gap-4'>  
          <div className='border-2 border-gray-500 rounded-[5rem] h-52 w-36 flex items-center justify-center hover:border-[#319791] transition-colors'>
            <BiLogoFigma  size={75}/>
          </div>
            <span>Figma</span>
          </motion.div>


        <motion.div 
        initial={{ opacity: 0, y: -30, x: -100}}
        whileInView={{opacity: 1, y: 0, x: 0}}
        transition={{ duration: 1 }}
        className='flex flex-col items-center font-medium text-sm gap-4'>  
          <div className='border-2 border-gray-500 rounded-[5rem] h-52 w-36 flex items-center justify-center hover:border-[#319791] transition-colors'>
            <SiNginx  size={75}/>
          </div>
            <span>Nginx</span>
          </motion.div>

        <motion.div 
        initial={{ opacity: 0, y: 70}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='flex flex-col items-center font-medium text-sm gap-4'>  
          <div className='border-2 border-gray-500 rounded-[5rem] h-52 w-36 flex items-center justify-center hover:border-[#319791] transition-colors'>
            <FaNode  size={75}/>
          </div>
            <span>NodeJs</span>
          </motion.div>

        <motion.div 
        initial={{ opacity: 0, y: 80, x:20}}
        whileInView={{ opacity: 1, y: 0, x:0 }}
        transition={{ duration: 1.1 }}
        className='flex flex-col items-center font-medium text-sm gap-4'>  
          <div className='border-2 border-gray-500 rounded-[5rem] h-52 w-36 flex items-center justify-center hover:border-[#319791] transition-colors'>
            <BiLogoTailwindCss  size={75}/>
          </div>
            <span>Tailwind</span>
          </motion.div>

        <motion.div 
        initial={{ opacity: 0, x:50}}
        whileInView={{ opacity: 1, x:0 }}
        transition={{ duration: 1.1 }}
        className='flex flex-col items-center font-medium text-sm gap-4'>  
          <div className='border-2 border-gray-500 rounded-[5rem] h-52 w-36 flex items-center justify-center hover:border-[#319791] transition-colors'>
            <BsGit  size={75}/>
          </div>
            <span>Git</span>
          </motion.div>



        </div>

      </section>
    )
}