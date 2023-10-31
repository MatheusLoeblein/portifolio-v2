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
      <div className="w-[770px] pt-16 px-10">
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
      </div>
    </main>
  </>

  )
}
