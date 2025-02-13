import { motion } from "framer-motion";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
export function Profile(){
    return(
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className="w-full flex border md:max-w-[770px] border-gray-500 rounded-[3rem] p-10 text-white mt-5 xl:mt-0 xl:ml-[20px] xl:w-[380px] min[1600px]:w-[500px] xl:fixed xl:top-1/2 xl:-translate-y-1/2 xl:left-0 backdrop-blur-sm" >
  
          <div className="flex flex-col items-center justify-center w-full gap-5 xl:gap-10">
            <div className="flex justify-between w-full items-center">
              <div className="flex gap-2 text-sm">
                <Image  
                className="w-12"
                src="/assets/logo.svg" 
                alt="myLogo" 
                width={500}
                height={500}
                />
              </div>
  
              <h2 className="flex flex-col text-base">
                <span>Full Stack Developer</span>
                <span>Software Enginner</span>
              </h2>
            </div>
              <Image 
                className="rounded-[3rem] w-96 md:w-72 xl:w-96"
                src="/assets/profile.png" 
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
              <a 
              href="https://github.com/MatheusLoeblein"
              target="_blank"
              className="flex justify-center items-center w-12 h-12 rounded-full p-1 border-2 border-gray-500 hover:text-[#319791] hover:border-[#319791] cursor-pointer transition-colors duration-300">
                <AiFillGithub size={20}/>
              </a>
              <a
              href="https://www.linkedin.com/in/matheus-loeblein-761a73104/"
              target="_blank"
              className="flex justify-center items-center w-12 h-12 rounded-full p-1 border-2 border-gray-500 hover:text-[#319791] hover:border-[#319791] cursor-pointer transition-colors duration-300">
                <AiFillLinkedin size={20}/>
              </a>
            </div>
  
            <a 
            href="https://api.whatsapp.com/send?phone=5541995515225"
            target="_blank"
            className="bg-[#319791] w-full flex items-center justify-center p-4 rounded-full hover:bg-transparent border-[#319791] border-2 hover:text-[#319791] cursor-pointer transition-colors duration-300">
                <span>CONTATE-ME</span>
            </a>
          </div>
        </motion.div>
    )
}