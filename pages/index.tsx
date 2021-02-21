import Head from 'next/head'
import Main from '../src/components/layouts/Main'
import Navbar from '../src/components/layouts/Navbar'
import NavContextProvider from '../src/contexts/NavContextProvider'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavContextProvider>
        <Navbar />
        <Main />
      </NavContextProvider>

    </>
  )
}
