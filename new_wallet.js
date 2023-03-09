#!/usr/bin/env node
const ethers = require("ethers");
var argv = require("yargs/yargs")(process.argv.slice(2))
  .positional("m", {
    describe: "mnemonic for a new wallet",
    type: "string",
  })
  .positional("p", {
    describe: "password to encrypt key",
    type: "string",
  })
  .positional("i", {
    describe: "account index to create",
    type: "number",
  })
  .demandOption(["p", "m", "i"]).argv;

{
  const MNEMONIC = argv.m;
  const PASSWORD = argv.p;
  const INDEX = argv.i;
  console.log(MNEMONIC, PASSWORD, INDEX);
  let mnemonic_hash = ethers.utils.keccak256(
    ethers.utils.toUtf8Bytes(MNEMONIC)
  );
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
}
