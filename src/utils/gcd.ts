const bigintAbs = (num: bigint): bigint => {
  if (num > 0) return num;
  return num * -1n;
}

export const gcd = (x: bigint, y: bigint): bigint => {
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
