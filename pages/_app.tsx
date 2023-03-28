import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

import { useStore } from '@/core/store'
import Layout from 'components/layout'
import '@/assets/styles/app.scss'

export function reportWebVitals(metric: any) {
  // Measuring performance
  // console.log(metric)
}

export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
