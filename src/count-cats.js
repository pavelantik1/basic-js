const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arrayCats) {
  throw new CustomError('Not implemented');  //!: Delete this!!

  const cat = '^^';

  if(!arrayCats.length) return 0;
  return arrayCats.reduce( (countCats, subArr) => {
      countCats += subArr.reduce((countC, item) => {
         item === cat ? countC++ : 0;
         return countC; 
    },0);
    return countCats;
  },0)

};
