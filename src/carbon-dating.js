const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity=0) {
  throw new CustomError('Not implemented'); //!: Delete this!!
  const sampleActNumber = parseFloat(sampleActivity);

  if(
    typeof sampleActivity !== 'string' || 
    sampleActivity.length === 0 ||
    isNaN(sampleActNumber ) ||
    sampleActNumber > 15 ||
    sampleActNumber <= 0
  ) return false;  

  const yearsSample = HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY/sampleActNumber)/Math.LN2;
  return Math.ceil(yearsSample);

};
