const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('Web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  "scissors shed cheese reason walnut thing swift correct gown train fury mass",
  "https://rinkeby.infura.io/v3/592cdbcf0ad74d12ada855b7215c1f3a"
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account ', accounts[ 0 ]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({
        data: "0x" + bytecode,
        arguments: ["Hi there!"],
      })
        .send({ gas: '1000000', from: accounts[ 1 ] }); 
    
    console.log('Contract deployed to', result.options.address)
};

deploy();

// contract address
// 0x6e9df1659eac9339f4b5bd7fbde02a7145074cc3;