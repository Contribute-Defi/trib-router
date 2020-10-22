const fs = require('fs');
const provider = ethers.getDefaultProvider('homestead');
const mnemonic = fs.readFileSync('.secret').toString().trim();
const wallet = ethers.Wallet.fromMnemonic(mnemonic).connect(provider);

let overrides = {
  // The maximum units of gas for the transaction to use
  gasLimit: 3000000,
  gasPrice: ethers.utils.parseUnits('40.0', 'gwei'),
};

async function setup() {
  const pair = "0xe036CCE08cf4E23D33bC6B18e53Caf532AFa8513";
  const tribMinter = "0x0DdfE92234b9DCA2de799736bBBa1D2F25CFC3b8";

  const TribRouter = await ethers.getContractFactory("TribRouter");
  const tribRouter = await TribRouter.deploy(pair, tribMinter, overrides);
  await tribRouter.deployed();

  console.log("npx buidler verify --network mainnet " + tribRouter.address + " " + pair + " " + tribMinter);
};

async function main() {
  await setup();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
