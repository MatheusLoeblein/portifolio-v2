import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BsColumnsGap,  BsBoxes } from 'react-icons/bs'
import { BiServer } from 'react-icons/bi'
import { PiSuitcaseSimpleBold } from 'react-icons/pi'
import { useNavigationFromSection } from '@/hooks/useNavigateFromSection';
import React, { useContext, useState } from 'react';
import { PageContext, PageContextProps } from '@/contexts/PageContext';
import { MdMenuOpen } from "react-icons/md";
import { IoClose } from "react-icons/io5"


export function Menu(){

    const [open, setOpen] = useState(false);

    const { handleScroll } = useNavigationFromSection();
    const { currentSectionId } = useContext(PageContext) as PageContextProps;

    function handleClickInMenuMobile(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        handleScroll(e);
        setOpen(false);
    }

    return(
        <>
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

            <>

                {
                    !open &&

                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    onClick={() => setOpen(true)}
                    className=' xl:hidden fixed top-10 right-10 z-10 bg-black p-3 border border-gray-500 rounded-full text-white cursor-pointer hover:border-[#319791] hover:text-[#319791] transition-colors'>
                        <MdMenuOpen size={25}/>
                    </motion.div>
                }
            <AnimatePresence>
                {
                    open &&

                    <motion.nav 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className='w-full flex z-10 justify-end fixed bg-[#00000080] backdrop-blur-[1px] right-0 top-0 bottom-0 text-gray-300 text-md'>

                    <motion.div 
                        initial={{x: 300}}
                        animate={{x: 0}}
                        exit={{x: 300}}
                        transition={{type: 'tween'}}
                    className='flex flex-col w-72 h-full bg-[#161616] py-10 pl-20 pr-10 text-sm gap-7 relative'>
                        <div className='flex justify-between items-center pb-10'>
                            <span className='text-lg '>Menu</span>
                            <span className="cursor-pointer hover:text-[#319791] transition-colors" onClick={() => setOpen(false)}> <IoClose size={22}/></span>
                        </div>
                        <div>
                            <a href="#introducao" className={`flex gap-2 hover:text-[#319791] transition-colors ${currentSectionId === "introducao" && 'text-[#319791]'}`} onClick={(e) => handleClickInMenuMobile(e)}>
                                <AiOutlineHome size={18}/>
                                <span
                                className={`${currentSectionId === "introducao" && 'text-white'}`}
                                >Introdução</span>
                            </a>
                        </div>
                    
                        <div>
                            <a href="#sobre" className={`flex gap-2  hover:text-[#319791] transition-colors ${currentSectionId === "sobre" && 'text-[#319791]'}`} onClick={(e) => handleClickInMenuMobile(e)}>
                                <AiOutlineUser size={18}/>
                                <span
                                className={`${currentSectionId === "sobre" && 'text-white'}`}
                                >Sobre</span>
                            </a>
                        </div>
                        <div>
                            <a href="#experiencias" className={`flex gap-2  hover:text-[#319791] transition-colors ${currentSectionId === "experiencias" && 'text-[#319791]'}`} onClick={(e) => handleClickInMenuMobile(e)}>
                                <BsColumnsGap size={18}/>
                                <span
                                className={`${currentSectionId === "experiencias" && 'text-white'}`}
                                >Expeciências</span>
                            </a>
                        </div>
                    
                        <div>
                            <a href="#servicos" className={`flex gap-2  hover:text-[#319791] transition-colors ${currentSectionId === "servicos" && 'text-[#319791]'}`} onClick={(e) => handleClickInMenuMobile(e)}>
                                <PiSuitcaseSimpleBold size={18}/>
                                <span 
                                className={`${currentSectionId === "servicos" && 'text-white'}`}
                                >Serviços</span>
                            </a>
                        </div>
                        <div>
                            <a href="#tecnologias" className={`flex gap-2  hover:text-[#319791] transition-colors ${currentSectionId === "tecnologias" && 'text-[#319791]'}`} onClick={(e) => handleClickInMenuMobile(e)}>
                                <BiServer size={18}/>
                                <span
                                className={`${currentSectionId === "tecnologias" && 'text-white'}`}
                                >Tecnologias</span>
                            </a>
                        </div>
                        <div>
                            <a href="#portifolio" className={`flex gap-2 hover:text-[#319791] transition-colors ${currentSectionId === "portifolio" && 'text-[#319791]'}`} onClick={(e) => handleClickInMenuMobile(e)}>
                                <BsBoxes size={18}/>
                                <span
                                className={`${currentSectionId === "portifolio" && 'text-white'}`}
                                >Portifólio</span>
                            </a>
                        </div>
                    </motion.div>
                
                    </motion.nav>
                }
             </AnimatePresence>
            </>


        </>
    )
}