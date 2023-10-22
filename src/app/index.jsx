import './index.css'
import { withProviders } from './providers'
import { Routing } from '@/pages'

const App = () => {
  return (
    <>
      <Routing/>
    </>
  )
}

export default withProviders(App)
