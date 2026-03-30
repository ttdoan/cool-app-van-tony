export interface User {
  id: number
  name: string
  email: string
}

export interface SessionState {
  user: User | null
}
