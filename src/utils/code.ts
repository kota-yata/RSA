export const toUTF8Code = (str: string): bigint => {
  const buffer: Buffer = Buffer.from(str);
  return BigInt(`0x${buffer.toString('hex')}`);
};

export const fromUTF8Code = (code: bigint): string => {
  let codeArray: number[] = [];
  while(code) {
    const byte = Number(code & 0b11111111n);
    codeArray.push(byte);
    code = code >> 8n;
  }
  const uInt8Array = new Uint8Array(codeArray.reverse());
  const decoder = new TextDecoder('utf-8');
  const result = decoder.decode(uInt8Array);
  return result;
}
