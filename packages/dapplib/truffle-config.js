require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remind evil journey kitchen orange syrup'; 
let testAccounts = [
"0xbf252b07ec287e0509519e6da70c95a1d64a9a7196f5826147f289f450b5f172",
"0xfd9583f2d29992c3a9da6a44f8df76656e890f3283eef2517ed4a8e030161e52",
"0xf8a345aee2271c7405881fb2672488d63b9f60930504afebe5a8889346cad079",
"0x462539534a578f86f52ca2b835d230be835e0e978ad5214bbbae275b95d56d46",
"0x05a4d7542b72b102c16e8a1bb4305f685c6122f7ab4d289a79206cfbecde8b20",
"0xb88b68292b511e91439d1f76e6abce72e4bb0050ccb221304f5e577ac84d6ea1",
"0x4d64c4e732f45e23827fd5a9a1a589bffb4b6e2e634073e138fab9722fcbf33a",
"0x736581e91e0108ed3a7b741a6c2c72d35fa520754defa06f4c95d27886f7becc",
"0xbd8165462249e22624c1fb30baf06b756b894bf0c0850d0ccb0325983ea484b3",
"0x0ca788c34bcdc3812f9b0ceb5651e7d2ce39a0dbb051dfea9dd807e15e8120f3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
