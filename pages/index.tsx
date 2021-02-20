import Head from 'next/head'
import Main from '../components/layouts/Main'
import Navbar from '../components/layouts/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />

    </>
  )
}
