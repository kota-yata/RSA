const bigintAbs = (num: bigint): bigint => {
  num = BigInt(num);
  // -----------
  if (num > 0) return num;
  return num * -1n;
}

export const gcd = (x: bigint, y: bigint): bigint => {
  x = BigInt(x);
  y = BigInt(y);
  // -----------
  x = bigintAbs(x);
  y = bigintAbs(y);
  let temp = 0n;
  while(y) {
    temp = y;
    y = x % y;
    x = temp;
  }
  return x;
};
