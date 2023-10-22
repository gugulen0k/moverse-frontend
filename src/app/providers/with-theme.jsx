import ThemeProvider from '@/shared/ui/theme-provider'
import { Toaster } from '@/shared/ui/toaster/toaster'

export const withTheme = (component) => () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    { component() }
    <Toaster/>
  </ThemeProvider>
)
