import { motion } from "framer-motion";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
export function Profile(){
    return(
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className="w-full flex border md:max-w-[765px] border-gray-500 rounded-2xl p-10 text-white mt-5 xl:mt-0 xl:ml-[20px] xl:w-[400px] xl:fixed xl:top-1/2 xl:-translate-y-1/2 xl:left-0" >
  
          <div className="flex flex-col items-center justify-center w-full gap-5 xl:gap-10">
            <div className="flex justify-between w-full items-center">
              <div className="flex gap-2 text-sm">
                <Image  
                className="w-12"
                src="/assets/Logo.png" 
                alt="myLogo" 
                width={500}
                height={500}
                />
              </div>
  
              <h2 className="flex flex-col text-md">
                <span>Full Stack Developer</span>
                <span>Software Enginner</span>
              </h2>
            </div>
  
              <Image 
                className="rounded-2xl w-96"
                src="/assets/profile2.png" 
                alt="profileimg"
                width={500}
                height={500}
                />
  
            <div className="flex flex-col justify-center items-center text-lg">
              <span>Matheus Loeblein</span>
              <span>Curitiba, PR</span>
            </div>
            
            <div className="flex flex-col justify-center items-center text-xs text-gray-300">
              <span>© 2022 Matheus Loeblein.</span>
            </div>
  
            <div className="flex gap-4 text-gray-400">
              <span className="flex justify-center items-center w-12 h-12 rounded-full p-1 border-2 border-gray-500 hover:text-[#319791] hover:border-[#319791] cursor-pointer transition-colors duration-300">
                <AiFillGithub size={20}/>
              </span>
              <span
              className="flex justify-center items-center w-12 h-12 rounded-full p-1 border-2 border-gray-500 hover:text-[#319791] hover:border-[#319791] cursor-pointer transition-colors duration-300">
                <AiFillLinkedin size={20}/>
              </span>
              <span className="flex justify-center items-center w-12 h-12 rounded-full p-1 border-2 border-gray-500 hover:text-[#319791] hover:border-[#319791] cursor-pointer transition-colors duration-300">
                <AiFillInstagram size={20}/>
              </span>
            </div>
  
            <button className="bg-[#319791] w-full p-4 rounded-full hover:bg-transparent border-[#319791] border-2 hover:text-[#319791] cursor-pointer transition-colors duration-300">
                CONTATE-ME
            </button>
          </div>
        </motion.div>
    )
}