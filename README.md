# Trib Router

This Smart Contract facilitates TRIB purchases directly from ETH.

It wraps ETH in WETH and then uses the [Balancer](https://balancer.finance/) pool (WETH/mUSD) to acquire mUSD. It then trades the mUSD for TRIB directly from the Contribute Smart Contract.

ETH -> WETH
WETH -> mUSD
mUSD -> TRIB

## Deployed contracts

### Mainnet

Trib Router - 0x2EfA929Fc3c6F0853B49D8f371220d4Ee4972175

## License

MIT
