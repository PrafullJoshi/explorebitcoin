var bitcore = require('bitcore-lib');
console.log('\n');

// Generating Private Key
// bitcore.PrivateKey('testnet').toWIF();

var privateKeyWIF = 'cVpYSEtF353G5i86ktwafCig3jUqUbhiUbpeBA8AR4p2jxsDkkj4'; // Wallet Import Format
var privateKey = bitcore.PrivateKey.fromWIF(privateKeyWIF);
var address = privateKey.toAddress();
 // console.log('Address');
 // console.log(address);
// <Address: mgavKbWoUS3hfXdLAAasSpMXw7Q16jZGZL, type: pubkeyhash, network: testnet>

var value = new Buffer('this is a way to generate an address from a string--risky--not random--guessable!!!');
var hash = bitcore.crypto.Hash.sha256(value);
var bn = bitcore.crypto.BN.fromBuffer(hash);
var address2 = new bitcore.PrivateKey(bn, 'testnet').toAddress();
// console.log('Address2');
// console.log(address2);

var explorers = require('bitcore-explorers');
var insight = new explorers.Insight();
 
insight.getUnspentUtxos(address, function(err, utxos) {
  if (err) {
    // Handle errors... 
    console.error(err);
  } else {
    // Maybe use the UTXOs to create a transaction 
    console.log(utxos);
  }
});
