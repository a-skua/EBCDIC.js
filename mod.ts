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
  [" ", 0x40],
  [".", 0x4b],
  ["<", 0x4c],
  ["(", 0x4d],
  ["+", 0x4e],
  ["&", 0x50],
  ["*", 0x5c],
  [")", 0x5d],
  [";", 0x5e],
  ["-", 0x60],
  ["/", 0x61],
  [",", 0x6b],
  ["%", 0x6c],
  ["_", 0x6d],
  [">", 0x6e],
  ["?", 0x6f],
  [":", 0x7a],
  ["#", 0x7b],
  ["@", 0x7c],
  ["'", 0x7d],
  ["=", 0x7e],
  ['"', 0x7f],
  ["A", 0xc1],
  ["B", 0xc2],
  ["C", 0xc3],
  ["D", 0xc4],
  ["E", 0xc5],
  ["F", 0xc6],
  ["G", 0xc7],
  ["H", 0xc8],
  ["I", 0xc9],
  ["J", 0xd1],
  ["K", 0xd2],
  ["L", 0xd3],
  ["M", 0xd4],
  ["N", 0xd5],
  ["O", 0xd6],
  ["P", 0xd7],
  ["Q", 0xd8],
  ["R", 0xd9],
  ["S", 0xe2],
  ["T", 0xe3],
  ["U", 0xe4],
  ["V", 0xe5],
  ["W", 0xe6],
  ["X", 0xe7],
  ["Y", 0xe8],
  ["Z", 0xe9],
  ["0", 0xf0],
  ["1", 0xf1],
  ["2", 0xf2],
  ["3", 0xf3],
  ["4", 0xf4],
  ["5", 0xf5],
  ["6", 0xf6],
  ["7", 0xf7],
  ["8", 0xf8],
  ["9", 0xf9],
] as const;

const _ebcdic_ccsid_37 = Symbol("ebcdic_ccsid_37");

const c2b37 = Object.fromEntries(_EBCDIC_CCSID_37) as {
  [T in typeof _EBCDIC_CCSID_37[number] as T[0]]: T[1];
};

const b2c37 = Object.fromEntries(_EBCDIC_CCSID_37.map(([c, b]) => [b, c])) as {
  [T in typeof _EBCDIC_CCSID_37[number] as T[1]]: T[0];
};

/**
 * # Example
 *
 * ```ts
 * // OK
 * const c1: EBCDIC_CCSID_37_CHAR = "A";
 *
 * // NG: Undefined code
 * // const c2: EBCDIC_CCSID_37_CHAR = "あ";
 * ```
 */
export type EBCDIC_CCSID_37_CHAR = typeof _EBCDIC_CCSID_37[number][0];

/**
 * # Example
 *
 * ```ts
 * // OK
 * const c1: EBCDIC_CCSID_37_CODE = 0xc1;
 *
 * // NG: Undefined code
 * // const c2: EBCDIC_CCSID_37_CODE = 0x00;
 * ```
 */
export type EBCDIC_CCSID_37_CODE = typeof _EBCDIC_CCSID_37[number][1];

/**
 * # Example
 *
 * ```ts
 * import { assertEquals } from "@std/assert";
 *
 * const bin = EBCDIC_CCSID_37.encode("HELLO WORLD");
 * assertEquals(bin, Uint8Array.from([0xc8, 0xc5, 0xd3, 0xd3, 0xd6, 0x40, 0xe6, 0xd6, 0xd9, 0xd3, 0xc4]));
 *
 * const str = EBCDIC_CCSID_37.decode(bin);
 * assertEquals(str, "HELLO WORLD" as EBCDIC_CCSID_37);
 * ```
 */
export type EBCDIC_CCSID_37 = string & {
  [_ebcdic_ccsid_37]: never;
};

export interface EBCDIC_CCSID_37_OBJECT {
  /**
   * Alias of `as EBCDIC_CCSID_37`
   *
   * ### Example
   *
   * ```ts
   * import { assertEquals } from "@std/assert";
   *
   * const ebcdic = EBCDIC_CCSID_37("HELLO WORLD").as();
   * assertEquals(ebcdic, "HELLO WORLD");
   * ```
   */
  as(): EBCDIC_CCSID_37;
  /**
   * Encode ASCII to EBCDIC (CCSID 37)
   *
   * ### Example
   *
   * ```ts
   * import { assertEquals } from "@std/assert";
   *
   * const bin = EBCDIC_CCSID_37("HELLO WORLD").encode();
   * assertEquals(bin, Uint8Array.from([0xc8, 0xc5, 0xd3, 0xd3, 0xd6, 0x40, 0xe6, 0xd6, 0xd9, 0xd3, 0xc4]));
   * ```
   */
  encode(): Uint8Array;
  /**
   * Validate EBCDIC (CCSID 37) string
   *
   * ### Example
   *
   * ```ts
   * import { assertEquals } from "@std/assert";
   *
   * const validObj = EBCDIC_CCSID_37("HELLO WORLD");
   * assertEquals(validObj.valid(), true);
   *
   * const invalidObj = EBCDIC_CCSID_37("あ");
   * assertEquals(invalidObj.valid(), false);
   */
  valid(): boolean;
}

