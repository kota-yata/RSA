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
// https://ieeexplore.ieee.org/document/5691644
export const eea = (x: bigint, y: bigint): bigint => {
  let y0 = 0n; let y1 = 1n;
  let b = 1n; let t = 1n; let k = 1;
  let r0 = x; let r1 = y;
  while(r1 !== 1n) {
    k++;
    t = r1;
    b = r0 / t;
    r1 = r0 % t;
    r0 = t;
    y = b * y1;
    t = y1;
    y1 = y0 + y;
    y0 = t;
  }
  if ((k % 2) === 0) return x - y1;
  return y1;
};

