import { Dispatch, SetStateAction } from 'react';

import { Subscription } from 'expo-modules-core';
import ThreeAxisSensor from 'expo-sensors/build/ThreeAxisSensor';
import Mocks from '../utils/mocks';
import api from './api';
import builder from '../utils/builder';

export default class SensorData<T extends ThreeAxisSensor> {

  sensorType: string
  sensor: T
  subscription: Subscription | undefined
  setSubscription: Dispatch<SetStateAction<Subscription | undefined>>

  constructor(
    sensorType: string,
    sensor: T,
    subscription: Subscription | undefined,
    setSubscription: Dispatch<SetStateAction<Subscription | undefined>>) {

    this.sensorType = sensorType;
    this.sensor = sensor
    this.subscription = subscription;
    this.setSubscription = setSubscription;
    this.sensor.setUpdateInterval(1000);
  }

  _subscribe(viagemId: string) {
    this.setSubscription(
      this.sensor.addListener(sensorData => {
        const data = {
          x: sensorData.x.toString(),
          y: sensorData.y.toString(),
          z: sensorData.z.toString(),
        };

        api.postSensorsData(builder.composeData(
          this.sensorType,
          data,
          viagemId
        ))
      })
    );
  };

  _unsubscribe() {
    console.log('unsubscribe: ' + this.sensorType + ': ')
    this.subscription && this.subscription.remove();
    this.setSubscription(undefined);
  };
}