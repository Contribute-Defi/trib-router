usePlugin("@nomiclabs/buidler-ethers");
usePlugin("@nomiclabs/buidler-etherscan");

const fs = require('fs');
const mnemonic = fs.readFileSync(".private").toString().trim();
const mnemonic_secret = fs.readFileSync(".secret").toString().trim();
// This is a sample Buidler task. To learn how to create your own go to
// https://buidler.dev/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.getAddress());
  }
});

// You have to export an object to set up your config
// This object can have the following optional entries:
// defaultNetwork, networks, solc, and paths.
// Go to https://buidler.dev/config/ to learn more
module.exports = {
  mocha: {
     timeout: 50000,
  },
  // This is a sample solc configuration that specifies which version of solc to use
  solc: {
    version: "0.6.6"
  },
  paths: {
    sources: "./contracts/6",
  },
  etherscan: {
    apiKey: "TISS591URX3AHJGI5ZBW47I7KQIVEXTC79",
  },
  networks: {
    buidlerevm: {
      allowUnlimitedContractSize: true,
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/4462c5b2ed764c09a5f7b22d261781f0",
      chainId: 1,
      gas: "auto",
      gasPrice: "auto",
      accounts: {
        mnemonic: mnemonic_secret,
        path: "m/44'/60'/0'/0",
      },
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/4462c5b2ed764c09a5f7b22d261781f0",
      chainId: 3,
      gas: "auto",
      gasPrice: "auto",
      accounts: {
        mnemonic: mnemonic,
        path: "m/44'/60'/0'/0",
      },
    },
    kovan: {
      url: "https://kovan.infura.io/v3/4462c5b2ed764c09a5f7b22d261781f0",
      chainId: 42,
      gas: "auto",
      gasPrice: "auto",
      accounts: {
        mnemonic: mnemonic,
        path: "m/44'/60'/0'/0",
      },
    },
  },
};
