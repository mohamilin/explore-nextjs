import LayoutRoot from '../components/moleculs/UI/layout-root'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log(pageProps, 'pageProps')
  return (
    <LayoutRoot>
      <Component {...pageProps} />
    </LayoutRoot>
  )
}

export default MyApp
