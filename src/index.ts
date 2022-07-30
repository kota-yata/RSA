import { power } from '@kota-yata/miller-rabin';
import { generateCoprimeTo, generatePrime } from './prime';
import { eea } from './utils/bigintMath';
import { fromUTF8Code, toUTF8Code } from './utils/code';

interface privatePairInterface { d: bigint, n: bigint };
interface publicPairInterface { e: bigint, n: bigint };

const LENGTH = 64;

export class RSA {
  public static generateKey(): { privatePair: privatePairInterface, publicPair: publicPairInterface } {
    const p = generatePrime(LENGTH);
    const q = generatePrime(LENGTH);
    const n = p * q;
    const phi = (p - 1n) * (q - 1n);
    const e = generateCoprimeTo(phi, LENGTH);
    console.log('e', e);
    console.log('phi', phi);
    console.log(eea(e, phi));
    const d = eea(e, phi)[1];
    const privatePair: privatePairInterface = { d, n };
    const publicPair: publicPairInterface = { e, n };
    return { privatePair, publicPair };
  };
  public static encrypt(message: string, publicPair: publicPairInterface): bigint {
    const bigint = toUTF8Code(message)
    console.log('plain', bigint);
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
console.log(plain);
