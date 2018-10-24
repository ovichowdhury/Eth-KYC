var kycAbi = [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_uid",
          "type": "string"
        },
        {
          "name": "_passcode",
          "type": "string"
        }
      ],
      "name": "registerNewBank",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getBankCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAccountCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_uid",
          "type": "string"
        },
        {
          "name": "_passcode",
          "type": "string"
        }
      ],
      "name": "getBankInfo",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_bankUid",
          "type": "string"
        },
        {
          "name": "_bankPass",
          "type": "string"
        },
        {
          "name": "_customerNid",
          "type": "string"
        },
        {
          "name": "_customerName",
          "type": "string"
        },
        {
          "name": "_customerAge",
          "type": "uint256"
        }
      ],
      "name": "createAccount",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_bankUid",
          "type": "string"
        },
        {
          "name": "_bankPass",
          "type": "string"
        },
        {
          "name": "_customerNid",
          "type": "string"
        }
      ],
      "name": "accessAccount",
      "outputs": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "nid",
          "type": "string"
        },
        {
          "name": "age",
          "type": "uint256"
        },
        {
          "name": "seederBank",
          "type": "string"
        },
        {
          "name": "time",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_bankUid",
          "type": "string"
        },
        {
          "name": "_bankPass",
          "type": "string"
        },
        {
          "name": "_customerNid",
          "type": "string"
        },
        {
          "name": "newName",
          "type": "string"
        }
      ],
      "name": "updateAccountName",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_bankUid",
          "type": "string"
        },
        {
          "name": "_bankPass",
          "type": "string"
        },
        {
          "name": "_customerNid",
          "type": "string"
        },
        {
          "name": "newNid",
          "type": "string"
        }
      ],
      "name": "updateAccountNid",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_bankUid",
          "type": "string"
        },
        {
          "name": "_bankPass",
          "type": "string"
        },
        {
          "name": "_customerNid",
          "type": "string"
        },
        {
          "name": "newAge",
          "type": "uint256"
        }
      ],
      "name": "updateAccountAge",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];


module.exports = {
    kycAbi
};