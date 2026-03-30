import ProtectedRedirect from '#/components/features/app/ProtectedRedirect'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <ProtectedRedirect>
      <div>Hello user!</div>
    </ProtectedRedirect>
  )
}
