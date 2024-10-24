/**Encrypted and Decrypted Message */
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

//Encrypt a message
const message = "Secret Message";
//Before Encrypted
console.log(`Before Encrypted Original Msg: ${message}`)
const cipher = crypto.createCipheriv(algorithm,key,iv);
let encrypted = cipher.update(message,'utf8','hex');
encrypted += cipher.final('hex');
console.log(`Encrypted Msg: ${encrypted}`)

//Decrypted a message
const decipher = crypto.createDecipheriv(algorithm,key,iv);
let decrypted = decipher.update(encrypted,'hex','utf8');
decrypted += decipher.final('utf8');
console.log(`Decrypted Msg: ${decrypted}`);
