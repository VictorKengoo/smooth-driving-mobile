// interface Response {
//   token: string
//   user: {
//     id?: string
//     name: string
//     email?: string | null
//     password: string
//   }
// }

// export function signIn(id: string | undefined, name: string, password: string, email?: string | null): Promise<Response> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         token: 'fake-jwt-token',
//         user: {
//           id: id,
//           name: name,
//           email: email,
//           password: password,
//         },
//       })
//     })
//   })
// }