declare module 'lamejs' {
    export class Mp3Encoder {
      constructor(channels: number, sampleRate: number, kbps: number);
      encodeBuffer(samples: Int16Array): Uint8Array;
      flush(): Uint8Array;
    }
  
    export class WavHeader {
      static readHeader(dataView: DataView): {
        dataOffset: number;
        dataLen: number;
        sampleRate: number;
      };
    }
  }
  