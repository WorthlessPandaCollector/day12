const ethers = require("ethers");
const { providers } = require("./bundle");


document.addEventListener("click", function() {
    alert("hello");
});

const button = document.getElementById("my-button");

  
button.addEventListener("click", function(){

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log("fuckfof");
    provider.send("eth_requestAccounts", []).then(addresses => {
        console.log(addresses);
        const address = addresses[0];
        console.log(address);

        const div = document.getElementById("ethereum-address");
        div.innerHTML = `Address: ${address}`;

        provider.getBalance(address).then(balance => {
            console.log(balance.toString());
        const divbalanace = document.getElementById("ethereum-balance");
        divbalanace.innerHTML = `Balance: ${balance}`;


        const format = ethers.utils.formatEther(balance);
            console.log("MY ETH BALANCE IS: ", format);

        const diveth = document.getElementById("eth-format")
        diveth.innerHTML = `Formmating from wei to eth: ${format}`;



        provider.getBlockNumber().then(blockNumber => {
            console.log(blockNumber);
        const divBlockNumber = document.getElementById("block-number");
        divBlockNumber.innerHTML = `Current Ethereum Block Number is: ${blockNumber}`;
        
        
        provider.getGasPrice().then(gasPrice => {
            console.log(gasPrice);
            const formatgas = ethers.utils.formatUnits(gasPrice, "gwei");
            console.log(formatgas, " gwei");
        const divGasPrice = document.getElementById("gas-price");
        divGasPrice.innerHTML = `GAS: ${formatgas} gwei`;
        

        provider.getNetwork().then(getChainID => {
            console.log(getChainID);
        const divChainID = document.getElementById("chain-id");
        divChainID.innerHTML = `CURRENT NETWORK|ENS|CHAIN ID:  ${getChainID.name} | ${getChainID.ensAddress} | ${getChainID.chainId}`;

        })

       
        })


    
    
        })

        })

    })

})



const promptbutton = document.getElementById("prompt-test");

promptbutton.addEventListener("click", function(){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const input = prompt("ENTER TEXT IN HEEEERE");



    provider.resolveName(input).then(input1 => {
        console.log(input1);
        const divensprompt = document.getElementById("ens-prompt");
        divensprompt.innerHTML = `ENS ADDRESS for ${input} is <a href="https://etherscan.io/address/${input1}"> ${input1} </a>`;


    });





})



         

