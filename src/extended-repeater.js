const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = '') {
  let {repeatTimes = 1, 
    separator = '+', 
    addition = '', 
    additionRepeatTimes = 1, 
    additionSeparator = '|'} = options;
  let resultString = '';

  if (typeof str !== 'string') str = String(str);
    for(let i = 1; i<= repeatTimes;i++){
      resultString === '' ? resultString = str : resultString += separator + str;
      let additionString = '';
      for(let j = 1; j <= additionRepeatTimes; j++) {
        additionString === '' ? additionString = addition : additionString += additionSeparator + addition;
       
      }
      resultString += additionString;
   }
  
   return resultString;
};
  