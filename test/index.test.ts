import RSA from '../src/index';

const testRSA = (str: string) => {
  const keys = RSA.generateKey();
  const cipher = RSA.encrypt(str, keys.publicPair);
  const plain = RSA.decrypt(cipher, keys.privatePair);
  if (plain !== str) {
    console.log(`FAILED: got ${plain} while ${str} expected`);
    return;
  }
  console.log(`PASSED: Successfully got ${str}`);
  return;
}

testRSA('Hello');
testRSA('おはようございます。');
testRSA('abcdefghijklmnopqrstuvwxyz');
