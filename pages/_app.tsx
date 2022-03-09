import '../styles/globals.css'
import type { AppProps } from 'next/app'

//import "/static/TemplateData/style.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
