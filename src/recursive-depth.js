const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let deep = 1;
    arr.forEach(item => {
      if(Array.isArray(item)) {
        let d = this.calculateDepth(item);
        if(d+1 > deep) deep = d+1;
      } 
    });
    return deep;
  }
};