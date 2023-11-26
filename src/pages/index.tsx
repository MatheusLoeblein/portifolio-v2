"use client"
import { Menu } from '@/components/Menu'
import { Profile } from '@/components/Profile'
import { Intro } from '@/components/Intro'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { Services } from '@/components/Services'
import { Tecnologies } from '@/components/Technologies'
import { Protifolio } from '@/components/Portifolio'
import { BackgroundVideo } from '@/components/BackgroundVideo'

export default function Home() {

  return (
    <>
    <BackgroundVideo/>
    <main className='w-[900px] flex flex-col justify-center m-auto items-center'>
      
      <Menu/>
      <Profile/>

      <div className="flex justify-center xl:w-[1000px] m-auto xl:justify-end ">
        <div className="md:w-full overflow-hidden xl:w-[820px] px-16 flex flex-col">

          <h1 className='text-white p-28 text-5xl'>MATHEUS EDUARDO LOEBLEIN</h1>
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
