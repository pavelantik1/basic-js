const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {   
  constructor (arg = true) {
    this.isStraightDirection = arg;
  }
  doReverse (str) {
    let arrStr = str.split('');
    arrStr.reverse();
    return arrStr.join('');
  }
  increaseKeyLength ( message, key) {
    if(key.length < message.length) {
      let maxKeyIncluded = Math.trunc( message.length/key.length) ;
      for (let i = 1; i <= maxKeyIncluded;i++) key +=key;
    }
    return key;
  }

  encrypt(message, key) {
    throw new CustomError('Not implemented');
    if(message === undefined || key === undefined ) throw new Error;
    key = this.increaseKeyLength(message, key);
    message = message.toUpperCase();
    key = key.toUpperCase();

   let encryptedMessage = '';
   let j = 0;
   for(let i =0; i < message.length; i++) {     
     if(message[i].charCodeAt(0)< 65 || message[i].charCodeAt(0)> 90) {
       encryptedMessage += message[i];
       j++;     
      }
     else {
      const messLetterCode = message[i].charCodeAt(0) - 65;
      const keyLetterCode = key[i-j].charCodeAt(0)-65;      
      encryptedMessage += String.fromCharCode((( messLetterCode + keyLetterCode) % 26) + 65);
     }
   }

   if(this.isStraightDirection) return encryptedMessage;
   return this.doReverse(encryptedMessage);
  }  
  
  
  decrypt(message, key) {
    throw new CustomError('Not implemented');
    if(message === undefined || key === undefined ) throw new Error;    
    key = this.increaseKeyLength(message, key);
    key = this.increaseKeyLength(message, key);
    message = message.toUpperCase();
    key = key.toUpperCase();

    let decryptedMessage = '';
    let j = 0;
    for(let i =0; i < message.length; i++) {
     if(message[i].charCodeAt(0)< 65 || message[i].charCodeAt(0)> 90) {
      decryptedMessage += message[i];
       j++;
      }
     else {
       const messLetterCode = message[i].charCodeAt(0) - 65;
       const keyLetterCode = key[i-j].charCodeAt(0)-65;
       decryptedMessage += String.fromCharCode((( messLetterCode - keyLetterCode +26) % 26) + 65);
     }
   }
    
   if(this.isStraightDirection) return decryptedMessage;
   return this.doReverse(decryptedMessage);
  }
}

module.exports = VigenereCipheringMachine;
