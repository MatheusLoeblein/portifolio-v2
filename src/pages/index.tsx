"use client"

import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineHome, AiFillHtml5 } from 'react-icons/ai'
import { VscArrowDown } from 'react-icons/vsc'
import { SiNginx } from 'react-icons/si'
import { BsGit } from 'react-icons/bs'
import { FaNode } from 'react-icons/fa'
import { BiLogoCss3, BiLogoDjango, BiLogoFigma, BiLogoJavascript, BiLogoPostgresql, BiLogoPython, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi'
import Image from 'next/image'

import { useScrollDown } from '@/hooks/useScrollDown'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Home() {

  const scrollDown = useScrollDown();

  return (
    <>
    <video autoPlay loop muted className='w-full h-full fixed object-cover bg-black -z-10'>
        <source src="assets/video1.mp4" type="video/mp4" />
        Seu navegador não suporta a reprodução de vídeos.
      </video>
      <div className='fixed top-0 bottom-0 right-0 left-0 bg-[#00000091] z-[-1]'>
    </div>
    <motion.header 
    initial={{opacity: 0, y:'-45%'}}
    whileInView={{opacity: 1, y:'-50%'}}
    transition={{type: 'tween'}}
    className="fixed flex top-1/2 -translate-y-1/2 left-0 border border-gray-500 rounded-2xl p-10 ml-[20px] w-[400px] text-white">
      <div className="flex flex-col items-center justify-center w-full gap-8">
        <div className="flex justify-between w-full items-center">
          <div className="flex gap-2 text-sm">
            <img 
            className="w-12"
            src="/assets/Logo.png" 
            alt="myLogo" />
          </div>

          <h2 className="flex flex-col text-md">
            <span>Full Stack Developer</span>
            <span>Software Enginner</span>
          </h2>
        </div>

        <img 
            className="rounded-2xl"
            src="/assets/profile2.png" 
            alt="profileimg" />

        <div className="flex flex-col justify-center items-center text-lg">
          <span>Matheus Loeblein</span>
          <span>Curitiba, PR</span>
        </div>
        
        <div className="flex flex-col justify-center items-center text-xs text-gray-300">
          <span>© 2022 Matheus Loeblein.</span>
        </div>

        <div className="flex gap-4 text-gray-400">
          <span className="flex justify-center items-center w-12 h-12 rounded-full p-1 border border-gray-300 hover:text-[#319791] hover:border-[#319791] cursor-pointer transition-colors duration-300">
            <AiFillGithub size={20}/>
          </span>
          <span
          className="flex justify-center items-center w-12 h-12 rounded-full p-1 border border-gray-300 hover:text-[#319791] hover:border-[#319791] cursor-pointer transition-colors duration-300">
            <AiFillLinkedin size={20}/>
          </span>
          <span className="flex justify-center items-center w-12 h-12 rounded-full p-1 border border-gray-300 hover:text-[#319791] hover:border-[#319791] cursor-pointer transition-colors duration-300">
            <AiFillInstagram size={20}/>
          </span>
        </div>

        <button className="bg-[#319791] w-full p-4 rounded-full hover:bg-transparent border-[#319791] border-2 hover:text-[#319791] cursor-pointer transition-colors duration-300">
            CONTATE-ME
        </button>
      </div>
    </motion.header>

    <main className="w-[1110px] m-auto flex justify-end">
      <div className="w-[770px] pt-16 px-10 flex flex-col gap-44"
      >

        {/* INTRODUÇÂO */}
        <motion.section 
        className="flex flex-col gap-10"
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
            className="flex flex-col text-white text-6xl ">
              <span>OLÁ, ME CHAMO</span>
              <span className="text-[#319791]">MATHEUS LOEBLEIN,</span>
              <span>DESENVOLVEDOR <br /> FULL-STACK</span>
            </motion.h1>


            <motion.p  
              initial={{opacity: 0, y: 70}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 1}}
            className="text-gray-400 text-md w-[500px]">
            Apaixonado por criar soluções poderosas que transformam dados em resultados. 
            Com experiência em diversas tecnologias e linguagens de programação, estou 
            sempre em busca de novos desafios que me permitam expandir minhas habilidades 
            e conhecimentos.
            </motion.p>


            <motion.div className='flex justify-end px-18'
              initial={{opacity: 0, y: 90}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 1.2}}
            >

              <div className='flex relative rounded-full border border-gray-500 w-48 h-48 p-2 cursor-pointer'>

                <img src="assets/meus_projetos.svg" className='animate-spin-low ' alt="" />  

                <span className='text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                 <VscArrowDown size={40}/>
                </span>

              </div>

            </motion.div>


            <div className='flex gap-14'>
                <motion.div className='flex flex-col gap-2'
                initial={{opacity: 0, x: -50}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: .4, duration: 1.2}}
                >
                  <span className='text-6xl font-medium text-primary'>2+ </span>
                  <span className='text-md font-thin text-white'>Anos de Experiência</span>
                </motion.div>
                <motion.div 
                  initial={{opacity: 0, x: 50}}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{duration: .4, duration: 1.2}}
                className='flex flex-col gap-2'>
                  <span className='text-6xl font-medium text-primary'>10+</span>
                  <span className='text-md font-thin text-white'>Tecnologias</span>
                </motion.div>
            </div>


        </motion.section>

        {/* SOBRE */}
        <motion.section 
        className="flex flex-col gap-10">

          <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{opacity: 1, y: 0}}
          transition={{ duration: 0.5 }}
          className='flex gap-3 w-max text-xs text-white py-2 px-5 rounded-full border border-gray-500'>
            
            <AiOutlineHome size={15}
            />
            <span>
              SOBRE
            </span>
          </motion.div>

          <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{opacity: 1, y: 0}}
          transition={{ duration: 0.7 }}
          className="flex gap-[12px] text-white text-5xl ">
            <span>UM POUCO SOBRE O</span>
            <span className="text-[#319791]">QUE FAÇO</span>
          </motion.h1>


          <div className='text-gray-400 text-md '>
            <motion.p  
            initial={{ opacity: 0, y: 40 }}
            whileInView={{opacity: 1, y: 0}}
            transition={{ duration: 0.9 }}
            className="w-[500px]">
              Apaixonado por criar soluções poderosas que transformam dados em resultados. 
              Com experiência em diversas tecnologias e linguagens de programação, estou 
              sempre em busca de novos desafios que me permitam expandir minhas habilidades 
              e conhecimentos.
            </motion.p>

            <motion.ul 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{opacity: 1, y: 0}}
            transition={{ duration: 1.1 }}
            className='pl-5 py-5 '>
              <li className=' list-disc'>Desenvolvimento de aplicativos web completos, desde a concepção até a implantação.</li>
              <li className=' list-disc'>Criação de interfaces de usuário atraentes e intuitivas usando frameworks e bibliotecas front-end, como React.</li>
              <li className=' list-disc'>Integração de bancos de dados relacionais e não relacionais para armazenamento e recuperação de dados.</li>
              <li className=' list-disc'>Implementação de recursos de autenticação e autorização para garantir a segurança dos aplicativos.</li>
              <li className=' list-disc'>Otimização de desempenho e escalabilidade dos aplicativos para lidar com altas cargas de tráfego.</li>
              <li className=' list-disc'>Colaboração em equipes de desenvolvimento ágil, utilizando práticas modernas de desenvolvimento de software.</li>
            </motion.ul>

            <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{opacity: 1, y: 0}}
            transition={{ duration: 1.3 }}
            >
              Ao explorar meu portfólio, você encontrará links para os condigos fontes, bem estruturados e de fácil manutenção. 
              Além disso, demonstro habilidades de resolução de problemas, capacidade de aprendizado rápido e uma mentalidade focada 
              em oferecer a melhor experiência para o usuário final. Se você estiver interessado em trabalhar comigo ou tiver alguma 
              pergunta, não hesite em entrar em contato. Estou ansioso para discutir projetos futuros e oportunidades de colaboração.
            </motion.p>

          </div>

        </motion.section >

         {/* EXPERIÊNCIAS */}

        <section className="flex flex-col gap-10">

          <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{opacity: 1, y: 0}}
          transition={{ duration: 0.5 }}
          className='flex gap-3 w-max text-xs text-white py-2 px-5 rounded-full border border-gray-500'>
            
            <AiOutlineHome size={15}/>
            <span>
            EXPERIÊNCIAS
            </span>
          </motion.div>

          <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{opacity: 1, y: 0}}
          transition={{ duration: 0.7 }}
          className="flex gap-3 text-white text-5xl ">
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
                <span className='text-lg text-gray-400 group-hover:text-primary transition-colors duration-500 font-medium'>2022 - Presente</span>

                <div className='flex flex-col gap-1'>
                  <span className='text-2xl text-white'>Analise e Desenvolvimento de Sistemas</span>
                  <span className='text-sm text-gray-400'>Faculdade Anhanguera</span>
                </div>

                <div className='flex flex-col gap-1'>
                  <span className='text-2xl text-white'>Python 3( PySide6, Django, Selenium, Regexp, Testes, TDD, POO, Design Patterns GoF)</span>
                  <span className='text-sm text-gray-400'>Udemy</span>
                </div>

                <div className='flex flex-col gap-1'>
                  <span className='text-2xl text-white'>Assistente de TI</span>
                  <span className='text-sm text-gray-400'>Formedica Farmacia de Manipulação</span>
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
                <span className='text-lg text-gray-400 group-hover:text-primary transition-colors duration-500 font-medium'>2019 - 2022</span>

                <div className='flex flex-col gap-1'>
                  <span className='text-2xl text-white'>Monitor de Operações</span>
                  <span className='text-sm text-gray-400'>Spacecom Monitoramento</span>
                </div>

              </div>

            </motion.div>

          </div>

        </section>

        {/* SERVIÇOS */}

        <motion.section 
        className="flex flex-col gap-10"
        >

          <motion.div 
          initial={{ opacity: 0, y: 40}}
          whileInView={{opacity: 1, y:0}}
          transition={{ duration: 0.5 }}
          className='flex gap-3 w-max text-xs text-white py-2 px-5 rounded-full border border-gray-500'>
            
            <AiOutlineHome size={15}/>
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

        {/* TECNOLOGIAS */}

        <section className="flex flex-col gap-y-10 ">

          <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{opacity: 1, y: 0}}
          transition={{ duration: .5 }}
          
          className='flex gap-3 w-max text-xs text-white py-2 px-5 rounded-full border border-gray-500'>
            
            <AiOutlineHome size={15}/>
            <span>
              TECNOLOGIAS
            </span>
          </motion.div>

          <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{opacity: 1, y: 0}}
          transition={{ duration: .7 }}
          className="flex gap-3 text-white text-5xl ">
            <span>PRINCIPAIS</span>
            <span className="text-[#319791]">TECNOLOGIAS</span>
          </motion.h1>


          <div className='grid grid-cols-4 gap-12 text-white'>

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

        
        {/* TECNOLOGIAS */}

        <section className="flex flex-col gap-y-10 ">

          <motion.div 
          initial={{ opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{ duration: 0.5 }}
          className='flex gap-3 w-max text-xs text-white py-2 px-5 rounded-full border border-gray-500'>
            
            <AiOutlineHome size={15}/>
            <span>
              PORTIFOLIO
            </span>
          </motion.div>

          <motion.h1 
          initial={{ opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{ duration: 0.7 }}
          className="flex gap-3 text-white text-5xl ">
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
           className='text-2xl mt-5'>LANDING PAGE - SIMPOSIO OBESIDADE MULTIFATORIAL</motion.h3>

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
           className='text-2xl mt-5'>LANDING PAGE - SIMPOSIO OBESIDADE MULTIFATORIAL</motion.h3>

          </motion.div>

    

        </section>
      </div>
    </main>
  </>

  )
}
