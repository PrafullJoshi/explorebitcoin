var bitcore = require('bitcore-lib');
var Mnemonic = require('bitcore-mnemonic');
var explorers = require('bitcore-explorers');



// var mnemonic_words = new Mnemonic(256, Mnemonic.Words.ENGLISH);
// var mnemonic_phrase = mnemonic_words.phrase;
// Prafull
var mnemonic_phrase = 'dove silk service lobster stumble private thunder have prefer hour flat ancient brother walk fancy mail limit alien picnic fall vital pulp position green';
console.log("Prafull");


// Shripad
/*var mnemonic_phrase = 'prosper tired never program mammal insane game gown opinion ecology leisure afraid crunch perfect final fence claw sample transfer idea scrub item voice debris';
console.log("Shripad");*/


var mnemonic_words = new Mnemonic(mnemonic_phrase, Mnemonic.Words.ENGLISH);
console.log('\n');
console.log('Mnemonic Phrase -');
console.log(mnemonic_phrase);
console.log('\n');

var hdPrivateKeyMaster = mnemonic_words.toHDPrivateKey('', bitcore.Networks.testnet);
//console.log('hdPrivateKeyMaster -');
//console.log(hdPrivateKeyMaster);

var hdPublicKeyMaster = hdPrivateKeyMaster.hdPublicKey;
//console.log('hdPublicKeyMaster -');
//console.log(hdPublicKeyMaster);

var privateKeyMaster = hdPrivateKeyMaster.privateKey;
//console.log('privateKeyMaster -');
//console.log(privateKeyMaster);

var publicKeyMaster = hdPublicKeyMaster.publicKey;
//console.log('publicKeyMaster -');
//console.log(publicKeyMaster);

var masterAddress = publicKeyMaster.toAddress();
console.log('Master Private HD Key - ', hdPrivateKeyMaster.toString());
console.log('Master Private Key - ', privateKeyMaster.toString());
console.log('Master Public HD Key - ', hdPublicKeyMaster.toString());
console.log('Master Public Key - ', publicKeyMaster.toString());
console.log('Master Address - ', masterAddress.toString());

var derivationPathTestnet = "m/44'/1'";
var derivationAccount = "/0'"; // First Account of User
var derivationForChangeOrExternal = "/0"; // 0 is External and 1 is for Change Address
var derivationAddressIndexFirst = "/0";
var derivationAddressIndexSecond = "/1";
var derivationAddressIndexThird = "/2";

// FIRST ADDRESS
var firstExternalAccountDerivationPath = derivationPathTestnet + derivationAccount + derivationForChangeOrExternal + derivationAddressIndexFirst;
var derivedHDPrivateKey_first_external = hdPrivateKeyMaster.derive(firstExternalAccountDerivationPath);
var derivedPrivateKey_first_external = derivedHDPrivateKey_first_external.privateKey;
var derivedHDPublicKey_first_external = derivedHDPrivateKey_first_external.hdPublicKey;
var derivedPublicKey_first_external = derivedHDPublicKey_first_external.publicKey;
var address_first_external = derivedPublicKey_first_external.toAddress();
console.log('\n');
console.log('Deriving First Address');
console.log('Derivation Path - ', firstExternalAccountDerivationPath);
console.log('Derived HD Private Key - ', derivedHDPrivateKey_first_external.toString());
console.log('Derived Private Key -  ', derivedPrivateKey_first_external.toString());
console.log('Derived HD Public Key - ', derivedHDPublicKey_first_external.toString());
console.log('Derived Public Key - ', derivedPublicKey_first_external.toString());
console.log('Derived Address - ', address_first_external.toString());

