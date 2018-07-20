var bitcore = require('bitcore-lib');
var rand_buffer = bitcore.crypto.Random.getRandomBuffer(32);
var rand_number = bitcore.crypto.BN.fromBuffer(rand_buffer);
console.log('Random Number: ' + rand_number);

var address = new bitcore.PrivateKey(rand_number).toAddress();
console.log('Livenet Address: ' + address);

var testnetAddress = new bitcore.PrivateKey(rand_number).toAddress('testnet');
console.log('Testnet Address: ' + testnetAddress);
