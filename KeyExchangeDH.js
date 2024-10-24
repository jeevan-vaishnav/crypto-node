//Key Exchange with Diffie-Hellman

const crypto = require('crypto');

//User a generate keys
const alice = crypto.createECDH('secp256k1');
const aliceKey = alice.generateKeys();
// console.log(`alice: ${alice} aliceKey: ${aliceKey}`);

//User B 
const bob = crypto.createECDH('secp256k1');
const bobKey = bob.generateKeys();



// Exchange keys and generate a shared secret
const aliceSecret = alice.computeSecret(bobKey)
const bobSecret = bob.computeSecret(aliceKey);

console.log('Shared secret (Alice):', aliceSecret.toString('hex'));
console.log('Shared secret (Bob):', bobSecret.toString('hex'));

// Verify if shared secrets are equal
console.log('Shared secrets match:', aliceSecret.equals(bobSecret));