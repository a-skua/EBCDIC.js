import { EBCDIC_CCSID_37 } from "@askua/ebcdic";

Deno.bench("Dynamic import", async () => {
  await import("@askua/ebcdic");
});

Deno.bench("EBCDIC_CCSID_37.encode", () => {
  EBCDIC_CCSID_37.encode("HELLO WORLD");
});

Deno.bench("EBCDIC_CCSID_37.decode", () => {
  EBCDIC_CCSID_37.decode(Uint8Array.from([
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
  ]));
});