export interface EBCDIC_CCSID_37_STATIC {
  /**
   * Convert ASCII to EBCDIC Code (CCSID 37)
   *
   * ### Example
   *
   * ```ts
   * import { assertEquals } from "@std/assert";
   *
   * const code = EBCDIC_CCSID_37.charCodeAt("A");
   * assertEquals(code, 0xc1);
   * ```
   */
  charCodeAt(c: EBCDIC_CCSID_37_CHAR): EBCDIC_CCSID_37_CODE;
  /**
   * Convert EBCDIC Code (CCSID 37) to ASCII
   *
   * ### Example
   *
   * ```ts
   * import { assertEquals } from "@std/assert";
   *
   * const char = EBCDIC_CCSID_37.fromCharCode(0xc1);
   * assertEquals(char, "A");
   * ```
   */
  fromCharCode(code: EBCDIC_CCSID_37_CODE): EBCDIC_CCSID_37_CHAR;

  /**
   * Encode ASCII to EBCDIC (CCSID 37)
   *
   * ### Example
   * ```ts
   * import { assertEquals } from "@std/assert";
   *
   * const bin = EBCDIC_CCSID_37.encode("HELLO WORLD");
   * assertEquals(bin, Uint8Array.from([0xc8, 0xc5, 0xd3, 0xd3, 0xd6, 0x40, 0xe6, 0xd6, 0xd9, 0xd3, 0xc4]));
   * ```
   */
  encode(str: string): Uint8Array;

  /**
   * Decode EBCDIC (CCSID 37) to ASCII
   *
   * ### Example
   *
   * ```ts
   * import { assertEquals } from "@std/assert";
   *
   * const str = EBCDIC_CCSID_37.decode(Uint8Array.from([0xc8, 0xc5, 0xd3, 0xd3, 0xd6, 0x40, 0xe6, 0xd6, 0xd9, 0xd3, 0xc4]));
   * assertEquals(str, "HELLO WORLD");
   * ```
   */
  decode(bytes: Uint8Array): EBCDIC_CCSID_37;

  /**
   * Validate EBCDIC (CCSID 37) string
   */
  valid(str: string): str is EBCDIC_CCSID_37;
}

/**
 * # Example
 *
 * ```ts
 * import { assertEquals } from "@std/assert";
 *
 * const obj = EBCDIC_CCSID_37("HELLO WORLD");
 *
 * const str: EBCDIC_CCSID_37 = obj.as();
 * assertEquals(str, "HELLO WORLD" as EBCDIC_CCSID_37);
 *
 * const bin = obj.encode();
 * assertEquals(bin, Uint8Array.from([0xc8, 0xc5, 0xd3, 0xd3, 0xd6, 0x40, 0xe6, 0xd6, 0xd9, 0xd3, 0xc4]));
 *
 * const decoded = EBCDIC_CCSID_37.decode(bin);
 * assertEquals(decoded, "HELLO WORLD" as EBCDIC_CCSID_37);
 * ```
 */
export const EBCDIC_CCSID_37:
  & ((str: string) => EBCDIC_CCSID_37_OBJECT)
  & EBCDIC_CCSID_37_STATIC = Object.assign(
    (s: string) => ({
      as() {
        return s as EBCDIC_CCSID_37;
      },
      encode() {
        return Uint8Array.from(
          s,
          (c) => EBCDIC_CCSID_37.charCodeAt(c as EBCDIC_CCSID_37_CHAR),
        );
      },
      valid() {
        for (const c of s) {
          if (!(c in c2b37)) return false;
        }
        return true;
      },
    }),
    {
      charCodeAt(c: EBCDIC_CCSID_37_CHAR) {
        return c2b37[c];
      },
      fromCharCode(b: EBCDIC_CCSID_37_CODE) {
        return b2c37[b];
      },
      encode(s: string) {
        return EBCDIC_CCSID_37(s).encode();
      },
      decode(b: Uint8Array) {
        return EBCDIC_CCSID_37(
          Array.from(
            b,
            (c) => EBCDIC_CCSID_37.fromCharCode(c as EBCDIC_CCSID_37_CODE),
          ).join(""),
        ).as();
      },
      valid(s: string): s is EBCDIC_CCSID_37 {
        return EBCDIC_CCSID_37(s).valid();
      },
    },
  );