// SECOND ADDRESS
var secondExternalAccountDerivationPath = derivationPathTestnet + derivationAccount + derivationForChangeOrExternal + derivationAddressIndexSecond;
var derivedHDPrivateKey_second_external = hdPrivateKeyMaster.derive(secondExternalAccountDerivationPath);
var derivedPrivateKey_second_external = derivedHDPrivateKey_second_external.privateKey;
var derivedHDPublicKey_second_external = derivedHDPrivateKey_second_external.hdPublicKey;
var derivedPublicKey_second_external = derivedHDPublicKey_second_external.publicKey;
var address_second_external = derivedPublicKey_second_external.toAddress();
console.log('\n');
console.log('Deriving Second Address');
console.log('Derivation Path - ', secondExternalAccountDerivationPath);
console.log('Derived HD Private Key - ', derivedHDPrivateKey_second_external.toString());
console.log('Derived Private Key -  ', derivedPrivateKey_second_external.toString());
console.log('Derived HD Public Key - ', derivedHDPublicKey_second_external.toString());
console.log('Derived Public Key - ', derivedPublicKey_second_external.toString());
console.log('Derived Address - ', address_second_external.toString());

// THIRD ADDRESS
var thirdExternalAccountDerivationPath = derivationPathTestnet + derivationAccount + derivationForChangeOrExternal + derivationAddressIndexThird;
var derivedHDPrivateKey_third_external = hdPrivateKeyMaster.derive(thirdExternalAccountDerivationPath);
var derivedPrivateKey_third_external = derivedHDPrivateKey_third_external.privateKey;
var derivedHDPublicKey_third_external = derivedHDPrivateKey_third_external.hdPublicKey;
var derivedPublicKey_third_external = derivedHDPublicKey_third_external.publicKey;
var address_third_external = derivedPublicKey_third_external.toAddress();
console.log('\n');
console.log('Deriving Third Address');
console.log('Derivation Path - ', thirdExternalAccountDerivationPath);
console.log('Derived HD Private Key - ', derivedHDPrivateKey_third_external.toString());
console.log('Derived Private Key -  ', derivedPrivateKey_third_external.toString());
console.log('Derived HD Public Key - ', derivedHDPublicKey_third_external.toString());
console.log('Derived Public Key - ', derivedPublicKey_third_external.toString());
console.log('Derived Address - ', address_third_external.toString());

// HSM Keys Derivation
console.log('\n');
console.log('Deriving HSM Keys and Addresses');

var hsmprivateKey1 = new bitcore.PrivateKey(bitcore.Networks.testnet);
var hsmpublicKey1 = new bitcore.PublicKey(hsmprivateKey1);
var hsmKey1Address = hsmprivateKey1.toAddress(bitcore.Networks.testnet);
console.log('HSM Private Key 1 - ', hsmprivateKey1.toString());
console.log('HSM Public Key 1 - ', hsmpublicKey1.toString());
console.log('Address for HSM Key 1 - ', hsmKey1Address.toString());

var hsmprivateKey2 = new bitcore.PrivateKey(bitcore.Networks.testnet);
var hsmpublicKey2 = new bitcore.PublicKey(hsmprivateKey2);
var hsmKey2Address = hsmprivateKey2.toAddress(bitcore.Networks.testnet);
console.log('HSM Private Key 2 - ', hsmprivateKey2.toString());
console.log('HSM Public Key 2 - ', hsmpublicKey2.toString());
console.log('Address for HSM Key 2 - ', hsmKey2Address.toString());


// Deriving Multisig Address for first Derived address of User
console.log('\n');
console.log('This Multisig address will comprised of Users Public Key and 2 HSM Keys');
var publicKeys = [
    new bitcore.PublicKey(derivedPublicKey_first_external.toString()),
    new bitcore.PublicKey(hsmpublicKey1.toString()),
    new bitcore.PublicKey(hsmpublicKey2.toString())
];
var requiredSignatures = 2;
var multisigAddress = bitcore.Address.createMultisig(publicKeys, requiredSignatures, bitcore.Networks.testnet);

console.log('Multisig 2/3 Address - ', multisigAddress.toString());
console.log('\n');

/*var transaction = new bitcore.Transaction()
    .from({"address":"mjrCYXeFamawxKjYnECuDdbjqWf6vNgiYk","txid":"9bc8e442268b4e94c2c8670074e3dd36930f9b97f671b90ecb0259751674d5a9","vout":0,"scriptPubKey":"76a9142f844d2564ffa742bd5fe9dd3e8d18ab0f6a359088ac","amount":1.1})
    .to(multisigAddress.toString(), 50000000)
    .to(address_second_external.toString(), 20000000)
    .to(address_first_external.toString(), 40000000)
    .sign(derivedPrivateKey_first_external.toString());*/

