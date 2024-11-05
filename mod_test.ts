import { assertEquals } from "@std/assert";
import { EBCDIC_CCSID_37 } from "@askua/ebcdic";

Deno.test("EBCDIC_CCSID_37.charCodeAt()", () => {
  const tests = [
    [" ", 0x40],
    ["A", 0xc1],
    ["B", 0xc2],
    ["C", 0xc3],
    ["I", 0xc9],
    ["J", 0xd1],
    ["R", 0xd9],
    ["S", 0xe2],
    ["Z", 0xe9],
    ["0", 0xf0],
    ["9", 0xf9],
  ] as const;

  for (const [c, expected] of tests) {
    assertEquals(
      EBCDIC_CCSID_37.charCodeAt(c),
      expected,
      `EBCDIC_CCSID_37.charCodeAt(${c}) -> ${expected}`,
    );
  }
});

Deno.test("EBCDIC_CCSID_37.fromCharCode()", () => {
  const tests = [
    [0x40, " "],
    [0xc1, "A"],
    [0xc2, "B"],
    [0xc3, "C"],
    [0xc9, "I"],
    [0xd1, "J"],
    [0xd9, "R"],
    [0xe2, "S"],
    [0xe9, "Z"],
    [0xf0, "0"],
    [0xf9, "9"],
  ] as const;

  for (const [b, expected] of tests) {
    assertEquals(
      EBCDIC_CCSID_37.fromCharCode(b),
      expected,
      `EBCDIC_CCSID_37.fromCharCode(${b}) -> ${expected}`,
    );
  }
});

Deno.test("EBCDIC_CCSID_37.encode()", () => {
  const tests = [
    [
      "HELLO WORLD",
      Uint8Array.from([
        0xc8,
        0xc5,
        0xd3,
        0xd3,
        0xd6,
        0x40,
        0xe6,
        0xd6,
        0xd9,
        0xd3,
        0xc4,
      ]),
    ],
  ] as const;

  for (const [s, expected] of tests) {
    assertEquals(
      EBCDIC_CCSID_37.encode(s),
      expected,
      `EBCDIC_CCSID_37.encode(${s}) -> ${expected}`,
    );
  }
});

Deno.test("EBCDIC_CCSID_37.decode()", () => {
  const tests = [
    [
      Uint8Array.from([
        0xc8,
        0xc5,
        0xd3,
        0xd3,
        0xd6,
        0x40,
        0xe6,
        0xd6,
        0xd9,
        0xd3,
        0xc4,
      ]),
      "HELLO WORLD",
    ],
  ] as const;

  for (const [bytes, expected] of tests) {
    assertEquals(
      EBCDIC_CCSID_37.decode(bytes),
      expected as EBCDIC_CCSID_37,
      `EBCDIC_CCSID_37.decode(${bytes}) -> ${expected}`,
    );
  }
});
