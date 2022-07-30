export const bigintAbs = (num: bigint): bigint => {
  if (num > 0) return num;
  return num * -1n;
}

// Euclidean Algorithm
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

// Extended Euclidean Algorithm
export const eea = (x: bigint, y: bigint): bigint[] => {
  if(y === 0n) return [x, 1n, 0n];
  const [d, s, t] = eea(y, x % y);
  return [d, t, s - ((x / y) * t)];
};

