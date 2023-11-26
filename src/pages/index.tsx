"use client"
import { Menu } from '@/components/Menu'
import { Profile } from '@/components/Profile'
import { Intro } from '@/components/Intro'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { Services } from '@/components/Services'
import { Tecnologies } from '@/components/Technologies'
import { Protifolio } from '@/components/Portifolio'

export default function Home() {

  return (
    <>

    <video autoPlay loop muted className='w-full h-full fixed object-cover bg-black -z-10'>
        <source src="assets/video1.mp4" type="video/mp4" />
        Seu navegador não suporta a reprodução de vídeos.
      </video>
      <div className='fixed top-0 bottom-0 right-0 left-0 bg-[#00000091] z-[-1]'>
    </div>


    <main className='w-[900px] flex flex-col justify-center m-auto items-center'>
      
      <Menu/>
      <Profile/>

      <div className="flex justify-center xl:w-[1000px] m-auto xl:justify-end ">
        <div className="md:w-full overflow-hidden xl:w-[820px] px-16 flex flex-col">

          <Intro/>
          <About/>
          <Experience/>
          <Services/>
          <Tecnologies/>
          <Protifolio/>

        </div>
      </div>
    </main>
  </>

  )
}
