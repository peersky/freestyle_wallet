# Free style wallet

Generate bkockchain wallets from your own mnemonic.

This repository is simple and very transparent solution using only ethersjs and yargs

NB: Make sure your mnemonic has high entropy value!

## Algorithm

Mnemonic -> toUtf8Bytes -> keccak256 -> repeat keccak256 for INDEX times -> Generate Encrypted JSON

## Usage

```
npm i -g @peersky/freestyle-wallet
```

```
Positionals:
  m  mnemonic for a new wallet                                          [string]
  p  password to encrypt key                                            [string]
  i  account index to create                                            [number]

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
✨  Done in 1.76s.
```

run as

`node node_wallet.js -p $PWD -m $M -i $I > key.json`

or

`yarn freestyle -p $PWD -m $M -i $I > key.json`