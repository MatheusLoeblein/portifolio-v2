import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { PageContextProvider } from '@/contexts/PageContext';
import { ProjectGallery } from "@/components/ProjectGallery";

export default function Portifolio({ Component, pageProps }: AppProps){
    return(
        <>
            <Head>
                <link rel="icon" href="assets/Logo.png" />
                <title>Matheus Loeblein</title>
            </Head>

            <PageContextProvider>
                <Component {...pageProps}/>
                <ProjectGallery/>
            </PageContextProvider>

        </>
    )
}