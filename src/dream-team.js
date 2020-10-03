const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members =[]) {
  //throw new CustomError('Not implemented');
 
  if(
    !members ||
    members.length ===0 ||
    !Array.isArray(members)
  ) return false;
  
  let nameTeam = members.reduce((res, item) => {
    if(typeof item !== 'string' || !item.length || !item.trim() ) return res;
    const itemTrimmed = item.trim();
    res.push(itemTrimmed[0].toUpperCase());
    return res;
  }, []);
  
return nameTeam.sort().join('');
};
