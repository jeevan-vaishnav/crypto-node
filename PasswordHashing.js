const crypto = require('crypto');

//Hash a password using PBKDF2
const pas = "mySecurePassword";
const salt = crypto.randomBytes(16).toString('hex');//Generate a random salt
console.log(salt)

crypto.pbkdf2(pas,salt,100000,64,'sha512',(err,derivedKey)=>{
    if(err) throw err
    console.log('Password Hash:', derivedKey.toString('hex'));
})