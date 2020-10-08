const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date === undefined) return 'Unable to determine the time of year!'
  
  const month = date.getMonth();
  const validDate = new Date(date.getTime());
  
  if(
  date.getFullYear() !== validDate.getFullYear() ||
  date.getMonth() !== validDate.getMonth() ||
  date.getDate() !== validDate.getDate() ||
  date.getHours() !== validDate.getHours() ||
  date.getMinutes() !== validDate.getMinutes() ||
  date.getSeconds() !== validDate.getSeconds() ||
  date.getMilliseconds() !== validDate.getMilliseconds() 
  ) {   
    throw new Error();
  }
  
  switch (month) {
    case 0:
    case 1:
    case 11:
      return 'winter';
    case 2:
    case 3:
    case 4:
      return 'spring';
    case 5:
    case 6:
    case 7: 
      return 'summer';
    case 8:
    case 9:
    case 10:
      return 'autumn';
    default:
      return 'Error';
  }

};
