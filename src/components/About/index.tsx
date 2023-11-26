import { motion } from "framer-motion";
import { useRef } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useSectionObserver } from "@/hooks/useSectionObsever";

export function About(){

    const sectionSobre = useRef(null); 
    useSectionObserver(sectionSobre)


    return(
        <motion.section ref={sectionSobre} className="flex flex-col gap-10 min-h-screen py-20" id='sobre'>

        <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{opacity: 1, y: 0}}
        transition={{ duration: 0.5 }}
        className='flex gap-3 w-max text-xs text-white py-2 px-5 rounded-full border border-gray-500'>
          
          <AiOutlineUser size={15}
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
    )
}