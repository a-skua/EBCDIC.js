# EBCDIC.js

EBCDIC parser

## Installation

```sh
npx jsr add @askua/ebcdic
```

Published at [JSR](https://jsr.io/@askua/ebcdic)

## Usage

```js
import { EBCDIC_CCSID_37 } from "@askua/ebcdic";

// Encode
const bin = EBCDIC_CCSID_37.encode("Hello, world!");

// Decode
const str = EBCDIC_CCSID_37.decode(bin);
```

## Benchmark

```txt
$ deno bench
    CPU | Apple M2
Runtime | Deno 2.1.9 (aarch64-apple-darwin)

/a-skua/EBCDIC.js/mod_bench.ts

benchmark                time/iter (avg)        iter/s      (min … max)           p75      p99     p995
------------------------ ----------------------------- --------------------- --------------------------
Dynamic import                    1.2 µs       834,600 (  1.2 µs …   1.3 µs)   1.2 µs   1.3 µs   1.3 µs
EBCDIC_CCSID_37.encode          806.0 ns     1,241,000 (793.7 ns … 828.3 ns) 808.2 ns 828.3 ns 828.3 ns
EBCDIC_CCSID_37.decode          652.4 ns     1,533,000 (634.8 ns … 713.9 ns) 656.8 ns 713.9 ns 713.9 ns
```
