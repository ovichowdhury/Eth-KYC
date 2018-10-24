const express = require('express');
const accountRouter = express.Router();
const Web3 = require('web3');
const Abi = require('../contract-conf/abi.js');
const contractAddresses = require('../contract-conf/contract-addresses.js');


const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
web3.eth.defaultAccount = web3.eth.accounts[1];
var kycContract = web3.eth.contract(Abi.kycAbi);
var kycContractInstance = kycContract.at(contractAddresses.kycContractAddress);

// for accessing bank information
accountRouter.post('/get-bank-info', function(req, res){
    let estimatedGas = kycContractInstance.getBankInfo.estimateGas(req.body.bank_uid, req.body.bank_passcode);
    console.log(estimatedGas);
    kycContractInstance.getBankInfo(req.body.bank_uid, req.body.bank_passcode, {value: 0, gas: estimatedGas}, (error, result) => {
        if(error){
          console.log(error);
          return res.status(500).json({
              message : "error"
          });
        }
        else{
            return res.status(200).json({
                bank_name : result
            });
        }
      });
});

// for creating bank account
accountRouter.post('/create-account', function(req, res){
    let estimatedGas = kycContractInstance.createAccount.estimateGas(
        req.body.bank_uid,
        req.body.bank_passcode,
        req.body.customer_nid,
        req.body.customer_name,
        req.body.customer_age
        );

    kycContractInstance.createAccount(
        req.body.bank_uid,
        req.body.bank_passcode,
        req.body.customer_nid,
        req.body.customer_name,
        req.body.customer_age,
        {value: 0, gas: estimatedGas},
        (error, result) => {
            if(error){
                console.log(error);
                res.status(500).json({
                    message : "error"
                });
            }
            else{
                res.status(200).json({
                    tx_hash : result
                });
            }
        });
});

// for accessing account
accountRouter.post('/access-account', function(req, res){
    let estimatedGas = kycContractInstance.accessAccount.estimateGas(req.body.bank_uid, req.body.bank_passcode, req.body.customer_nid);
    kycContractInstance.accessAccount(
        req.body.bank_uid,
        req.body.bank_passcode,
        req.body.customer_nid,
        {value: 0, gas: estimatedGas},
        (err, result) => {
            if(err){
                res.status(500).json({
                    message : "error"
                });
            }
            else{
                res.status(200).json({
                    name : result[0],
                    nid : result[1],
                    age : result[2],
                    seeder_bank : result[3],
                    time : result[4]
                });
            }
        });
});

// for updating customer name
accountRouter.post('/update-name', function(req, res){
    let estimatedGas = kycContractInstance.updateAccountName.estimateGas(
        req.body.bank_uid,
        req.body.bank_passcode,
        req.body.customer_nid,
        req.body.customer_newname
        );

        kycContractInstance.updateAccountName(
            req.body.bank_uid,
            req.body.bank_passcode,
            req.body.customer_nid,
            req.body.customer_newname,
            {value: 0, gas: estimatedGas},
            (err, result) => {
                if(err){
                    res.status(500).json({
                        message : "error"
                    });
                }
                else{
                    res.status(200).json({
                        tx_hash : result
                    });
                }
        });

});

// for updating customer nid
accountRouter.post('/update-nid', function(req, res){
    let estimatedGas = kycContractInstance.updateAccountNid.estimateGas(
        req.body.bank_uid,
        req.body.bank_passcode,
        req.body.customer_nid,
        req.body.customer_newnid
        );

        kycContractInstance.updateAccountNid(
            req.body.bank_uid,
            req.body.bank_passcode,
            req.body.customer_nid,
            req.body.customer_newnid,
            {value: 0, gas: estimatedGas},
            (err, result) => {
                if(err){
                    res.status(500).json({
                        message : "error"
                    });
                }
                else{
                    res.status(200).json({
                        tx_hash : result
                    });
                }
        });

});


// for updating customer age
accountRouter.post('/update-age', function(req, res){
    let estimatedGas = kycContractInstance.updateAccountAge.estimateGas(
        req.body.bank_uid,
        req.body.bank_passcode,
        req.body.customer_nid,
        req.body.customer_newage
        );

        kycContractInstance.updateAccountAge(
            req.body.bank_uid,
            req.body.bank_passcode,
            req.body.customer_nid,
            req.body.customer_newage,
            {value: 0, gas: estimatedGas},
            (err, result) => {
                if(err){
                    res.status(500).json({
                        message : "error"
                    });
                }
                else{
                    res.status(200).json({
                        tx_hash : result
                    });
                }
        });

});


module.exports = accountRouter;

