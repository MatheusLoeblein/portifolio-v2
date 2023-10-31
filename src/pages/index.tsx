import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineHome } from 'react-icons/ai'
import { VscArrowDown } from 'react-icons/vsc'

export default function Home() {
  return (
    <>
    <video autoPlay loop muted className='w-full h-full fixed object-cover bg-black -z-10'>
        <source src="assets/video1.mp4" type="video/mp4" />
        Seu navegador não suporta a reprodução de vídeos.
      </video>
      <div className='fixed top-0 bottom-0 right-0 left-0 bg-[#00000091] z-[-1]'>
    </div>
    <header className="fixed flex top-1/2 -translate-y-1/2 left-0 border border-gray-500 rounded-2xl p-10 ml-[20px] w-[400px] text-white">
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
    </header>

    <main className="w-[1110px] m-auto flex justify-end">
      <div className="w-[770px] pt-16 px-10 flex flex-col gap-44">

        {/* INTRODUÇÂO */}
        <section className="flex flex-col gap-10">

            <div className='flex gap-3 w-max text-xs text-white py-2 px-5 rounded-full border border-gray-500'>
              
              <AiOutlineHome size={15}/>
              <span>
                INTRODUÇÃO
              </span>
            </div>

            <h1 className="flex flex-col text-white text-6xl ">
              <span>OLÁ, ME CHAMO</span>
              <span className="text-[#319791]">MATHEUS LOEBLEIN,</span>
              <span>DESENVOLVEDOR <br /> FULL-STACK</span>
            </h1>


            <p  className="text-gray-400 text-md w-[500px]">
            Apaixonado por criar soluções poderosas que transformam dados em resultados. 
            Com experiência em diversas tecnologias e linguagens de programação, estou 
            sempre em busca de novos desafios que me permitam expandir minhas habilidades 
            e conhecimentos.
            </p>


            <div className='flex justify-end px-18'>

              <div className='flex relative rounded-full border border-gray-500 w-48 h-48 p-2 cursor-pointer'>

                <img src="assets/meus_projetos.svg" className='animate-spin-low ' alt="" />  

                <span className='text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                 <VscArrowDown size={40}/>
                </span>

              </div>

            </div>


            <div className='flex gap-14'>
                <div className='flex flex-col gap-2'>
                  <span className='text-6xl font-medium text-primary'>2+ </span>
                  <span className='text-md font-thin text-white'>Anos de Experiência</span>
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='text-6xl font-medium text-primary'>10+</span>
                  <span className='text-md font-thin text-white'>Tecnologias</span>
                </div>
            </div>


        </section>

        {/* SOBRE */}
        <section className="flex flex-col gap-10">

          <div className='flex gap-3 w-max text-xs text-white py-2 px-5 rounded-full border border-gray-500'>
            
            <AiOutlineHome size={15}/>
            <span>
              SOBRE
            </span>
          </div>

          <h1 className="flex gap-1 text-white text-5xl ">
            <span>Um pouco sobre o </span>
            <span className="text-[#319791]">que faço</span>
          </h1>


          <div className='text-gray-400 text-md '>
            <p  className="w-[500px]">
              Apaixonado por criar soluções poderosas que transformam dados em resultados. 
              Com experiência em diversas tecnologias e linguagens de programação, estou 
              sempre em busca de novos desafios que me permitam expandir minhas habilidades 
              e conhecimentos.
            </p>

            <ul className='pl-5 py-5 '>
              <li className=' list-disc'>Desenvolvimento de aplicativos web completos, desde a concepção até a implantação.</li>
              <li className=' list-disc'>Criação de interfaces de usuário atraentes e intuitivas usando frameworks e bibliotecas front-end, como React.</li>
              <li className=' list-disc'>Integração de bancos de dados relacionais e não relacionais para armazenamento e recuperação de dados.</li>
              <li className=' list-disc'>Implementação de recursos de autenticação e autorização para garantir a segurança dos aplicativos.</li>
              <li className=' list-disc'>Otimização de desempenho e escalabilidade dos aplicativos para lidar com altas cargas de tráfego.</li>
              <li className=' list-disc'>Colaboração em equipes de desenvolvimento ágil, utilizando práticas modernas de desenvolvimento de software.</li>
            </ul>

            <p>
              Ao explorar meu portfólio, você encontrará links para os condigos fontes, bem estruturados e de fácil manutenção. 
              Além disso, demonstro habilidades de resolução de problemas, capacidade de aprendizado rápido e uma mentalidade focada 
              em oferecer a melhor experiência para o usuário final. Se você estiver interessado em trabalhar comigo ou tiver alguma 
              pergunta, não hesite em entrar em contato. Estou ansioso para discutir projetos futuros e oportunidades de colaboração.
            </p>

          </div>

        </section>

         {/* SOBRE */}
        <section className="flex flex-col gap-10">

          <div className='flex gap-3 w-max text-xs text-white py-2 px-5 rounded-full border border-gray-500'>
            
            <AiOutlineHome size={15}/>
            <span>
              EXPERIÊNCIAS
            </span>
          </div>

          <h1 className="flex gap-3 text-white text-5xl ">
            <span>FORMAÇÕES &</span>
            <span className="text-[#319791]">EXPERIÊNCIAS</span>
          </h1>


          <div className='flex flex-col'>

            <div className='border-l border-l-gray-500 relative ml-3 pb-10'> 
              <span className='w-5 h-5 bg-primary rounded-full absolute -left-[11px] top-0'></span>

              <div className='flex flex-col px-10 space-y-4'>
                <span className='text-md text-primary'>2022 - Presente</span>

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

            </div>

            
            <div className='border-l border-l-gray-500 relative ml-3'> 
              <span className='w-5 h-5 bg-primary rounded-full absolute -left-[11px] top-0'></span>

              <div className='flex flex-col px-10 space-y-4'>
                <span className='text-md text-primary'>2019 - 2022</span>

                <div className='flex flex-col gap-1'>
                  <span className='text-2xl text-white'>Monitor de Operações</span>
                  <span className='text-sm text-gray-400'>Spacecom Monitoramento</span>
                </div>

              </div>

            </div>

          </div>







        </section>
      </div>
    </main>
  </>

  )
}
