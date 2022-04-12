interface Response {
  token: string
  user: {
    name: string
    email?: string | null
    password: string
  }
}

export function signIn(name: string, password: string, email?: string | null): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'fake-jwt-token',
        user: {
          name: name,
          email: email,
          password: password,
        },
      })
    })
  })
}