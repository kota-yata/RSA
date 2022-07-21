import neornd from "neornd";

export class RSA {
  public static generateKey() {
    const p: bigint = neornd.bigint(128, 128);
    const q: bigint = neornd.bigint(128, 128);
    const phi: bigint = (p - 1n) * (q - 1n);
  };
  public static encrypt(message: string) {};
  public static decrypt(cipher: string) {};
};
