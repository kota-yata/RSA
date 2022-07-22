import { power } from '@kota-yata/miller-rabin';
import { generateCoprimeTo, generatePrime } from './prime';
import { fromUTF8Code, toUTF8Code } from './utils/code';

interface privatePairInterface { d: bigint, n: bigint };
interface publicPairInterface { e: bigint, n: bigint };

export class RSA {
  public static generateKey(): { privatePair: privatePairInterface, publicPair: publicPairInterface } {
    const p = generatePrime(128);
    const q = generatePrime(128);
    const n = p * q;
    const phi = (p - 1n) * (q - 1n);
    const e = generateCoprimeTo(phi, 128);
    const d = (phi + 1n) / e;
    const privatePair: privatePairInterface = { d, n };
    const publicPair: publicPairInterface = { e, n };
    return { privatePair, publicPair };
  };
  public static encrypt(message: string | number, publicPair: publicPairInterface): bigint {
    const bigint = typeof message === 'string' ? toUTF8Code(message) : BigInt(message);
    const cipher = power(bigint, publicPair.e, publicPair.n);
    return cipher;
  };
  public static decrypt(cipher: bigint, privatePair: privatePairInterface): string {
    const plainBigInt = power(cipher, privatePair.d, privatePair.n);
    console.log('cipher', cipher);
    console.log('d', privatePair.d);
    console.log('n', privatePair.n);
    console.log('plain', plainBigInt);
    const plainStr = fromUTF8Code(plainBigInt);
    return plainStr;
  };
};

const keys = RSA.generateKey();
const cipher = RSA.encrypt('Hello', keys.publicPair);
const plain = RSA.decrypt(cipher, keys.privatePair);
// console.log(plain);
