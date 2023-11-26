import { motion } from 'framer-motion';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BsColumnsGap,  BsBoxes } from 'react-icons/bs'
import { BiServer } from 'react-icons/bi'
import { PiSuitcaseSimpleBold } from 'react-icons/pi'
import { useNavigationFromSection } from '@/hooks/useNavigateFromSection';
import { useContext } from 'react';
import { PageContext, PageContextProps } from '@/contexts/PageContext';

export function Menu(){

    const { handleScroll } = useNavigationFromSection();
    const { currentSectionId } = useContext(PageContext) as PageContextProps;

    return(
        <motion.nav 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className='hidden z-10 xl:flex fixed right-10 bg-black text-gray-300 text-xl border border-gray-500 py-9 px-4 flex-col gap-8 top-1/2 -translate-y-1/2 rounded-full'>
            <div>
                <a href="#introducao" className={`hover:text-[#319791] transition-colors ${currentSectionId === "introducao" && 'text-[#319791]'}`} onClick={handleScroll}><AiOutlineHome/></a>
            </div>
        
            <div>
                <a href="#sobre" className={`hover:text-[#319791] transition-colors ${currentSectionId === "sobre" && 'text-[#319791]'}`} onClick={handleScroll}><AiOutlineUser/></a>
            </div>
            <div>
                <a href="#experiencias" className={`hover:text-[#319791] transition-colors ${currentSectionId === "experiencias" && 'text-[#319791]'}`} onClick={handleScroll}><BsColumnsGap/></a>
            </div>
        
            <div>
                <a href="#servicos" className={`hover:text-[#319791] transition-colors ${currentSectionId === "servicos" && 'text-[#319791]'}`} onClick={handleScroll}><PiSuitcaseSimpleBold/></a>
            </div>
            <div>
                <a href="#tecnologias" className={`hover:text-[#319791] transition-colors ${currentSectionId === "tecnologias" && 'text-[#319791]'}`} onClick={handleScroll}><BiServer /></a>
            </div>
            <div>
                <a href="#portifolio" className={`hover:text-[#319791] transition-colors ${currentSectionId === "portifolio" && 'text-[#319791]'}`} onClick={handleScroll}><BsBoxes /></a>
            </div>
    
        </motion.nav>
    )
}