import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Index })

// TODO: add authentication
function Index() {
  return <div>Hello, World!</div>
}
