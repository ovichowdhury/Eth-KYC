const Web3 = require('web3');
const Abi = require('../contract-conf/abi.js');
const contractAddresses = require('../contract-conf/contract-addresses.js');


class kycService {

    constructor() { 
        this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
        this.web3.eth.defaultAccount = this.web3.eth.accounts[1];
        this.kycContract = this.web3.eth.contract(Abi.kycAbi);
        this.kycContractInstance = this.kycContract.at(contractAddresses.kycContractAddress);
    }

    getBankInfo(uid, passcode) {
        let estimatedGas = this.kycContractInstance.getBankInfo.estimateGas(uid, passcode);
        console.log("gas price of bank info : ", estimatedGas);
        let result = this.kycContractInstance.getBankInfo(uid, passcode, {value: 0, gas: estimatedGas + 1});
        return result;
    } 
    
    createAccount(
        bankUid, bankPasscode, name, nid, dob, mobileNumber, currentAddress, fatherName, gender
    ) {
        console.log("In cr service");

        let eGas1 = this.kycContractInstance.createAccount.estimateGas(bankUid, bankPasscode, nid, name);
        console.log(eGas1);
        let tx1 = this.kycContractInstance.createAccount(bankUid, bankPasscode, nid, name, {value: 0, gas: eGas1 +1});
        console.log(tx1);

        let eGas2 = this.kycContractInstance.setAccountDOB.estimateGas(bankUid, bankPasscode, nid, dob);
        this.kycContractInstance.setAccountDOB(bankUid, bankPasscode, nid, dob, {value: 0, gas: eGas2 * 10});

        let eGas3 = this.kycContractInstance.setAccountMobileNumber.estimateGas(bankUid, bankPasscode, nid, mobileNumber);
        this.kycContractInstance.setAccountMobileNumber(bankUid, bankPasscode, nid, mobileNumber, {value: 0, gas: eGas3 * 10});

        let eGas4 = this.kycContractInstance.setAccountCurrentAddress.estimateGas(bankUid, bankPasscode, nid, currentAddress);
        this.kycContractInstance.setAccountCurrentAddress(bankUid, bankPasscode, nid, currentAddress, {value: 0, gas: eGas4 * 10});

        let eGas5 = this.kycContractInstance.setAccountFatherName.estimateGas(bankUid, bankPasscode, nid, fatherName);
        this.kycContractInstance.setAccountFatherName(bankUid, bankPasscode, nid, fatherName, {value: 0, gas: eGas5 *10});

        let eGas6 = this.kycContractInstance.setAccountGender.estimateGas(bankUid, bankPasscode, nid, gender);
        this.kycContractInstance.setAccountGender(bankUid, bankPasscode, nid, gender, {value: 0, gas: eGas6 * 10});

    }


}

module.exports = kycService;