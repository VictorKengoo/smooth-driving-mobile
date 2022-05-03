import { BACKEND_USER_URL } from '@env';
import { SensorDataPostProps } from '../utils/interfaces';
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
  }

  static async postSensorsData(data: SensorDataPostProps[]) {
    try {
      const response = await fetch(
        BACKEND_USER_URL,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
      const json = await response.json();
      console.log(json);

    } catch (error) {
      console.error(error);
    }
  }

}

