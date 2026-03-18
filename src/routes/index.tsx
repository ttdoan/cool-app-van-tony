import { Drawer } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return <Drawer variant="permanent">something</Drawer>
}
