import { DeliveryLocation } from './delivery-location';

export type DeliveryLocationIntrinsicData = {
  readonly street: string;
  readonly city: string;
};

export type DeliveryLocationDictionary = { [key: string]: DeliveryLocation };
