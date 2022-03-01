import { BACKEND_USER_URL } from '@env';

export default class api {
  static async getSmoothDrivingUser() {
    try {
      const response = await fetch(
        BACKEND_USER_URL
      );
      const json = await response.json();
      console.log(json);

    } catch (error) {
      console.error(error);
    }
  };
}