# Alphanumeric Code Generator
Transform a number into an alphanumeric code using a custom character string

## Installation
```sh
npm i @elpandev/alphanumeric_code_generator
```

## Usage
```sh
import { CodeGenerator } from '@elpandev/alphanumeric_code_generator'

const generator = new CodeGenerator("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890")
const number    = 1
const length    = 7
const code      = generator.generate(number, length) // AAAAAAA

const code1 = generator.generate(1, 5) // AAAAA
const code2 = generator.generate(2, 5) // AAAAB
const code3 = generator.generate(3, 5) // AAAAC
const code4 = generator.generate(4, 5) // AAAAD
const code5 = generator.generate(5, 5) // AAAAE

const code157415 = generator.generate(157415, 4) // Ao77
const code243678 = generator.generate(243678, 4) // BBYR
const code278593 = generator.generate(278593, 4) // BKda
const code121273 = generator.generate(121273, 4) // AfiA
const code263712 = generator.generate(263712, 4) // BGlZ
```