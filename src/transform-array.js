const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const controls = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
 
  if (!Array.isArray(arr)) throw new Error;
  if ( arr.length === 0 ) return [];
  let tempAr = arr.slice();
  
  tempAr.forEach((item, index, array) => {
    switch (item){
      case '--discard-next':
        if(index  === array.length-1){
          array[index] ='';
          return;
        } 
        array[index +1] ='';
        array[index] ='';
        return;
      case '--discard-prev':
        if(index === 0 || array[index-1]==='') {
          array[index] ='';
          return;
        }
        array[index-1]= '';
        array[index] ='';
        return ;
      case '--double-next':
        if(index === array.length-1 || array[index+1] === '') {
          array[index] ='';
          return;
        }
        array[index] = array[index+1];        
        return;
      case '--double-prev':
        if(index === 0 || array[index-1] === '') {          
          array[index]='';
          return;
        }
        array[index] = array[index-1];
        return;            
    }
  });

  return tempAr.reduce((result, item) => {
    if(item === '') return result;
    result.push(item);
    return result;
  }, [])
 
};
