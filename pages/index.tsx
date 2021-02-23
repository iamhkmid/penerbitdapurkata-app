import Head from 'next/head'
import Footer from '../src/components/Footer'
import Main from '../src/components/layouts/Main'
import Navbar from '../src/components/layouts/Navbar'
import NavContextProvider from '../src/contexts/NavContextProvider'

export default function Home() {
  return (
    <>
      <Head>
        <title>Penerbit DapurKata</title>
        <link rel="icon" href="/icons/dklogo.svg" />
      </Head>
      <NavContextProvider>
        <Navbar />
        <Main />
        <Footer />
      </NavContextProvider>

    </>
  )
}
