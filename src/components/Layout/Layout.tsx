import { ReactNode } from 'react'

import { Header } from 'src/components'
import { Box } from 'src/elements'

export const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  )
}
