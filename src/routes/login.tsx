import { login } from '#/store/session'
import { useAppDispatch } from '#/store'
import Button from '@mui/material/Button'
import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: Login,
})

// TODO: add login API
// TODO: replace hardcoded user
function Login() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <div>
      <Button
        onClick={() => {
          dispatch(
            login({
              email: '',
              id: 1,
              name: '',
            }),
          )
          console.log('navigate to /login')
          navigate({ to: '/user', replace: true })
        }}
      >
        Login
      </Button>
    </div>
  )
}
