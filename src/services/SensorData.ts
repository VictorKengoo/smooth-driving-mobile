import React, { Dispatch, SetStateAction } from 'react';
import { Gyroscope, Accelerometer } from 'expo-sensors';

import { Subscription } from 'expo-modules-core';
import { SensorDataProps } from '../utils/interfaces';
import ThreeAxisSensor from 'expo-sensors/build/ThreeAxisSensor';
import Mocks from '../utils/mocks';

export default class SensorData<T extends ThreeAxisSensor> {

  sensorType: string
  sensor: T
  data: SensorDataProps
  setData: Dispatch<SetStateAction<SensorDataProps>>
  subscription: Subscription | undefined
  setSubscription: Dispatch<SetStateAction<Subscription | undefined>>

  constructor(
    sensorType: string,
    sensor: T,
    data: SensorDataProps,
    setData: Dispatch<SetStateAction<SensorDataProps>>,
    subscription: Subscription | undefined,
    setSubscription: Dispatch<SetStateAction<Subscription | undefined>>) {

    this.sensorType = sensorType;
    this.sensor = sensor
    this.data = data;
    this.setData = setData;
    this.subscription = subscription;
    this.setSubscription = setSubscription;
  }

  _subscribe() {
    this.sensor.setUpdateInterval(500);
    this.setSubscription(
      this.sensor.addListener(sensorData => {
        console.log('subscribe: ' + this.sensorType + ': ', JSON.stringify(sensorData))

        this.setData({
          x: sensorData.x.toString(),
          y: sensorData.y.toString(),
          z: sensorData.z.toString(),
        });
      })
    );
  };

  _unsubscribe() {
    console.log('unsubscribe: ' + this.sensorType + ': ')
    this.subscription && this.subscription.remove();
    this.setSubscription(undefined);
  };

}