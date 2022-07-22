export const toUTF8Code = (str: string): bigint => {
  const encoder = new TextEncoder();
  const array: Uint8Array = encoder.encode(str);
  const buffer: Buffer = Buffer.from(array);
  return BigInt(buffer.readUintLE(0, array.length));
};

export const fromUTF8Code = (code: bigint): string => {
  let codeArray: number[] = [];
  while(code) {
    const byte = Number(code & 0b11111111n);
    codeArray.push(byte);
    code = code >> 8n;
  }
  const uInt8Array = new Uint8Array(codeArray);
  const decoder = new TextDecoder('utf-8');
  const result = decoder.decode(uInt8Array);
  return result;
}
