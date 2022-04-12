import { BACKEND_USER_URL } from '@env';
import axios from 'axios'

const Api = axios.create({
  baseURL: 'http:localhost:3000',
})

export default Api
// export default class api {
//   static async getSmoothDrivingUser() {
//     try {
//       const response = await fetch(
//         BACKEND_USER_URL
//       );
//       const json = await response.json();
//       console.log(json);

//     } catch (error) {
//       console.error(error);
//     }
//   };
// }

