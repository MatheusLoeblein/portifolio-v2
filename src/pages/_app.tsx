import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { PageContextProvider } from '@/contexts/PageContext';
import '../app/globals.css'


export default function Portifolio({ Component, pageProps }: AppProps){
    return(
        <>
            <Head>
                <link rel="icon" href="assets/logo.svg" />
                <title>Matheus Loeblein</title>
                <meta name="description" content="Portfólio de Matheus Loeblein, especialista em desenvolvimento fullstack." />
                <meta property="og:title" content="Matheus Loeblein| Desenvolvedor fullstack" />
                <meta property="og:description" content="Portfólio de Matheus Loeblein, especialista em desenvolvimento fullstack." />
                <meta property="og:image" content="https://matheusloeblein.com/_next/image?url=%2Fassets%2Fprofile.png&w=640&q=75" />
                <meta property="og:url" content="https://matheusloeblein.com" />
            </Head>

            <PageContextProvider>
                <Component {...pageProps}/>
            </PageContextProvider>

        </>
    )
}