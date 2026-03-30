import type { RootState } from '#/store'
import { Navigate } from '@tanstack/react-router'
import { useSelector } from 'react-redux'

interface ProtectedRedirectProps {
  children: React.ReactNode
}

export default function ProtectedRedirect({
  children,
}: ProtectedRedirectProps) {
  const user = useSelector((state: RootState) => state.session.user)

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}
