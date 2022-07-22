import neornd from "neornd";
import { testPrimality } from '@kota-yata/miller-rabin';
import { gcd } from "./utils/gcd";

export const generatePrime = (byteLength: number): bigint => {
  let bigint: bigint = neornd.bigint(byteLength, byteLength);
  while(!testPrimality(bigint, 5)) {
    bigint = neornd.bigint(byteLength, byteLength);
  }
  return bigint;
};

export const generateCoprimeTo = (value: bigint, byteLength: number): bigint => {
  let bigint: bigint = neornd.bigint(byteLength, byteLength);
  while(gcd(value, bigint) !== 1n || bigint > value) {
    bigint = neornd.bigint(byteLength, byteLength);
  }
  return bigint;
}
