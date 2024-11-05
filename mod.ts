// https://ja.wikipedia.org/wiki/EBCDIC

/**
 * Map of EBCDIC (CCSID 37) to ASCII
 *
 *  |00|10|20|30|40|50|60|70|80|90|A0|B0|C0|D0|E0|F0
 * -------------------------------------------------
 * 0|  |  |  |  |sp|& |- |  |  |  |  |  |  |  |  |0
 * 1|  |  |  |  |  |  |/ |  |  |  |  |  |A |J |  |1
 * 2|  |  |  |  |  |  |  |  |  |  |  |  |B |K |S |2
 * 3|  |  |  |  |  |  |  |  |  |  |  |  |C |L |T |3
 * 4|  |  |  |  |  |  |  |  |  |  |  |  |D |M |U |4
 * 5|  |  |  |  |  |  |  |  |  |  |  |  |E |N |V |5
 * 6|  |  |  |  |  |  |  |  |  |  |  |  |F |O |W |6
 * 7|  |  |  |  |  |  |  |  |  |  |  |  |G |P |X |7
 * 8|  |  |  |  |  |  |  |  |  |  |  |  |H |Q |Y |8
 * 9|  |  |  |  |  |  |  |  |  |  |  |  |I |R |Z |9
 * A|  |  |  |  |  |  |  |: |  |  |  |  |  |  |  |
 * B|  |  |  |  |. |  |, |# |  |  |  |  |  |  |  |
 * C|  |  |  |  |< |* |% |@ |  |  |  |  |  |  |  |
 * D|  |  |  |  |( |) |_ |' |  |  |  |  |  |  |  |
 * E|  |  |  |  |+ |; |> |= |  |  |  |  |  |  |  |
 * F|  |  |  |  |  |  |? |" |  |  |  |  |  |  |  |
 */
const _EBCDIC_CCSID_37 = [
  { c: " ", b: 0x40 },
  { c: ".", b: 0x4b },
  { c: "<", b: 0x4c },
  { c: "(", b: 0x4d },
  { c: "+", b: 0x4e },
  { c: "&", b: 0x50 },
  { c: "*", b: 0x5c },
  { c: ")", b: 0x5d },
  { c: ";", b: 0x5e },
  { c: "-", b: 0x60 },
  { c: "/", b: 0x61 },
  { c: ",", b: 0x6b },
  { c: "%", b: 0x6c },
  { c: "_", b: 0x6d },
  { c: ">", b: 0x6e },
  { c: "?", b: 0x6f },
  { c: ":", b: 0x7a },
  { c: "#", b: 0x7b },
  { c: "@", b: 0x7c },
  { c: "'", b: 0x7d },
  { c: "=", b: 0x7e },
  { c: '"', b: 0x7f },
  { c: "A", b: 0xc1 },
  { c: "B", b: 0xc2 },
  { c: "C", b: 0xc3 },
  { c: "D", b: 0xc4 },
  { c: "E", b: 0xc5 },
  { c: "F", b: 0xc6 },
  { c: "G", b: 0xc7 },
  { c: "H", b: 0xc8 },
  { c: "I", b: 0xc9 },
  { c: "J", b: 0xd1 },
  { c: "K", b: 0xd2 },
  { c: "L", b: 0xd3 },
  { c: "M", b: 0xd4 },
  { c: "N", b: 0xd5 },
  { c: "O", b: 0xd6 },
  { c: "P", b: 0xd7 },
  { c: "Q", b: 0xd8 },
  { c: "R", b: 0xd9 },
  { c: "S", b: 0xe2 },
  { c: "T", b: 0xe3 },
  { c: "U", b: 0xe4 },
  { c: "V", b: 0xe5 },
  { c: "W", b: 0xe6 },
  { c: "X", b: 0xe7 },
  { c: "Y", b: 0xe8 },
  { c: "Z", b: 0xe9 },
  { c: "0", b: 0xf0 },
  { c: "1", b: 0xf1 },
  { c: "2", b: 0xf2 },
  { c: "3", b: 0xf3 },
  { c: "4", b: 0xf4 },
  { c: "5", b: 0xf5 },
  { c: "6", b: 0xf6 },
  { c: "7", b: 0xf7 },
  { c: "8", b: 0xf8 },
  { c: "9", b: 0xf9 },
] as const;

