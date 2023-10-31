import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';

export default function Portifolio({ Component, pageProps }: AppProps){
    return(
        <>
            <Head>
                <link rel="icon" href="assets/Logo.png" />
                <title>Matheus Loeblein</title>
            </Head>

            <Component {...pageProps}/>

        </>
    )
}