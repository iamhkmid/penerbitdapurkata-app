import { GetStaticProps } from 'next'
import Head from 'next/head'
import { FC, useContext } from 'react'
import Footer from '../src/components/layouts/Footer'
import Navbar from '../src/components/layouts/Navbar'
import Section1 from '../src/components/layouts/Section1'
import Section2 from '../src/components/layouts/Section2'
import Section3 from '../src/components/layouts/Section3'
import Section4 from '../src/components/layouts/Section4'
import { NavContext } from '../src/contexts/NavContextProvider'
import data from '../data'

import { section1, spesifikasi, paketHarga, contents } from '../src/types/type'

type Props = {
  section1: section1
  spesifikasi: spesifikasi
  paketHarga: paketHarga
  contents: contents
}

export const getStaticProps: GetStaticProps = async (context) => {

  return {
    props: {
      section1: data.section1,
      spesifikasi: data.spesifikasi,
      paketHarga: data.paketHarga,
      contents: data.contents
    }
  }
}


const Home: FC<Props> = (props) => {
  const { changeNavToggle } = useContext(NavContext)
  return (
    <>
      <Head>
        <title>Penerbit DapurKata</title>
        <link rel="icon" href="/icons/dklogo.svg" />
      </Head>
      <Navbar />
      <main onClick={() => changeNavToggle(false)}>
        <Section1 section1={props.section1} />
        <Section2 spesifikasi={props.spesifikasi} />
        <Section3 paketHarga={props.paketHarga} />
        <Section4 contents={props.contents} />
      </main >
      <Footer />
    </>
  )
}

export default Home
