import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { SuspenseLoader } from '@/shared/ui/suspense-loader'

export const withRouter = (component) => () => (
  <BrowserRouter>
    <Suspense fallback={ <SuspenseLoader /> } >
      { component() }
    </Suspense>
  </BrowserRouter>
)
