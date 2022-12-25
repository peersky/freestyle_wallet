# Free style wallet 

Generate bkockchain wallets from your own mnemonic. 

This repository is simple and very transparent solution using only ethersjs and dotenv

NB: Make sure your mnemonic has high entropy value!

## Algorithm

Mnemonic -> keccak256 -> repeat keccak256 for INDEX times -> Generate Encrypted JSON


## Usage

set `.env` file:
```
MNEMONIC=<MNEMONIC_FOR_YOUR_WALLET>
PASSWORD=<password_to_encrypt_wallet>
INDEX=<wallet index to generate>
```
then run:
```
node index.js > key.json
# clean your secrets
rm .env
```



Say thannks:
`0xdf5afc4f8128a56bf8b3fbfc93b2508b444a95fc`