type EBCDIC_CCSID_37_CHAR = typeof _EBCDIC_CCSID_37[number]["c"];
type EBCDIC_CCSID_37_BYTE = typeof _EBCDIC_CCSID_37[number]["b"];

const c2b37 = new Map<EBCDIC_CCSID_37_CHAR, EBCDIC_CCSID_37_BYTE>(
  _EBCDIC_CCSID_37.map(({ c, b }) => [c, b]),
);
const b2c37 = new Map<EBCDIC_CCSID_37_BYTE, EBCDIC_CCSID_37_CHAR>(
  _EBCDIC_CCSID_37.map(({ c, b }) => [b, c]),
);

export interface EBCDIC_CCSID_37_FUNCTION_RETURN {
  /**
   * Alias of `as EBCDIC_CCSID_37`
   *
   * ### Example
   *
   * ```ts
   * const ebcdic = EBCDIC_CCSID_37("HELLO WORLD").as();
   * ```
   */
  as(): EBCDIC_CCSID_37;
  /**
   * Encode ASCII to EBCDIC (CCSID 37)
   *
   * ### Example
   *
   * ```ts
   * const bin = EBCDIC_CCSID_37("HELLO WORLD").encode();
   * ```
   */
  encode(): Uint8Array;
}

export type EBCDIC_CCSID_37_FUNCTION = (
  str: string,
) => EBCDIC_CCSID_37_FUNCTION_RETURN;

export interface EBCDIC_CCSID_37_STATIC {
  /**
   * Convert ASCII to EBCDIC Code (CCSID 37)
   *
   * ### Example
   *
   * ```ts
   * const code = EBCDIC_CCSID_37.charCodeAt("A");
   * ```
   */
  charCodeAt(c: string): number;
  /**
   * Convert EBCDIC Code (CCSID 37) to ASCII
   *
   * ### Example
   *
   * ```ts
   * const char = EBCDIC_CCSID_37.fromCharCode(0x40);
   * ```
   */
  fromCharCode(code: number): string;

  /**
   * Encode ASCII to EBCDIC (CCSID 37)
   *
   * ### Example
   * ```ts
   * const bin = EBCDIC_CCSID_37.encode("HELLO WORLD");
   * ```
   */
  encode(str: string): Uint8Array;

  /**
   * Decode EBCDIC (CCSID 37) to ASCII
   *
   * ### Example
   *
   * ```ts
   * const str = EBCDIC_CCSID_37.decode(bin);
   * ```
   */
  decode(bytes: Uint8Array): EBCDIC_CCSID_37;
}

export type EBCDIC_CCSID_37_OBJECT =
  & EBCDIC_CCSID_37_FUNCTION
  & EBCDIC_CCSID_37_STATIC;

export type EBCDIC_CCSID_37 = string & { __ebcdic_ccsid_37: never };
export const EBCDIC_CCSID_37: EBCDIC_CCSID_37_OBJECT = Object.assign(
  (s: string) => ({
    as: () => s as EBCDIC_CCSID_37,
    encode: () => Uint8Array.from(s, EBCDIC_CCSID_37.charCodeAt),
  }),
  {
    charCodeAt: (c: string) => c2b37.get(c as EBCDIC_CCSID_37_CHAR) ?? 0x40,
    fromCharCode: (b: number) => b2c37.get(b as EBCDIC_CCSID_37_BYTE) ?? " ",
    encode: (s: string) => EBCDIC_CCSID_37(s).encode(),
    decode: (b: Uint8Array) =>
      EBCDIC_CCSID_37(
        Array.from(b, EBCDIC_CCSID_37.fromCharCode).join(""),
      ).as(),
  },
);
