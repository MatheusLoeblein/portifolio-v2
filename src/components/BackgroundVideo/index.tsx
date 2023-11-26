export function BackgroundVideo(){
    return(
        <>
            <video autoPlay loop muted className='w-full h-full fixed object-cover bg-black -z-10'>
                <source src="assets/video1.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeos.
            </video>
            <div className='fixed top-0 bottom-0 right-0 left-0 bg-[#00000091] z-[-1]'/>
        </>
    )
}