var transaction = new bitcore.Transaction()
    .from({"address":"mjrCYXeFamawxKjYnECuDdbjqWf6vNgiYk","txid":"9bc8e442268b4e94c2c8670074e3dd36930f9b97f671b90ecb0259751674d5a9","vout":0,"scriptPubKey":"76a9142f844d2564ffa742bd5fe9dd3e8d18ab0f6a359088ac","amount":1.1})
    .to('mimUmBf3rPepuS2zeMJELHYmH1Jc1DpFew', 20000000)
    .change('mjrCYXeFamawxKjYnECuDdbjqWf6vNgiYk', 80000000);

console.log('\n');
console.log('UNSigned Transaction');
console.log(transaction.toJSON());
console.log('\n');
console.log('Serialized UNSigned Transaction');
var unsignedSerializedTransaction = transaction.toObject(); // Send unsafe as True here, to avoid signed check
console.log(unsignedSerializedTransaction);
console.log('\n');
console.log('Transaction Fully signed?', transaction.isFullySigned());

var unsignedTransaction = new bitcore.Transaction(unsignedSerializedTransaction);
console.log('\n');
console.log('New Serialized UNSigned Transaction');
console.log(unsignedTransaction.toString());
var signedTransaction = unsignedTransaction.sign('324a8b27dc9e17f61418bd8be2e0a4b2ec67e288d9dd7a06a4c9ac0b207d8927');
console.log('\n');
console.log('SIGNED Transaction');
console.log(signedTransaction.toJSON());
console.log('\n');
console.log('Serialized SIGNED Transaction');
console.log(signedTransaction.serialize());
console.log('\n');
console.log('Transaction Fully signed?', signedTransaction.isFullySigned());

var signature = signedTransaction.getSignatures('324a8b27dc9e17f61418bd8be2e0a4b2ec67e288d9dd7a06a4c9ac0b207d8927')[0];
console.log(JSON.stringify(signature));
console.log(signature.toObject());
var derSignature = signature.signature.toString();
console.log(derSignature); // Outputs a DER signature
console.log(signature.sigtype);

var cryptoSig = bitcore.crypto.Signature.fromString(derSignature);
console.log(cryptoSig.r);
console.log(cryptoSig.r.toNumber());
console.log(cryptoSig.s);
console.log(cryptoSig.s.toNumber());
// Check for UTXOs

console.log('\n');
console.log('Get a random hash, sign it with Private key and get signature r and s value from it.')

var buffer = bitcore.crypto.Random.getRandomBuffer(256);
console.log(buffer);
var hashToSign = bitcore.crypto.Hash.sha256(buffer);
console.log(hashToSign);
var ecdsa = new bitcore.crypto.ECDSA();
ecdsa.hashbuf = hashToSign;
ecdsa.privkey = new bitcore.PrivateKey(derivedPrivateKey_first_external.toString());
ecdsa.pubkey = new bitcore.PublicKey(derivedPublicKey_first_external.toString());
ecdsa.signRandomK();
ecdsa.calci();
var r = ecdsa.sig.r;
var s = ecdsa.sig.s;
console.log(bitcore.crypto.BN.fromBuffer(hashToSign));
console.log(r.toNumber());
console.log(s.toNumber());

console.log('hex to buffer - ');
var buffer = bitcore.util.buffer.hexToBuffer('a1101dbcbc102670d9321e02e0bd38348edb9b61a5590c0af7abb5c4090e3122');
console.log(buffer);

/*
var client = new explorers.Insight(bitcore.Networks.testnet);

client.getUnspentUtxos(address_first_external.toString(), function(err, utxos) {
    console.log('UTXOs JSON:', JSON.stringify(utxos), err);
    console.log('UTXOs:', utxos[0].satoshis);
    var unit = new bitcore.Unit.fromSatoshis(utxos[0].satoshis);
    var rate = 1; // BTC/BTC exchange rate
    console.log('Units', unit.BTC, unit.mBTC, unit.bits, unit.satoshis, unit.atRate(rate));
});
*/
