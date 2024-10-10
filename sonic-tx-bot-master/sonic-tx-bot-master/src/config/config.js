import { addressList } from "./address_list.js";

export class Config {
  static sendAmount = Math.random() * (0.002 - 0.0005) + 0.0005; // Random amount between 0.0005 and 0.002
  static destAddress = addressList; // Address destination list
  static drawAmount = 3; // Lottery draw amount
  static maxRetry = 3; // Max error retry for claiming
  static useLottery = false; // If you want to use the lottery feature
}
