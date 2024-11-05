# EBCDIC.js

EBCDIC parser

## Usage

```js
import { EBCDIC_CCSID_37 } from "@askua/ebcdic";

// Encode
const bin = EBCDIC_CCSID_37.encode("Hello, world!");

// Decode
const str = EBCDIC_CCSID_37.decode(bin);
```
