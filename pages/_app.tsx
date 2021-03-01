import NavContextProvider from '../src/contexts/NavContextProvider'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <NavContextProvider>
      <Component {...pageProps} />
    </NavContextProvider>
  )
}

export default MyApp
