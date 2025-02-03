import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { PageContextProvider } from '@/contexts/PageContext';
import { ProjectGallery } from "@/components/ProjectGallery";
import '../app/globals.css'


export default function Portifolio({ Component, pageProps }: AppProps){
    return(
        <>
            <Head>
                <link rel="icon" href="assets/logo.svg" />
                <title>Matheus Loeblein</title>
            </Head>

            <PageContextProvider>
                <Component {...pageProps}/>
            </PageContextProvider>

        </>
    )
}