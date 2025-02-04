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
      <main className='w-full px-5 md:p-0 md/lg:w-[850px] flex flex-col justify-center m-auto items-center'>
        
        <Menu/>
        <Profile/>

        <div className="w-full flex justify-center xl:w-[1000px] m-auto xl:justify-end">
          <div className="w-full overflow-hidden lg:w-[850px] 2xl:w-[920px] flex flex-col">

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
