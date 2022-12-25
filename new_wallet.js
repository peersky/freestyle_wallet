const ethers = require("ethers");
require("dotenv").config();

const MNEMONIC = process.env.MNEMONIC;
const PASSWORD = process.env.PASSWORD;
const INDEX = process.env.INDEX;
let mnemonic_hash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(MNEMONIC));
if (INDEX && INDEX != 0) {
  const iterations = Number(INDEX);
  let cnt = 0;
  while (cnt < iterations) {
    cnt++;
    mnemonic_hash = ethers.utils.keccak256(mnemonic_hash);
  }
}
const signer = new ethers.Wallet(ethers.utils.keccak256(mnemonic_hash));
signer.encrypt(PASSWORD).then((r) => console.log(r));
